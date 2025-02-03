<?php
  $hostName = "localhost";
  $dbName = "autos";
  $userName = "vic";
  $password = "php123";
  try {
    $pdo = new PDO("mysql:host=$hostName;dbname=$dbName",$userName,$password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      /*echo "Connected successfully\n";*/
  }
  catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }
?>
