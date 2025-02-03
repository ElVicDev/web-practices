<?php
require_once "pdo.php";

if (isset($_POST['who']) && isset($_POST['pass'])) {
  if($_POST['who'] == "" || $_POST['pass'] == "") {
    echo '<p style="color: red">User name and password are required</p>';
  }
  elseif (strpos($_POST['who'], '@') == false) {
    echo '<p style="color: red">Email must have an at-sign (@)</p>';
  }

  else {
    $sql = "SELECT email FROM users
      WHERE email = :em AND password = :pw";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(array(
        ':em' => $_POST['who'],
        ':pw' => $_POST['pass']));
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    var_dump($row);

    if ( $row === FALSE ) {
      $hash = hash('sha256', $_POST['pass']);
      error_log("Login fail ".$_POST['who']." $hash");
      echo '<p style="color: red">Incorrect password.</p>';
    }

    else {
      error_log("Login success ".$_POST['who']);
      echo "<p>Login success.</p>\n";
      header("Location: autos.php?name=".urlencode($_POST['who']));
    }
  }
}
?>

<?php
    $host = $_SERVER['HTTP_HOST'];
    $ruta = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
    $url = "http://$host$ruta"; // ruta completa construida

if (isset($_POST["cancel"])) {
    header("Location: $url/index.php");
    die();
}

    $message = false;
if (isset($_POST["who"]) && isset($_POST["pass"])) {
    $salt = 'XyZzy12*_';

    $stored_hash = '1a52e17fa899cf40fb04cfc42e6352f1';

    $md5 = hash("md5", $salt . $_POST["pass"]);

    if ($md5 == $stored_hash) {
        header("Location: $url/autos.php?name=" . urlencode($_POST['who']));
        die();
    }
    if (strlen($_POST["who"]) < 1 || strlen($_POST['pass']) < 1) {
        $message = "User name and password are required";
    } else {
        $message = "Incorrect password";
      }
}
?>

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
    <center><h2>Please Login</h2></center><br>
    <div class = "container">
      <div class="bg-primary p-3 bg-opacity-25"></div>
      <br><br>
        <center>

        <form method="post">
          <table border="0">
            <tr>
              <td width="80">Email:</td>
              <td width="150"><input type="text" size="20" name="who"></td>
            </tr>
            <tr>
              <td width="80">Password:</td>
              <td width="150"><input type="text" size="20" name="pass"></td>
            </tr>
            <tr>
              <td width="80" height="40"></td>
              <th width="150" height="40"><input type="submit" value="Log In"/>
                <input type="submit" name="cancel" value="Cancel">
              <a href="<?php echo($_SERVER['PHP_SELF']);?>">Refresh</a></th>
            </tr>
          </table>
        </form>
        <br><br>
      <div class="bg-primary p-3 bg-opacity-25"></div>
      <p>For a password hint, view the source and find a password hint in the HTML comments
          <!-- Hint: You can enter with the data of the first registered user. -->
      </p>
    </center>
    </div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
