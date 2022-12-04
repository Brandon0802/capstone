<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Credentials: true');
  header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
  header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
  header('Content-Type: application/json; charset=UTF-8');
  include "config.php";
  $postjson = json_decode(file_get_contents('php://input'), true);

  $id=($_POST['id']);
  $name=($_POST['name']);
  $img = upload('image');
  
  $message;
  if($img == "Failed"){
     $message = json_encode(array('success' =>false));
  }else{
     
     $sql= mysqli_query($mysqli,"UPDATE `stores` SET `store_image`='$img', `store_name`='$name' WHERE `user_id`='$id'");
     $message = json_encode(array('success' =>true,'dir' => $img));
  }
  echo $message;

  
  function upload($imgName){
   $date = date("YmHis");
   $img_src = null;
   if(isset($_FILES[$imgName])){
      $img_tmp = $_FILES[$imgName]['tmp_name'];
      $imgFolder = '../capstone-project/src/assets/products/'; #change mo to. 
      if(file_exists($img_tmp)){
         $taille_maxi = 10000000;
         $taille = filesize($_FILES[$imgName]['tmp_name']);
         $imgsize = getimagesize($_FILES[$imgName]['tmp_name']);
         $extenstions = array('.png','.jpeg');
         $extenstion = strtolower(strrchr($_FILES[$imgName]['name'],'.'));
         
         if($extenstion == '.jpeg'){
            $img_src = imagecreatefromjpeg($img_tmp);
         }elseif($extenstion == '.png'){
            $img_src = imagecreatefrompng($img_tmp);
         }else{
            return "Failed";
         }
        
         $new_width = 380;
         $new_length = 380;
         $image_finale = imagecreatetruecolor($new_width,$new_length);
         imagecopyresampled($image_finale,$img_src,0,0,0,0,$new_width,$new_length,$imgsize[0],$imgsize[1]);
         $imgName = $imgFolder.$date.'.jpg';
         imagejpeg($image_finale,$imgName);
         $imgName = '../assets/products/'.$date.'.jpg';
         return $imgName;
      }
      
   }
}