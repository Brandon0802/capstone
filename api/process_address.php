<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8'); 

    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);

  if($postjson['aksi'] == "process_address"){
    $user_id = $postjson['uid'];

    $name=$postjson['name'];
    $contact_number= $postjson['contact_number'];
    $street= $postjson['street'];
    $barangay= $postjson['barangay'];
    $specific= $postjson['specific'];
    $latitude= $postjson['latitude'];
    $longitude= $postjson['longitude'];

    $insert = mysqli_query($mysqli, "INSERT INTO shipping_address SET
    user_id      = '$user_id',
    full_name        = '$name',
    contact_number       = '$contact_number',
    barangay      = '$barangay',
    street_building_house      = '$street',
    specific_location = '$specific',
    longitude      = '$longitude',
    lattitude = '$latitude';
");



if($insert){
    $result = json_encode(array('success' => true, 'msg' => 'Successfully Added!'));
  }else{
    $result = json_encode(array('success' => false, 'msg' => 'Failed!'));
  }
  echo $result;






  }
