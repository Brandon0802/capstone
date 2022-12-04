<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8'); 

    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);
  if($postjson['aksi'] == "get_orders"){
    
    $orders = mysqli_query($mysqli, "SELECT o.order_id, o.user_id, o.user_name, o.contact_number, od.classification1, od.classification2 ,od.quantity, o.confirmation ,SUM(od.quantity) FROM orders as o, order_details as od WHERE o.order_id=od.order_id AND confirmation = 'Not yet Appproved' GROUP BY od.order_id");

    $data = array();

    while($rows = mysqli_fetch_array($orders)){
      $data[] = array(
        'order_id'=> $rows['order_id'],
        'user_id' => $rows['user_id'],
        'user_name' =>$rows['user_name'],
        'contact_number' =>$rows['contact_number'],
        'classification1' => $rows['classification1'],
        'classification2' => $rows['classification2'],
        'quantity' => $rows['quantity'],
        'confirmation' => $rows['confirmation'],
        'items'=> $rows['SUM(od.quantity)']
        );
    }
   
   
  if($orders){
    $result = json_encode(array('success' => true, 'result' => $data));
      echo $result;
  }else{
    $result = json_encode(array('success' => false));
    echo $result;
  }

}if($postjson['aksi'] == "get_orders_consumer"){
  $uid=$postjson['id'];
  $orders = mysqli_query($mysqli, "SELECT o.order_id, o.user_id, o.user_name, o.contact_number, od.classification1, od.classification2 ,od.quantity, o.confirmation ,SUM(od.quantity), p.product_image FROM orders as o, order_details as od, products as p WHERE od.product=p.product_name AND o.order_id=od.order_id AND o.user_id='$uid' GROUP BY od.order_id");
  $i=mysqli_query($mysqli, "SELECT p.product_image FROM order_details as od, products as p, orders as o WHERE p.product_name=od.product AND od.order_id IN (SELECT o.order_id FROM orders as o WHERE o.user_id = '$uid' ) GROUP BY p.product_image");
  $image = mysqli_fetch_assoc($i);
  $data = array();
  while($rows = mysqli_fetch_array($orders)){
    $data[] = array(
      'order_id'=> $rows['order_id'],
      'user_id' => $rows['user_id'],
      'user_name' =>$rows['user_name'],
      'contact_number' =>$rows['contact_number'],
      'classification1' => $rows['classification1'],
      'classification2' => $rows['classification2'],
      'quantity' => $rows['quantity'],
      'image' => $rows['product_image'],
      'confirmation' => $rows['confirmation'],
      'items'=> $rows['SUM(od.quantity)']
      );
  }

if($orders){
  $result = json_encode(array('success' => true, 'result' => $data, 'img' => $image));
    echo $result;
}else{
  $result = json_encode(array('success' => false));
  echo $result;
}

}else if($postjson['aksi'] == "get_orders_to_approve"){


    $oid=$postjson['orderid'];
    $uid=$postjson['userid'];
    $orders = mysqli_query($mysqli, "SELECT o.*, od.* FROM orders as o, order_details as od WHERE od.order_id='$oid' AND o.order_id='$oid' ");
    $q=mysqli_fetch_array(mysqli_query($mysqli, "SELECT confirmation FROM orders WHERE `user_id`='$uid' LIMIT 1"));
    $userdetails = mysqli_fetch_array(mysqli_query($mysqli, "SELECT ca.first_name, ca.last_name, ca.street, b.barangay_name, ca.contact_number  FROM consumer_account as ca, barangay as b 
    WHERE ca.barangay_id=b.barangay_id AND ca.user_id='$uid'"));
    $con=$q['confirmation'];
    $userdata= array(
      'first_name'=>$userdetails['first_name'],
      'last_name'=>$userdetails['last_name'],
      'street'=>$userdetails['street'],
      'barangay_name'=>$userdetails['barangay_name'],
      'contact_number'=>$userdetails['contact_number']
    );
    
    $data = array();

    while($rows = mysqli_fetch_array($orders)){
      $data[] = array(
        'order_id'=> $rows['order_id'],
        'user_id' => $rows['user_id'],
        'user_name' =>$rows['user_name'],
        'product' =>$rows['product'],
        'contact_number' =>$rows['contact_number'],
        'classification1' => $rows['classification1'],
        'classification2' => $rows['classification2'],
        'quantity' => $rows['quantity'],
        'confirmation' => $rows['confirmation']
        );
    }
  
   
  if($orders){
     $result = json_encode(array('success' => true, 'result' => $data, 'user'=>$userdata, 'con'=>$con));
    echo $result;
  }
  else{
    $result = json_encode(array('success' => false));
    echo $result;
  }

}
else if($postjson['aksi'] == "get_orders_costumer"){
  $id=$postjson['id'];
  $oid=$postjson['orderid'];
  $orders = mysqli_query($mysqli, "SELECT o.*, od.* FROM orders as o, order_details as od WHERE od.order_id='$oid' AND o.order_id='$oid' ");
  $userdetails = mysqli_fetch_array(mysqli_query($mysqli, "SELECT ca.first_name, ca.last_name, ca.street, b.barangay_name, ca.contact_number  FROM consumer_account as ca, barangay as b 
  WHERE ca.barangay_id=b.barangay_id AND ca.user_id='$id'"));

  $userdata= array(
    'first_name'=>$userdetails['first_name'],
    'last_name'=>$userdetails['last_name'],
    'street'=>$userdetails['street'],
    'barangay_name'=>$userdetails['barangay_name'],
    'contact_number'=>$userdetails['contact_number']
  );
  
  $data = array();

  while($rows = mysqli_fetch_array($orders)){
    $data[] = array(
      'order_id'=> $rows['order_id'],
      'user_id' => $rows['user_id'],
      'user_name' =>$rows['user_name'],
      'product' =>$rows['product'],
      'contact_number' =>$rows['contact_number'],
      'classification1' => $rows['classification1'],
      'classification2' => $rows['classification2'],
      'quantity' => $rows['quantity'],
      'confirmation' => $rows['confirmation']
      );
  }

 
if($orders){
   $result = json_encode(array('success' => true, 'result' => $data, 'user'=>$userdata));
  echo $result;
}
else{
  $result = json_encode(array('success' => false));
  echo $result;
}

}else if($postjson['aksi'] == "get_orders_driver"){
  $bid=$postjson['bid'];
  $uid=$postjson['uid'];
  $brgy=$postjson['barangay'];
  $name=$postjson['name'];
  $did=$postjson['did'];


  $sql = mysqli_query($mysqli, "SELECT `queue` FROM driver_queue WHERE barangay = '$brgy' AND driver_id='$did' AND `status`='Pending'");
  $result = mysqli_fetch_assoc($sql);
  $queue = $result['queue'];

 
  $sql1 = mysqli_query($mysqli, "SELECT MIN(`queue`) FROM driver_queue WHERE barangay = '$brgy' AND `status`='Pending'");
  $result1 = mysqli_fetch_assoc($sql1);
  $cqueue = $result1['MIN(`queue`)'];

  $orders = mysqli_query($mysqli, "SELECT o.order_id, ca.first_name, ca.last_name, ca.street, b.barangay_name FROM orders_to_driver as o, consumer_account as ca, barangay as b, driver_account as d WHERE o.user_id=ca.user_id 
   AND b.barangay_id='$bid' AND o.status='Not Accepted' AND driver_id='$did' AND o.queue='$queue' GROUP BY o.order_id"); 


  $acceptedorders = mysqli_query($mysqli, "SELECT o.order_id, ca.first_name, ca.last_name, ca.street, b.barangay_name, confirmation FROM orders_to_driver as o, consumer_account as ca, barangay as b, driver_account as d WHERE o.user_id=ca.user_id AND o.barangay_id='$bid' 
  AND b.barangay_id='$bid' AND ca.barangay_id='$bid' AND confirmation = 'Shipped by courier' OR confirmation ='Picked-up by courier' 
  AND o.queue='$queue'  AND o.driver_id='$did'  GROUP BY o.order_id"); 




  $data = array();

  while($rows = mysqli_fetch_array($orders)){
    $data[] = array(
      'order_id'=> $rows['order_id'],
      'first_name' => $rows['first_name'],
      'last_name' =>$rows['last_name'],
      'street' =>$rows['street'],
      'barangay_name' =>$rows['barangay_name']
      );
 

      $ii=mysqli_query($mysqli, "INSERT INTO `current_transaction` SET
      `order_id`     = '$rows[order_id]',
      `driver_id`    = '$did',
      `barangay_id`      = '$bid',
      `status`     = 'Approved'
     ");

  }

  $adata = array();

  while($rows1 = mysqli_fetch_array($acceptedorders)){
    $adata[] = array(
      'order_id'=> $rows1['order_id'],
      'first_name' => $rows1['first_name'],
      'last_name' =>$rows1['last_name'],
      'street' =>$rows1['street'],
      'barangay_name' =>$rows1['barangay_name'],
      'confirmation' => $rows1['confirmation']
      );

      $i=mysqli_query($mysqli, "INSERT INTO `order_counter` SET
      `order_id`= '$rows1[order_id]',
      `driver_id`= '$did',
      `first_name` ='$rows1[first_name]',
      `last_name` ='$rows1[last_name]',
      `street` ='$rows1[street]',
      `barangay_name` ='$rows1[barangay_name]',
      `confirmation` = '$rows1[confirmation]'
     ");

  }

  $accorders=mysqli_query($mysqli, "SELECT COUNT(*) FROM order_counter WHERE driver_id='$did' GROUP BY order_id"); 
  $cnt=0;
  while($ro=mysqli_fetch_array($accorders)){
    $cnt++;
  }
  if($cnt==3){
    $queue++;
    $sq = mysqli_query($mysqli, "SELECT  `driver_id` FROM driver_queue WHERE `queue`='$queue' ");
    $res = mysqli_fetch_assoc($sq);
    $d = $res['driver_id'];

    $move=mysqli_query($mysqli,"UPDATE orders_to_driver SET `queue`='$queue', `driver_id`='$d' WHERE driver_id='$did' AND `status`='Not Accepted'");
  }

  $delivereddorders = mysqli_query($mysqli, "SELECT COUNT(*) FROM current_transaction WHERE driver_id='$did'  GROUP BY order_id"); 
  $count=0;
  while($row = mysqli_fetch_array($delivereddorders)){
    $count++;
  }
  if($count==0){
    $del='Finished';
    $update = mysqli_query($mysqli, "UPDATE `driver_queue` SET `status`='Completed' WHERE barangay = '$brgy' AND driver_id='$did'");
    $insert = mysqli_query($mysqli, "INSERT INTO completed_queue SET
    barangay     = '$brgy',
    driver_id    = '$did',
    name       = '$name',
    queue      = '$queue'
    ");
    $queue=  "";  
  }else{
    $del='Not finished';
  }


 
if($orders){
   $result = json_encode(array('success' => true, 'result' => $data, 'queue'=>$queue, 'adata'=>$adata, 'finish'=> $del, 'count'=>$count, 'cqueue'=>$cqueue));
  echo $result;
}
else{
  $result = json_encode(array('success' => false));
  echo $result;
  }
}else if($postjson['aksi'] == "get_decline_driver"){
  $bid=$postjson['bid'];
  $orders = mysqli_query($mysqli, "SELECT o.order_id, ca.first_name, ca.last_name, ca.street, b.barangay_name FROM orders_to_driver as o, consumer_account as ca, barangay as b WHERE o.user_id=ca.user_id AND b.barangay_id='$bid' AND o.barangay_id='$bid' AND ca.barangay_id='$bid' 
  AND confirmation = 'Declined'  GROUP BY o.order_id");

  $data = array();

  while($rows = mysqli_fetch_array($orders)){
    $data[] = array(
      'order_id'=> $rows['order_id'],
      'first_name' => $rows['first_name'],
      'last_name' =>$rows['last_name'],
      'street' =>$rows['street'],
      'barangay_name' =>$rows['barangay_name']
      );
  }


if($orders){
   $result = json_encode(array('success' => true, 'result' => $data));
  echo $result;
}
else{
  $result = json_encode(array('success' => false));
  echo $result;
  }
}else if($postjson['aksi'] == "get_history_driver"){
  $bid=$postjson['bid'];
  $orders = mysqli_query($mysqli, "SELECT  o.order_id, ca.first_name, ca.last_name, ca.street, b.barangay_name, o.confirmation FROM orders_to_driver as o, consumer_account as ca, barangay as b WHERE
  o.user_id=ca.user_id AND b.barangay_id='$bid' AND o.barangay_id='$bid' AND ca.barangay_id='$bid' AND o.confirmation = 'Declined' OR o.confirmation='Delivered' GROUP BY o.order_id");


  $data = array();

  while($rows = mysqli_fetch_array($orders)){
    $data[] = array(
      'order_id' => $rows['order_id'],
      'first_name' => $rows['first_name'],
      'last_name' =>$rows['last_name'],
      'street' =>$rows['street'],
      'barangay_name' =>$rows['barangay_name'],
      'confirmation' =>$rows['confirmation']
      );
  }
  
 
if($orders){
   $result = json_encode(array('success' => true, 'result' => $data));
  echo $result;
}
else{
  $result = json_encode(array('success' => false));
  echo $result;
  }
}else if($postjson['aksi'] == "get_history_details"){
  $bid=$postjson['bid'];
  $oid=$postjson['oid'];

  $gettrans=mysqli_fetch_array(mysqli_query($mysqli, "SELECT `status` FROM transaction_history WHERE order_id='$oid' AND barangay_id='$bid'")); 
  if($gettrans==null){
    $trans="";
  }else{
    $trans=$gettrans['status'];
  } 

  $getpick=mysqli_fetch_array(mysqli_query($mysqli, "SELECT `status` FROM pickedup_order WHERE order_id='$oid' AND barangay_id='$bid'"));
  if($getpick==null){
    $pick="";
  }else{
    $pick=$getpick['status'];
  }

  $getship=mysqli_fetch_array(mysqli_query($mysqli, "SELECT `status` FROM shipped_orders WHERE order_id='$oid' AND barangay_id='$bid'"));
  if($getship==null){
    $ship="";
  }else{
    $ship=$getship['status'];
  }  

  $getdeliver=mysqli_fetch_array(mysqli_query($mysqli, "SELECT `status` FROM delivered_orders WHERE order_id='$oid' AND barangay_id='$bid'"));
  if($getdeliver==null){
    $deliver="";
  }else{
    $deliver=$getdeliver['status'];
  }
 

  $getdecline=mysqli_fetch_array(mysqli_query($mysqli, "SELECT `status` FROM declined_orders WHERE order_id='$oid' AND barangay_id='$bid'"));
  if($getdecline==null){
    $decline="";
  }else{
    $decline=$getdecline['status'];
  }
  
  

  $data = array();
  
    $data[] = array(
      'trans' => $trans,
      'pick' => $pick,
      'ship' =>$ship,
      'deliver' =>$deliver,
      'decline' =>$decline
      );
  
  
 
if($gettrans){
   $result = json_encode(array('success' => true, 'result' => $data));
  echo $result;
}
else{
  $result = json_encode(array('success' => false));
  echo $result;
  }
}else if($postjson['aksi'] == "get_orders_details"){


    $oid=$postjson['oid'];
    $orders = mysqli_query($mysqli, "SELECT o.*, od.* FROM orders as o, order_details as od WHERE od.order_id='$oid' AND o.order_id='$oid' ");
    $q=mysqli_fetch_array(mysqli_query($mysqli, "SELECT confirmation FROM orders WHERE `order_id`='$oid' LIMIT 1"));
    $userdetails = mysqli_fetch_array(mysqli_query($mysqli, "SELECT ca.user_id, ca.first_name, ca.last_name, ca.street, b.barangay_name, ca.contact_number  FROM orders as o, consumer_account as ca, barangay as b 
    WHERE ca.barangay_id=b.barangay_id AND ca.user_id=(SELECT o.user_id FROM orders as o WHERE o.order_id='$oid' GROUP by o.order_id) LIMIT 1"));
    $con=$q['confirmation'];
    $id=$userdetails['user_id'];
  
    $sql = mysqli_fetch_array(mysqli_query($mysqli, "SELECT specific_location, longitude, lattitude FROM shipping_address WHERE `user_id`='$id' "));
    $specific=$sql['specific_location'];
    $longi=$sql['longitude'];
    $latti=$sql['lattitude'];

    $t = mysqli_fetch_array(mysqli_query($mysqli, "SELECT o.total_price FROM orders as o, order_details as od WHERE od.order_id='$oid' AND o.order_id='$oid' GROUP BY 1"));
    $total= $t['total_price'];
    $userdata= array(
      'first_name'=>$userdetails['first_name'],
      'last_name'=>$userdetails['last_name'],
      'street'=>$userdetails['street'],
      'barangay_name'=>$userdetails['barangay_name'],
      'contact_number'=>$userdetails['contact_number'],
      'specific' => $specific,
      'longitude' => $longi,
      'lattitude' => $latti
    );
    $data = array();

    while($rows = mysqli_fetch_array($orders)){
      $data[] = array(
        'order_id'=> $rows['order_id'],
        'user_id' => $rows['user_id'],
        'user_name' =>$rows['user_name'],
        'product' =>$rows['product'],
        'contact_number' =>$rows['contact_number'],
        'classification1' => $rows['classification1'],
        'classification2' => $rows['classification2'],
        'quantity' => $rows['quantity'],
        'confirmation' => $rows['confirmation'],
        'price' => $rows['price']
        );
    }

  
  if($orders){
    $result = json_encode(array('success' => true, 'result' => $data, 'user'=>$userdata, 'con'=>$con, 'total'=>$total));
    echo $result;
  }
  else{
    $result = json_encode(array('success' => false));
    echo $result;
  } 

}
