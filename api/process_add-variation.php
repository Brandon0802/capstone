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

    $s = mysqli_query($mysqli, "SELECT MAX(variation_id) FROM variation");
    $r = mysqli_fetch_assoc($s);
    $v_id = $r['MAX(variation_id)'];
    $v_id++;

    if($postjson['aksi']=="process_add-variation") {
      $varName1 = $postjson['variationName1'];
      $varName2 = $postjson['variationName2'];
      
      $v1a = $postjson['v1a'];
      $v1b = $postjson['v1b'];
      $v1c = $postjson['v1c'];
      $v1e = $postjson['v1e'];
      $v1d = $postjson['v1d'];
      $v1f = $postjson['v1f'];

      $v1ap = $postjson['v1ap'];
      $v1bp = $postjson['v1bp'];
      $v1cp = $postjson['v1cp'];
      $v1ep = $postjson['v1ep'];
      $v1dp = $postjson['v1dp'];
      $v1fp = $postjson['v1fp'];

      $v1as = $postjson['v1as'];
      $v1bs = $postjson['v1bs'];
      $v1cs = $postjson['v1cs'];
      $v1es = $postjson['v1es'];
      $v1ds = $postjson['v1ds'];
      $v1fs = $postjson['v1fs'];
      // end of variation 1

      $v2g = $postjson['v2g'];
      $v2h = $postjson['v2h'];
      $v2i = $postjson['v2i'];
      $v2j = $postjson['v2j'];
      $v2k = $postjson['v2k'];
      $v2l = $postjson['v2l'];

      $v2gp = $postjson['v2gp'];
      $v2hp = $postjson['v2hp'];
      $v2ip = $postjson['v2ip'];
      $v2jp = $postjson['v2jp'];
      $v2kp = $postjson['v2kp'];
      $v2lp = $postjson['v2lp'];

      $v2gs = $postjson['v2gs'];
      $v2hs = $postjson['v2hs'];
      $v2is = $postjson['v2is'];
      $v2js = $postjson['v2js'];
      $v2ks = $postjson['v2ks'];
      $v2ls = $postjson['v2ls'];
      //end of variration 2

      if($varName1!==""){
        if($v1a!==""){
          $insert = mysqli_query($mysqli, "INSERT INTO variation SET
            variation_id        = '$v_id',
            product_id          = '$prod_id',
            variation_name      = '$varName1',
            variation_classification = '$v1a',
            variation_price     = '$v1ap',
            variation_stock     = '$v1as'
        ");
        }
        if($v1b!==""){
          $insert = mysqli_query($mysqli, "INSERT INTO variation SET
            variation_id        = '$v_id',
            product_id          = '$prod_id',
            variation_name      = '$varName1',
            variation_classification = '$v1b',
            variation_price     = '$v1bp',
            variation_stock     = '$v1bs'
        ");
        }
        if($v1c!==""){
          $insert = mysqli_query($mysqli, "INSERT INTO variation SET
            variation_id        = '$v_id',
            product_id          = '$prod_id',
            variation_name      = '$varName1',
            variation_classification = '$v1c',
            variation_price     = '$v1cp',
            variation_stock     = '$v1cs'
        ");
        }if($v1d!==""){
          $insert = mysqli_query($mysqli, "INSERT INTO variation SET
            variation_id        = '$v_id',
            product_id          = '$prod_id',
            variation_name      = '$varName1',
            variation_classification = '$v1d',
            variation_price     = '$v1dp',
            variation_stock     = '$v1ds'
        ");
        }
        if($v1e!==""){
          $insert = mysqli_query($mysqli, "INSERT INTO variation SET
            variation_id        = '$v_id',
            product_id          = '$prod_id',
            variation_name      = '$varName1',
            variation_classification = '$v1e',
            variation_price     = '$v1ep',
            variation_stock     = '$v1es'
        ");
        }
        if($v1f!==""){
          $insert = mysqli_query($mysqli, "INSERT INTO variation SET
            variation_id        = '$v_id',
            product_id          = '$prod_id',
            variation_name      = '$varName1',
            variation_classification = '$v1f',
            variation_price     = '$v1fp',
            variation_stock     = '$v1fs'
        ");
        }
        
      }//end of variation 1
      if($varName2!==""){
        if($v2g!==""){
          $insert = mysqli_query($mysqli, "INSERT INTO variation_2 SET
            variation_id        = '$v_id',
            product_id          = '$prod_id',
            variation_name      = '$varName2',
            variation_classification = '$v2g',
            variation_price     = '$v2gp',
            variation_stock     = '$v2gs' 
        ");
        }
        if($v2h!==""){
          $insert = mysqli_query($mysqli, "INSERT INTO variation_2 SET
            variation_id        = '$v_id',
            product_id          = '$prod_id',
            variation_name      = '$varName2',
            variation_classification = '$v2h',
            variation_price     = '$v2hp',
            variation_stock     = '$v2hs'
        ");
        }
        if($v2i!==""){
          $insert = mysqli_query($mysqli, "INSERT INTO variation_2 SET
            variation_id        = '$v_id',
            product_id          = '$prod_id',
            variation_name      = '$varName2',
            variation_classification = '$v2i',
            variation_price     = '$v2ip',
            variation_stock     = '$v2is'
        ");
        }if($v2j!==""){
          $insert = mysqli_query($mysqli, "INSERT INTO variation_2 SET
            variation_id        = '$v_id',
            product_id          = '$prod_id',
            variation_name      = '$varName2',
            variation_classification = '$v2j',
            variation_price     = '$v2jp',
            variation_stock     = '$v2js'
        ");
        }
        if($v2k!==""){
          $insert = mysqli_query($mysqli, "INSERT INTO variation_2 SET
            variation_id        = '$v_id',
            product_id          = '$prod_id',
            variation_name      = '$varName2',
            variation_classification = '$v2k',
            variation_price     = '$v2kp',
            variation_stock     = '$v2ks'
        ");
        }
        if($v2l!==""){
          $insert = mysqli_query($mysqli, "INSERT INTO variation_2 SET
            variation_id        = '$v_id',
            product_id          = '$prod_id',
            variation_name      = '$varName2',
            variation_classification = '$v2l',
            variation_price     = '$v2lp',
            variation_stock     = '$v2ls'
        ");
        }
      }
      
      if($insert){
        $result = json_encode(array('success' => true, 'msg' => 'Successfully Added!'));
      }else{
        $result = json_encode(array('success' => false, 'msg' => 'Failed'));
      }
      echo $result;
    }
