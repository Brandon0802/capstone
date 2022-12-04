<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8'); 

    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);
  if($postjson['aksi'] == "get_store"){

    $id=$postjson['user_id'];
    
    $getstoredata=mysqli_fetch_array(mysqli_query($mysqli, "SELECT * FROM stores WHERE `user_id`='$id'"));

    $store_name=$getstoredata['store_name'];
    $store_image=$getstoredata['store_image'];

    if($getstoredata){
      $result = json_encode(array('success' => true, 'sname'=> $store_name, 'simage'=> $store_image, 'msg'=>'Success'));
    }else{
      $result = json_encode(array('success' => false, 'msg'=>'Failed'));
    }
    echo $result;
}
