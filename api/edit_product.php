<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8'); 

    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);

    if($postjson['aksi'] == "edit_product"){
    
    $prod_id = $postjson['product_id'];
    $prod_name = $postjson['prod_name'];
    $prod_desc = $postjson['prod_desc'];
    $prod_cond = $postjson['prod_cond'];
    $price = $postjson['price'];
    $stock = $postjson['stock'];

    $update=mysqli_query($mysqli, "UPDATE products SET `product_name`='$prod_name', `product_desc`='$prod_desc',
    `product_condition`='$prod_cond', `price`='$price', `var_price`='$price', `stock`='$stock' WHERE product_id='$prod_id' ");

    if($update){
      $message = json_encode(array('success' =>true, 'msg' => 'Product Updated'));
    }else{
      $message = json_encode(array('success' =>false, 'msg' => 'Failed'));
    }

    echo $message;
    
    





}