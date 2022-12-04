<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8');

    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);

    $sql = mysqli_query($mysqli, "SELECT MAX(user_id) FROM user_account");
    $result = mysqli_fetch_assoc($sql);
    $user_id = $result['MAX(user_id)'];
    $user_id++;

    $sql = mysqli_query($mysqli, "SELECT barangay_id FROM barangay WHERE barangay_name = '$postjson[barangay_name]'");
    $result = mysqli_fetch_assoc($sql);
    $barangay_id = $result['barangay_id'];

    if($postjson['aksi']=="process_consumer") {
        $password = md5($postjson['password']);
        
        $checkemail = mysqli_fetch_array(mysqli_query($mysqli, "SELECT username FROM user_account WHERE  username = '$postjson[username]'"));

        if($checkemail){
            $result = json_encode(array('success' => false, 'msg' => 'Username is already taken!'));
            echo $result;
        }else{


        $insert = mysqli_query($mysqli, "INSERT INTO consumer_account SET
            user_id         = '$user_id',
            first_name      = '$postjson[first_name]',
            last_name       = '$postjson[last_name]',
            contact_number  = '$postjson[contact_number]',
            street          = '$postjson[street]',
            barangay_id     = '$barangay_id',
            type            = 'Consumer'
        ");

        $insert = mysqli_query($mysqli, "INSERT INTO user_account SET
            user_id        = '$user_id',
            username       = '$postjson[username]',
            password       = '$password',
            user_type      = 'Consumer'
        "); 

        if($insert) {
            $result = json_encode(array('success' => true, 'msg' => 'Registered Successfully!'));
        } else {
            $result = json_encode(array('success' => false, 'msg' => 'Registered Failed!'));
        }  echo $result;        
     }
    }