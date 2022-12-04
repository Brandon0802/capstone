<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8');

    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);


      $sql = mysqli_query($mysqli, "SELECT MAX(store_id) FROM stores");
      $result = mysqli_fetch_assoc($sql);
      $store_id = $result['MAX(store_id)'];
      $store_id++;
      
  
      if($postjson['aksi']=="process_create-store") {
        $insert = mysqli_query($mysqli, "INSERT INTO stores SET
              store_id         = '$store_id',
              user_id          = '$postjson[user_id]',
              store_name       = '$postjson[store_name]',
              store_image      = 'NULL'
          ");
          
          if($insert){
            $result = json_encode(array('success' => true, 'msg' => 'Successfully Created!', 'sid'=>$store_id ));
          }else{
            $result = json_encode(array('success' => false, 'msg' => 'Failed!'));
          }
          echo $result;
  
      }
    
 



