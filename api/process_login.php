<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8');

    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);
    $type = "";
    if($postjson['aksi'] == "processii_login") {
        $username = $postjson['username'];
        $password = md5($postjson['password']);

        $logindata = mysqli_fetch_array(mysqli_query($mysqli, "SELECT * FROM user_account WHERE username='$username'
        AND password='$password'"));
        
        if($logindata){
            $id = $logindata['user_id'];
            $type = $logindata['user_type'];
        

        if($type=='Consumer'){
                $consumerdata = mysqli_fetch_array(mysqli_query($mysqli, "SELECT c.*, b.barangay_name FROM consumer_account as c, barangay as b WHERE c.user_id = '$id' 
                AND c.barangay_id=b.barangay_id "));

                    $data = array(
                        'user_id' => $consumerdata['user_id'],
                        'first_name' => $consumerdata['first_name'],
                        'last_name' => $consumerdata['last_name'],
                        'contact_number' => $consumerdata['contact_number'],
                        'street' => $consumerdata['street'],
                        'barangay_id' => $consumerdata['barangay_id'],
                        'barangay_name' => $consumerdata['barangay_name'],
                        'type' => $consumerdata['type'],
                        'consumer'=>'Consumer'
                        );  
          } else if($type=='Driver'){
            $consumerdata = mysqli_fetch_array(mysqli_query($mysqli, "SELECT d.*, b.barangay_name FROM driver_account as d, barangay as b  WHERE d.user_id = '$id' 
            AND d.barangay_id=b.barangay_id  "));

                $data = array(
                    'user_id' => $consumerdata['user_id'],
                    'first_name' => $consumerdata['first_name'],
                    'last_name' => $consumerdata['last_name'],
                    'drivers_license' => $consumerdata['drivers_license'],
                    'contact_number' => $consumerdata['contact_number'],
                    'street' => $consumerdata['street'],
                    'barangay_id' => $consumerdata['barangay_id'],
                    'status' => $consumerdata['status'],
                    'barangay_name' => $consumerdata['barangay_name'],
                    );  

          } else if($type=='Vendor'){
            $consumerdata = mysqli_fetch_array(mysqli_query($mysqli, "SELECT v.*, b.barangay_name FROM vendor_account as v, barangay as b WHERE v.user_id = '$id' 
            AND v.barangay_id=b.barangay_id "));
            $storedata = mysqli_fetch_array(mysqli_query($mysqli, "SELECT store_id FROM stores WHERE stores.user_id = '$id' "));
            if($storedata==NULL){
                $sid = 0;
            }else{
                $sid=$storedata['store_id'];
            }
            
                $data = array(
                    'user_id' => $consumerdata['user_id'],
                    'first_name' => $consumerdata['first_name'],
                    'last_name' => $consumerdata['last_name'],
                    'contact_number' => $consumerdata['contact_number'],
                    'business_permit' => $consumerdata['business_permit'],
                    'street' => $consumerdata['street'],
                    'barangay_id' => $consumerdata['barangay_id'],
                    'status' => $consumerdata['status'],
                    'barangay_name' => $consumerdata['barangay_name'],
                    'store_id' => $sid
                    );  
            

          }else if($type=='Admin'){
            $consumerdata = mysqli_fetch_array(mysqli_query($mysqli, "SELECT c.*, b.barangay_name FROM consumer_account as c, barangay as b WHERE c.user_id = '$id' 
            AND c.barangay_id=b.barangay_id "));

                $data = array(
                    'user_id' => $consumerdata['user_id'],
                    'first_name' => $consumerdata['first_name'],
                    'last_name' => $consumerdata['last_name'],
                    'contact_number' => $consumerdata['contact_number'],
                    'street' => $consumerdata['street'],
                    'barangay_id' => $consumerdata['barangay_id'],
                    'barangay_name' => $consumerdata['barangay_name'],
                    'type' => $consumerdata['type'],
                    'admin' => 'Admin'
                    );  
      }
                    $result = json_encode(array('success' => true, 'result' => $data, 'msg' => $type));

                echo $result;
        }else{
            $result = json_encode(array('success' => false));
            echo $result;
        }

    }