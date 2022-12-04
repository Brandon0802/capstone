<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8'); 

    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);

    $sql = mysqli_query($mysqli, "SELECT MAX(product_id) FROM products");
    $result = mysqli_fetch_assoc($sql);
    $prod_id = $result['MAX(product_id)'];
    $prod_id++;
    $prod_name=$postjson['product_name'];

    if($postjson['aksi']=="process_add-products") {
      $checkname= mysqli_fetch_array(mysqli_query($mysqli, "SELECT product_name FROM products WHERE product_name LIKE '$prod_name' "));
      if($checkname){
        $result = json_encode(array('success' => false, 'msg' => 'Product name already exist!'));
        echo $result;
      }else{

      $di = $postjson['user_id'];
      $price=$postjson['price'];
      $var_price=$postjson['var_price'];

      if($price=="Price Varies"){ //have variation
        $price=0; 
      }else{ //does not have variation
        $var_price=$price;
      }


      $ss = mysqli_fetch_array(mysqli_query($mysqli, "SELECT store_id FROM stores WHERE stores.user_id='$di' "));
      $id = $ss['store_id'];
      $insert = mysqli_query($mysqli, "INSERT INTO products SET
            product_id      = '$prod_id',
            store_id         = '$id',
            product_image       = 'NULL',
            product_name      = '$postjson[product_name]',
            product_desc      = '$postjson[product_desc]',
            category = '$postjson[category]',
            price      = '$price',
            var_price = '$var_price',
            stock      = '$postjson[stock]',
            product_condition      = '$postjson[product_condition]'
        ");

            if($insert){
              $result = json_encode(array('success' => true, 'msg' => 'Successfully Added!'));
            }else{
              $result = json_encode(array('success' => false, 'msg' => 'Failed!'));
            }
            echo $result;

    }
  }