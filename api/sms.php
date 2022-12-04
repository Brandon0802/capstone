<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8'); 

    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);

    $sql = mysqli_query($mysqli, "SELECT MAX(transaction_id) FROM transaction_history");
    $result = mysqli_fetch_assoc($sql);
    $tran_id = $result['MAX(transaction_id)'];
    $tran_id++;

    
    $sql1 = mysqli_query($mysqli, "SELECT MAX(dec_id) FROM declined_orders");
    $result = mysqli_fetch_assoc($sql1);
    $dec_id = $result['MAX(dec_id)'];
    $dec_id++;
    
    $sql2 = mysqli_query($mysqli, "SELECT MAX(pick_id) FROM pickedup_order");
    $result = mysqli_fetch_assoc($sql2);
    $pick_id = $result['MAX(pick_id)'];
    $pick_id++;

    $sql3 = mysqli_query($mysqli, "SELECT MAX(deliver_id) FROM delivered_orders");
    $result = mysqli_fetch_assoc($sql3);
    $del_id = $result['MAX(deliver_id)'];
    $del_id++;


    $sql4 = mysqli_query($mysqli, "SELECT MAX(ship_id) FROM shipped_orders");
    $result = mysqli_fetch_assoc($sql4);
    $ship_id = $result['MAX(ship_id)'];
    $ship_id++;

    $sql5 = mysqli_query($mysqli, "SELECT MAX(accept_id) FROM accepted_orders");
    $result = mysqli_fetch_assoc($sql5);
    $acc_id = $result['MAX(accept_id)'];
    $acc_id++;
 
    if($postjson['aksi'] == "accept_order"){
    $oid=$postjson['orderid'];
    $num=$postjson['num'];
    $name=$postjson['fname'];
    $did=$postjson['did']; 
    $bid=$postjson['bid'];
    $message=$name.', your order is being picked-up by the courier. Await delivery.';
    send_sms($num,$message);
    
    $sql=mysqli_query($mysqli, "INSERT INTO `transaction_history` VALUES ('$tran_id','$oid','$did','Picked-up by courier','$bid') ");
    $sql=mysqli_query($mysqli, "INSERT INTO `pickedup_order` VALUES ('$pick_id','$oid','$did','$bid','Picked-up by courier') ");
    $sql=mysqli_query($mysqli, "UPDATE current_transaction SET `status` = 'Picked-up by courier' WHERE order_id ='$oid'");
    $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Picked-up by courier' WHERE order_id ='$oid'");
    $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `status` = 'Accepted' WHERE order_id ='$oid'");

    $sql = mysqli_query($mysqli, "SELECT `queue` FROM driver_queue WHERE driver_id='$did' ");
    $result = mysqli_fetch_assoc($sql);
    $queue = $result['queue'];

    $sql=mysqli_query($mysqli, "INSERT INTO `accepted_orders` VALUES ('$acc_id','$oid','$did','$bid','Accepted', '$queue') ");

    $message = json_encode(array('success' =>true, 'msg' => 'Pickedup'));
    echo $message;
}else if($postjson['aksi'] == "ship_order"){
    $oid=$postjson['orderid'];
    $num=$postjson['num'];
    $name=$postjson['fname'];
    $did=$postjson['did'];
    $bid=$postjson['bid'];

    $message=$name.', your order is being shipped by the courier. Please prepare payment.';
    send_sms($num,$message);
    $sql=mysqli_query($mysqli, "INSERT INTO `transaction_history` VALUES ('$tran_id','$oid','$did','Shipped by courier','$bid') ");
    $sql=mysqli_query($mysqli, "INSERT INTO `shipped_orders` VALUES ('$ship_id','$oid','$did','$bid','Shipped by courier') ");
    $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Shipped by courier' WHERE order_id ='$oid'");
    $sql=mysqli_query($mysqli, "UPDATE current_transaction SET `status` = 'Shipped by courier' WHERE order_id ='$oid'");

    $message = json_encode(array('success' =>true, 'msg' => 'Approved'));
    echo $message;
}
else if($postjson['aksi'] == "decline_order"){

    $oid=$postjson['orderid'];
    $num=$postjson['num'];
    $name=$postjson['fname'];
    $did=$postjson['did'];
    $bid=$postjson['bid'];
    $brgy=$postjson['barangay']; //driver
    $barangay=$postjson['brgy']; //consumer

    $sql = mysqli_query($mysqli, "SELECT  `queue` FROM orders_to_driver WHERE order_id='$oid'");
    $result = mysqli_fetch_assoc($sql);
    $queue = $result['queue'];
    $queue++;

    $sq = mysqli_query($mysqli, "SELECT  `driver_id` FROM driver_queue WHERE `queue`='$queue' AND `barangay`='$brgy'");
    $cnt=0;
    while($rows=mysqli_fetch_array($sq)){
        $cnt++;
    }
    if($cnt==0){
        if($barangay=='Luntal'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Dalima' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Bayudbud'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Luntal' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Sabang'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Luntal' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Dalima'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Luntal' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Toong'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Mataywanac' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Magahis'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Mataywanac' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Talon'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Lumbangan' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Lumbangan'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Talon' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='San Jose'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Bolbok' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Bolbok'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='San Jose' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Burgos'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Luna' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Rillo'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Burgos' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Rizal'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Rillo' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Tuyon-Tuyon'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Acle' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Acle'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Tuyon-Tuyon' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Putol'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Guinhawa' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Dao'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Putol' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Malibu'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Putol' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Palincaro'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Talon' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Guinhawa'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Putol' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Mataywanac'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Toong' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }if($barangay=='Luna'){
            $s = mysqli_query($mysqli, "SELECT  MIN(`queue`), `driver_id` FROM driver_queue WHERE barangay='Burgos' AND `status`='Pending'");
            $res = mysqli_fetch_assoc($s);
            $nqueue=$res['MIN(`queue`)'];
            $nd=$res['driver_id'];
            $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$nd', `queue`='$nqueue' 
            WHERE order_id ='$oid'");
        }
    }else{
        $sq = mysqli_query($mysqli, "SELECT  `driver_id` FROM driver_queue WHERE `queue`='$queue' AND `barangay`='$brgy'");
        $res = mysqli_fetch_assoc($sq);
        $d = $res['driver_id'];
        $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Declined', `driver_id`='$d', `queue`='$queue' 
        WHERE order_id ='$oid'");
        $sql=mysqli_query($mysqli, "UPDATE current_transaction SET `status` = 'Declined', `driver_id`='$d' WHERE order_id ='$oid'");
    }




    $sql=mysqli_query($mysqli, "INSERT INTO `transaction_history` VALUES ('$tran_id','$oid','$did','Declined','$bid') ");
    $sql=mysqli_query($mysqli, "INSERT INTO `declined_orders` VALUES ('$dec_id','$oid','$did','$bid','Declined') ");

    $sql=mysqli_query($mysqli, "DELETE FROM `current_transaction` WHERE order_id ='$oid' AND `status`='Declined'");


    $message = json_encode(array('success' =>true, 'msg' => 'Approved'));
    echo $message;
}else if($postjson['aksi'] == "order_delivered"){
    $oid=$postjson['orderid']; 
    $num=$postjson['num'];
    $name=$postjson['fname'];
    $did=$postjson['did'];
    $bid=$postjson['bid'];
    $sql=mysqli_query($mysqli, "INSERT INTO `transaction_history` VALUES ('$tran_id','$oid','$did','Delivered','$bid') ");
    $sql=mysqli_query($mysqli, "INSERT INTO `delivered_orders` VALUES ('$del_id','$oid','$did','$bid','Delivered') ");
    $sql=mysqli_query($mysqli, "UPDATE orders SET `confirmation` = 'Delivered' WHERE order_id ='$oid'");
    $sql=mysqli_query($mysqli, "UPDATE current_transaction SET `status` = 'Delivered' WHERE order_id ='$oid'");
    $sql=mysqli_query($mysqli, "UPDATE orders_to_driver SET `confirmation` = 'Delivered' WHERE order_id ='$oid'");
    $sql=mysqli_query($mysqli, "DELETE FROM `current_transaction` WHERE order_id ='$oid'");


    $message = json_encode(array('success' =>true, 'msg' => 'Approved'));
    echo $message;
}
else if($postjson['aksi'] == "disapprove_order"){
    $oid=$postjson['orderid'];
    $sql=mysqli_query($mysqli, "UPDATE orders SET `confirmation` = 'Disapproved' WHERE order_id ='$oid'");
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