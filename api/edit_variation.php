<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8'); 

    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);

  if($postjson['aksi'] == "edit_variation"){

    $varname=$postjson['var_name'];
    $varid=$postjson['var_id'];
    $varclass=$postjson['var_class'];
    $varprice=$postjson['var_price'];
    $varstock=$postjson['var_stock'];
    $vclass=$postjson['vclass'];
    if($vclass==""){
      $vclass=$varclass;
    }
    $vprice=$postjson['vprice'];
    if($vprice==""){
      $vprice=$varprice;
    }
    $vstock=$postjson['vstock'];
    if($vstock==""){
      $vstock=$varstock;
    }

    $checkifvar2= mysqli_fetch_array(mysqli_query($mysqli, "SELECT * FROM variation_2 WHERE variation_name = '$varname'"));

    if($checkifvar2){
        $updatevar2= mysqli_query($mysqli, "UPDATE `variation_2` SET `variation_classification`='$vclass',`variation_price`='$vprice',`variation_stock`='$vstock'  WHERE `variation_id`='$varid' 
        AND `variation_name`='$varname' AND `variation_price`='$varprice' AND `variation_stock`='$varstock'");
    }else{
      $updatevar1= mysqli_query($mysqli, "UPDATE `variation` SET `variation_classification`='$vclass',`variation_price`='$vprice',`variation_stock`='$vstock'  WHERE `variation_id`='$varid' 
      AND `variation_name`='$varname' AND `variation_price`='$varprice' AND `variation_stock`='$varstock'");
    }

    $message = json_encode(array('success' =>true, 'msg' => 'Failed'));

    echo $message;
  }