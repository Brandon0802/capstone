<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8'); 

    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);
    
    $sql = mysqli_query($mysqli, "SELECT MAX(cart_id) FROM cart");
  
    $result = mysqli_fetch_assoc($sql);
    $cart_id = $result['MAX(cart_id)'];
    $cart_id++;

    if($postjson['aksi'] == "add_to_cart"){
    
    $prod_id = $postjson['product_id'];
    $uid = $postjson['uid'];
    $varname1 = $postjson['varname1'];
    $varname2 = $postjson['varname2'];
    $classi1 = $postjson['classi1'];
    $classi2 = $postjson['classi2'];
    $price = $postjson['var_price'];
    $quant = $postjson['quant'];

    $getstock=mysqli_fetch_array(mysqli_query($mysqli, "SELECT stock FROM products WHERE product_id='$prod_id'"));
    $a = $getstock['stock'];
    $b = $quant;

    $newstock=$a-$b;
    $stock=mysqli_query($mysqli, "UPDATE products SET `stock`='$newstock' WHERE product_id='$prod_id' ");

    if($varname1==null){
       $getvar1stock=mysqli_fetch_array(mysqli_query($mysqli, "SELECT variation_stock FROM variation WHERE variation_name='$varname1'"));

    $c = $getvar1stock['variation_stock'];
    $d = $quant;

    $newvar1stock=$c-$d;
    $stockvar1=mysqli_query($mysqli, "UPDATE variation SET `variation_stock`='$newvar1stock' WHERE variation_name='$varname1'");
    }
   

    if($varname2==null){
      $getvar2stock=mysqli_fetch_array(mysqli_query($mysqli, "SELECT variation_stock FROM variation_2 WHERE variation_name='$varname2'"));
    $e = $getvar2stock['variation_stock'];
    $f = $quant;

    $newvar2stock=$e-$f;
    $stockvar2=mysqli_query($mysqli, "UPDATE variation_2  SET`variation_stock`='$newvar2stock' WHERE variation_name='$varname2' ");
    }
    

  
    if($varname1=="NULL"){
      $varname1=" ";
    }
    if($varname2=="NULL"){
      $varname2=" ";
    }
    if($classi1=="NULL"){
      $classi1=" ";
    }
    if($classi2=="NULL"){
      $classi2=" ";
    }

    $insert=mysqli_query($mysqli, "INSERT INTO cart SET
    `cart_id` = '$cart_id',
    `user_id` = '$uid',
    `product_id` = '$prod_id',
    `varname1` = '$varname1',
    `classi1` = '$classi1',
    `varname2` = '$varname2',
    `classi2` = '$classi2',
    `price` = '$price',
    `quantity` = '$quant',
    `confirmation` = 'Not Yet Checked Out'
    ");

     $insert1=mysqli_query($mysqli, "INSERT INTO checkout SET
    `cart_id` = '$cart_id',
    `user_id` = '$uid',
    `product_id` = '$prod_id',
    `varname1` = '$varname1',
    `classi1` = '$classi1',
    `varname2` = '$varname2',
    `classi2` = '$classi2',
    `price` = '$price',
    `quantity` = '$quant',
    `confirmation` = 'Not Yet Checked Out'
    ");

   
    
   

  if($insert){
    $result = json_encode(array('success' => true, 'msg' => 'Added to Cart!', 'stock'=> $quant));
  }else{
    $result = json_encode(array('success' => false, 'msg' => 'Failed!'));
  }
  echo $result;

}