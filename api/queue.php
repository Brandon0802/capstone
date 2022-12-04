<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8');

    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);
    $brgy=$postjson['barangay'];
    $name=$postjson['name'];
    $did=$postjson['did'];
    $bid=$postjson['bid'];

    $sql = mysqli_query($mysqli, "SELECT MAX(`queue`) FROM driver_queue WHERE barangay = '$brgy' AND `status`='Pending'");
    $result = mysqli_fetch_assoc($sql);
    $queue = $result['MAX(`queue`)'];
    $queue++;
    $sql = mysqli_query($mysqli, "UPDATE `orders_to_driver` SET `queue`='$queue', `driver_id` = '$did' WHERE barangay_id = '$bid' AND confirmation='Approved' AND `queue`='None' LIMIT 3");

    if($postjson['aksi']=='get_queue'){

        $insert = mysqli_query($mysqli, "INSERT INTO driver_queue SET
            barangay     = '$brgy',
            driver_id    = '$did',
            name       = '$name',
            queue      = '$queue',
            status     = 'Pending'
        ");

         if($insert){
            $result = json_encode(array('success' => true, 'msg' => 'Successfully Added!'));
          }else{
            $result = json_encode(array('success' => false, 'msg' => 'Failed!'));
          }
          echo $result;
    }