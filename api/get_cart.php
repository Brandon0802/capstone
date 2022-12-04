<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8'); 

    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);
  if($postjson['aksi'] == "get_cart"){
    $uid=$postjson['uid'];

    $cart = mysqli_query($mysqli, "SELECT c.*,p.product_image,p.product_name  FROM cart as c, products as p WHERE `user_id`='$uid' AND c.product_id=p.product_id" );
    $ship = mysqli_fetch_array(mysqli_query($mysqli, "SELECT s.shipping_fee, s.special_shipping FROM shipping_fees as s, consumer_account as c WHERE s.barangay_id=(SELECT c.barangay_id FROM consumer_account as c WHERE c.user_id='$uid') GROUP BY s.barangay_id"));
    $user = mysqli_fetch_array(mysqli_query($mysqli, "SELECT ca.first_name, ca.last_name, ca.street, b.barangay_name, ca.contact_number  FROM consumer_account as ca, barangay as b 
    WHERE ca.user_id='$uid' AND ca.barangay_id=b.barangay_id "));
    $getsum = mysqli_fetch_array(mysqli_query($mysqli, "SELECT SUM(price) FROM cart WHERE `user_id`='$uid' "));
    
    $sum=$getsum['SUM(price)'];
    
    $userdata= array(
      'first_name'=>$user['first_name'],
      'last_name'=>$user['last_name'],
      'street'=>$user['street'],
      'barangay_name'=>$user['barangay_name'],
      'contact_number'=>$user['contact_number'],
      'shipping_fee'=>$ship['shipping_fee'],
      'special_shipping'=>$ship['special_shipping']
    );

    $data = array();
    while($rows = mysqli_fetch_array($cart)){
      $data[] = array(
        'cart_id' => $rows['cart_id'],
        'user_id' => $rows['user_id'],
        'product_id' => $rows['product_id'],
        'product_name' => $rows['product_name'],
        'image' => $rows['product_image'],
        'varname1' =>$rows['varname1'],
        'classi1' =>$rows['classi1'],
        'varname2' => $rows['varname2'],
        'classi2' => $rows['classi2'],
        'price' => $rows['price'],
        'quantity' => $rows['quantity'],
        'confirmation'=>$rows['confirmation']
        );
    }
  
   
  
     
        $result = json_encode(array('success' => true, 'result' => $data, 'userdata'=>$userdata, 'sum'=>$sum));

        echo $result;
  

}else if($postjson['aksi']=="remove_cart"){

  $cid=$postjson['cid'];

  $del=mysqli_query($mysqli,"DELETE FROM cart WHERE cart_id ='$cid'");

  if($del){
    $result = json_encode(array('success' => true, 'result' => 'Removed'));
  }else{
    $result = json_encode(array('success' => false, 'result' => 'Failed'));
  }
  echo $result;
}else if($postjson['aksi']=="get_cart_to_order"){

  $uid=$postjson['uid'];
  $type=$postjson['shipping'];
  $sql = mysqli_query($mysqli, "SELECT MAX(order_id) FROM orders");
  $result = mysqli_fetch_assoc($sql);
  $order_id = $result['MAX(order_id)'];
  $order_id++; 
  $getbid = mysqli_query($mysqli, "SELECT barangay_id FROM consumer_account WHERE `user_id`='$uid'");
  $res= mysqli_fetch_assoc($getbid);
  $bid=$res['barangay_id'];

  $cart = mysqli_query($mysqli, "SELECT c.*,p.product_image,p.product_name  FROM cart as c, products as p WHERE `user_id`='$uid' AND c.product_id=p.product_id" );
    $user = mysqli_fetch_array(mysqli_query($mysqli, "SELECT ca.first_name, ca.last_name, ca.street, b.barangay_name, ca.contact_number  FROM consumer_account as ca, barangay as b 
    WHERE ca.user_id='$uid' AND ca.barangay_id=b.barangay_id "));
    $getsum = mysqli_fetch_array(mysqli_query($mysqli, "SELECT SUM(price) FROM cart WHERE `user_id`='$uid' "));
    $con_num=$user['contact_number'];
    $sum=$getsum['SUM(price)'];
    $data = array();

    
    $insertorder=mysqli_query($mysqli, "INSERT INTO orders SET 
    `order_id`='$order_id',
     `user_id`='$uid',
    `user_name`='$user[first_name]',
     `contact_number`='$con_num',
      `confirmation`='Not yet Appproved',
      `type`='$type',
      `total_price`='$sum',
      `barangay_id`='$bid'");

       $insertorder=mysqli_query($mysqli, "INSERT INTO orders_to_driver SET 
       `order_id`='$order_id',
        `user_id`='$uid',
       `user_name`='$user[first_name]',
        `contact_number`='$con_num',
         `confirmation`='Not yet Appproved',
         `type`='$type',
         `total_price`='$sum',
         `barangay_id`='$bid'");

    while($rows = mysqli_fetch_array($cart)){
        
        $insertorder2=mysqli_query($mysqli, "INSERT INTO order_details SET 
        `order_id`='$order_id',
        `product`='$rows[product_name]',
         `classification1`='$rows[classi1]',
          `classification2`='$rows[classi2]',
          `quantity`='$rows[quantity]',
          `price`='$rows[price]'");
      
      $data[] = array(
        'cart_id' => $rows['cart_id'],
        'user_id' => $rows['user_id'],
        'product_id' => $rows['product_id'],
        'product_name' => $rows['product_name'],
        'image' => $rows['product_image'],
        'varname1' =>$rows['varname1'],
        'classi1' =>$rows['classi1'],
        'varname2' => $rows['varname2'],
        'classi2' => $rows['classi2'],
        'price' => $rows['price'],
        'quantity' => $rows['quantity']
        );
    }

  if($insertorder){
    $del=mysqli_query($mysqli,"DELETE FROM cart WHERE `user_id` ='$uid'");
    $del=mysqli_query($mysqli,"UPDATE checkout SET `confirmation` = 'Checked Out' WHERE `user_id` ='$uid'");
    $result = json_encode(array('success' => true, 'result' => 'Successfully ordered'));
  }else{
    $result = json_encode(array('success' => false, 'result' => 'Failed'));
  }
  echo $result;
}