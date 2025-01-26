<!DOCTYPE html>
<html>
<head>
    <title>Forms</title>
</head>
<body>
    <h1>Forms - User Input / Action</h1>

<p>Guessing game...</p>

<form>
  <p><label for="guess">Input Guess</label>
    <input type="text" name="guess" id="guess"/></p>
  <input type="submit"/>
</form>

<pre>
  $_GET:
  <?php
    print_r($_GET);
  ?>
</pre>

</body>
