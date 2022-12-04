<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8'); 

    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);

    if($postjson['aksi'] == "delete_product"){
    
    $prod_id = $postjson['product_id'];
    $prod_name = $postjson['prod_name'];

    $delete1=mysqli_query($mysqli, "DELETE FROM `products` WHERE product_id='$prod_id' ");
    $delete2=mysqli_query($mysqli, "DELETE FROM `product_details` WHERE product_id='$prod_name' ");
    $delete3=mysqli_query($mysqli, "DELETE FROM `variation` WHERE product_id='$prod_id' ");
    $delete4=mysqli_query($mysqli, "DELETE FROM `variation_2` WHERE product_id='$prod_id' ");

    if($delete1){
      $message = json_encode(array('success' =>true, 'msg' => 'Product Deleted'));
    }else{
      $message = json_encode(array('success' =>false, 'msg' => 'Failed'));
    }

    echo $message;
    
    





}