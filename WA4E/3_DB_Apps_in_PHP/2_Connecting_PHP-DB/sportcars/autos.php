<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sports Cars DB</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <style>
    body {
      background-color: #f5f3f4;
    }
  </style>
</head>
</head>
<body>
  <br><br>
  <div class = "container">

    <?php
      require_once "pdo.php";

      if (isset($_GET['name'])) {
          echo "<h3>Tracking Autos for ".$_GET['name']."</h3><br>";
      }
      else {
        die('<br><br><br><p style="text-align: center; color: yellow; background: red; font-size: 20px">
        Name parameter missing</style></p>');
      }

      if(isset($_POST['logout'])) {
        header('Location: index.php');
      }
      else {
        if(isset($_POST['make']) && isset($_POST['year']) && isset($_POST['mileage'])) {
          if ($_POST['make'] == "") {
            echo "<p style='color: red'>Make is required</p>";
          }
          elseif (is_numeric($_POST['year']) && is_numeric($_POST['mileage'])) {
            $stmt = $pdo->prepare('INSERT INTO cars
              (make, year, mileage) VALUES ( :mk, :yr, :mi)');
                $stmt->execute(array(
                  ':mk' => $_POST['make'],
                  ':yr' => $_POST['year'],
                  ':mi' => $_POST['mileage']) );
              echo "<p style='color: green'>Record inserted</p>";
          }
          else {
            echo "<p style='color: red'>Mileage and year must be numeric</p>";
          }
        }
      }
    ?>
    <div class="bg-primary p-3 bg-opacity-25"></div><br>
      <center>
<form method="post">
  <table border="0">
    <tr>
      <td width="70">Make:</td>
      <td width="150"><input name="make" size="20"></td>
    </tr>
    <tr>
      <td width="70">Year:</td>
      <td width="150"><input name="year" size="20"></td>
    </tr>
    <tr>
      <td width="70">Mileage:</td>
      <td width="150"><input name="mileage" size="20"></td>
    </tr>
    <tr><td></td></tr><tr>
      <td width="70"></td>
      <td width="150"><input type="submit" value="Add" name="Add">
        <input type="submit" value="logout" name="logout">
      </td>
    </tr>

    </table>
</form>
</center><br>
<div class="bg-primary p-3 bg-opacity-25"></div>

<h3>Sport Cars</h3>

    <?php
      $statement = $pdo->query("SELECT car_id, make, year, mileage FROM cars");

        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
          echo "<table border='1'>"."\n";
          echo "<tr><td>";
          echo $row['car_id'];
          echo '</td><td>';
          echo htmlentities ($row['make']);
          echo "</td><td>";
          echo $row['year'];
          echo "</td><td>";
          echo $row['mileage'];
          echo "</td></tr>";
        }
echo "</table>\n";
    ?>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
