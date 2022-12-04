<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8'); 

    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);

  if($postjson['aksi'] == "get_product_details"){
    $image2;
    $image3;
    $varname1;
    $varname2;

    $var1data=array();
    $var2data=array();

    $uid=$postjson['user_id'];
    $p_id=$postjson['product_id'];
    $products = mysqli_fetch_array(mysqli_query($mysqli, "SELECT * FROM products WHERE product_id = '$p_id'"));
    
    $variation= $products['price'];
    if($variation==0){//check if product has variation
      $checkprodvar=mysqli_fetch_array(mysqli_query($mysqli, "SELECT * FROM variation_2 WHERE product_id = '$p_id'"));//check if product have 2 variation
      
      if($checkprodvar){
        // if have two variation
        $getvarname1= mysqli_fetch_array(mysqli_query($mysqli, "SELECT variation_name FROM variation WHERE product_id = '$p_id' GROUP BY product_id "));
        $varname1=$getvarname1['variation_name'];
          $getvar1details = mysqli_query($mysqli, "SELECT variation_id, variation_name, variation_classification, variation_price, variation_stock FROM variation WHERE product_id = '$p_id' AND variation_name ='$varname1' ");//get var details
          while($rows = mysqli_fetch_array($getvar1details)){
            $var1data[]=array(
              'variation_id' => $rows['variation_id'],
              'variation_name' => $rows['variation_name'],
              'variation_classification' => $rows['variation_classification'],
              'variation_price' => $rows['variation_price'],
              'variation_stock' => $rows['variation_stock']
            );
          }


        $getvarname2= mysqli_fetch_array(mysqli_query($mysqli, "SELECT variation_name FROM variation_2 WHERE product_id = '$p_id' GROUP BY product_id "));
        $varname2=$getvarname2['variation_name'];
        $getvar2details = mysqli_query($mysqli, "SELECT variation_id, variation_name, variation_classification, variation_price, variation_stock FROM variation_2 WHERE product_id = '$p_id' AND variation_name ='$varname2' ");//get var details
          while($rows1 = mysqli_fetch_array($getvar2details)){
            $var2data[]=array(
              'variation_id' => $rows1['variation_id'],
              'variation_name' => $rows1['variation_name'],
              'variation_classification' => $rows1['variation_classification'],
              'variation_price' => $rows1['variation_price'],
              'variation_stock' => $rows1['variation_stock']
            );
          }

      }else{
        //one variation
        $getvarname1= mysqli_fetch_array(mysqli_query($mysqli, "SELECT variation_name FROM variation WHERE product_id = '$p_id' GROUP BY product_id "));
        $varname1=$getvarname1['variation_name'];
        $varname2='NULL';
        $getvar1details = mysqli_query($mysqli, "SELECT variation_id, variation_name, variation_classification, variation_price, variation_stock FROM variation WHERE product_id = '$p_id' AND variation_name ='$varname1' ");//get var details
          while($rows = mysqli_fetch_array($getvar1details)){
            $var1data[]=array(
              'variation_id' => $rows['variation_id'],
              'variation_name' => $rows['variation_name'],
              'variation_classification' => $rows['variation_classification'],
              'variation_price' => $rows['variation_price'],
              'variation_stock' => $rows['variation_stock']
            );
          }
          $var2data='NULL';

      }
      

    }
    else{
      $var1data='NULL';
      $var2data='NULL';
      $varname1='NULL';
      $varname2='NULL';
    }

    
    $imagecount = mysqli_fetch_array(mysqli_query($mysqli, "SELECT COUNT(pd.image) FROM product_details as pd WHERE pd.product=(SELECT p.product_name FROM products as p WHERE product_id = '$p_id')"));
    if($imagecount['COUNT(pd.image)']==2){
      $productsimage2 = mysqli_fetch_array(mysqli_query($mysqli, "SELECT pd.image FROM product_details as pd WHERE pd.image LIKE '%image2%' AND pd.product=(SELECT p.product_name FROM products as p WHERE product_id = '$p_id')"));
      $image2=$productsimage2['image'];
      $productsimage3 = mysqli_fetch_array(mysqli_query($mysqli, "SELECT pd.image FROM product_details as pd WHERE pd.image LIKE '%image3%' AND pd.product=(SELECT p.product_name FROM products as p WHERE product_id = '$p_id')"));
      $image3=$productsimage3['image'];
    }else if($imagecount['COUNT(pd.image)']==1){
      $image3='NULL';
      $productsimage2 = mysqli_fetch_array(mysqli_query($mysqli, "SELECT pd.image FROM product_details as pd WHERE pd.image LIKE '%image2%' AND pd.product=(SELECT p.product_name FROM products as p WHERE product_id = '$p_id')"));
      $image2=$productsimage2['image'];
    }else{
      $image2='NULL';
      $image3='NULL'; 
    }
      $data= array(
        'product_id' => $products['product_id'],
        'store_id' => $products['store_id'],
        'product_image' => $products['product_image'],
        'product_name' =>$products['product_name'],
        'product_desc' =>$products['product_desc'],
        'price' => $products['price'],
        'stock' => $products['stock'],
        'var_price' => $products['var_price'],
        'product_condition' => $products['product_condition'],
        'image2' => $image2,
        'image3' => $image3,
        'varname1' => $varname1,
        'varname2' => $varname2
        
        );  
        $check='none';
        if($uid==null){

        }else{
           $address=mysqli_query($mysqli, "SELECT COUNT(barangay), user_id FROM shipping_address WHERE `user_id`='$uid' ");
            $add=mysqli_fetch_assoc($address);
            $check= $add['COUNT(barangay)'];
            if($check==0){
              $check='none';
            }else{
              $check=$add['user_id'];
            }

        }

  
      $result = json_encode(array('success' => true, 'result' => $data, 'var1'=>$var1data, 'var2'=>$var2data, 'address'=>$check));
      echo $result;
  
  }else{
    $result = json_encode(array('success' => false));
    echo $result;
  }
 

