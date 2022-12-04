<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8'); 

    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);
    if($postjson['aksi'] == "approve_order"){
    $oid=$postjson['orderid'];
    $num=$postjson['num'];
    $name=$postjson['name'];
    $message=$name.', your order has been approved. Seller is preparing the parcel. Await delivery.';
    send_sms($num,$message);
    $sql=mysqli_query($mysqli, "UPDATE orders SET `confirmation` = 'Approved' WHERE order_id ='$oid'");
    $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Approved' WHERE order_id ='$oid'");

    $message = json_encode(array('success' =>true, 'msg' => 'Approved'));
    echo $message;
}else if($postjson['aksi'] == "disapprove_order"){
  $oid=$postjson['orderid'];
  $sql=mysqli_query($mysqli, "UPDATE orders SET `confirmation` = 'Disapproved' WHERE order_id ='$oid'");
  $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Disapproved' WHERE order_id ='$oid'");
  $num=$postjson['num'];
  $name=$postjson['name'];
  $message='Sorry '.$name.', your order has been disapproved by the seller.';
  send_sms($num,$message);

  $message = json_encode(array('success' =>true, 'msg' => 'Approved'));
  echo $message;
}


function send_sms($num,$message){
   
   $ch = curl_init();
$parameters = array(
    'apikey' => 'f6074844081925a3d3f6977fbd36bab3', //Your API KEY
    'number' => $num,
    'message' => $message,
    'sendername' => "SEMAPHORE"
);
curl_setopt( $ch, CURLOPT_URL,'https://semaphore.co/api/v4/messages' );
curl_setopt( $ch, CURLOPT_POST, 1 );

//Send the parameters set above with the request
curl_setopt( $ch, CURLOPT_POSTFIELDS, http_build_query( $parameters ) );

// Receive response from server
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
$output = curl_exec( $ch );

curl_close ($ch);

//Show the server response

}