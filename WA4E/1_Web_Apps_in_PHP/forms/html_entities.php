<!DOCTYPE html>
<html>
<head>
    <title>htmlentities</title>
</head>
<body>
    <h1>Processing Form Data and HTML Injection</h1>

<?php
  $oldguess = isset($_POST['guess']) ? $_POST['guess'] : '';
?>

<p>Guessing game...</p>

<form method="post">
  <p><label for="guess">Input Guess</label>
  <input type="text" name="guess" id="guess" size="40" value="<?= htmlentities($oldguess) ?>"/></p>
  <input type="submit"/>
</form>

<?= $oldguess ?>
<?php echo($oldguess); ?>

<pre>
  $_POST:
  <?php
    print_r($_POST);
  ?>
</pre>

</body>
