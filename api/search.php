<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8');

    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);
    $key = $postjson['key'];

    if($postjson['aksi']=="search") {
        
        $sql = mysqli_query($mysqli, "SELECT * FROM `products` WHERE product_name LIKE '%$key%'");

        $data = array();

        while($rows = mysqli_fetch_array($sql)){
          $data[] = array(
            'product_id' => $rows['product_id'],
            'store_id' => $rows['store_id'],
            'product_image' => $rows['product_image'],
            'product_name' =>$rows['product_name'],
            'product_desc' =>$rows['product_desc'],
            'price' => $rows['price'],
            'var_price' => $rows['var_price'],
            'stock' => $rows['stock'],
            'product_condition' => $rows['product_condition']
            );
        }
      
       
      
          $result = json_encode(array('success' => true, 'result' => $data));
          echo $result;
    }else{
        $result = json_encode(array('success' => false));
        echo $result;
      }
        
