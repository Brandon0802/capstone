<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8'); 

    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);

   if($postjson['aksi'] == "var_price"){
    $sql = mysqli_query($mysqli, "SELECT MAX(product_id) FROM variation");
    $result = mysqli_fetch_assoc($sql);
    $prod_id = $result['MAX(product_id)'];

    //$products = mysqli_query($mysqli, "SELECT MIN(v.variation_price), MAX(v.variation_price), MIN(v2.variation_price), MAX(v2.variation_price) FROM variation as v, variation_2 as v2 WHERE v.product_id = 3 AND v2.product_id = 3 and v.variation_id=v2.variation_id ");
    
    $var2=mysqli_fetch_array(mysqli_query($mysqli, "SELECT * from variation_2 WHERE product_id = '$prod_id' "));
   
    if($var2==null){
      $varprice=mysqli_fetch_array(mysqli_query($mysqli, "SELECT MIN(variation_price), MAX(variation_price) FROM variation WHERE product_id = '$prod_id' "));
      $data=$varprice['MIN(variation_price)'].'.00'.' - ₱'.$varprice['MAX(variation_price)'];
    }
    else{
      $varprice=mysqli_fetch_array(mysqli_query($mysqli, "SELECT MIN(v.variation_price), MAX(v.variation_price), MIN(v2.variation_price), MAX(v2.variation_price) FROM variation as v, variation_2 as v2 WHERE v.product_id = '$prod_id' AND v2.product_id = '$prod_id' and v.variation_id=v2.variation_id "));
      $vmin1=$varprice['MIN(v.variation_price)'];
      $vmin2=$varprice['MIN(v2.variation_price)'];
      $vmax1=$varprice['MAX(v.variation_price)'];
      $vmax2=$varprice['MAX(v2.variation_price)'];
      
      if($vmin1<$vmin2&&$vmax1>$vmax2){
        $data=$vmin1.'.00'.' - ₱'.$vmax1;
      }else if($vmin1<$vmin2&&$vmax1<$vmax2){
        $data=$vmin1.'.00'.' - ₱'.$vmax2;
      }else if($vmin1>$vmin2&&$vmax1<$vmax2){
        $data=$vmin2.'.00'.' - ₱'.$vmax2;
      }else if($vmin1>$vmin2&&$vmax1>$vmax2){
        $data=$vmin2.'.00'.' - ₱'.$vmax1;
      }else if($vmin1==$vmin2&&$vmax1<$vmax2){
        $data=$vmin1.'.00'.' - ₱'.$vmax2;
      }else if($vmin1==$vmin2&&$vmax1>$vmax2){
        $data=$vmin1.'.00'.' - ₱'.$vmax1;
      }else if($vmin1<$vmin2&&$vmax1==$vmax2){
        $data=$vmin1.'.00'.' - ₱'.$vmax2;
      }else if($vmin1>$vmin2&&$vmax1==$vmax2){
        $data=$vmin2.'.00'.' - ₱'.$vmax2;
      }
      
    }
     $result = json_encode(array('success' => true, 'result' => $data));
    echo $result;
  }