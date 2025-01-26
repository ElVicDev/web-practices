<!DOCTYPE html>
<html>
<head>
    <title>HTML Input Types 2</title>
</head>
<body>
    <h1>HTML Input Types</h1>

<p>Many field types...</p>

<form method="post" action="input_types_2.php">
  
Select your favorite color:
<input type="color" name="favcolor" value="#0000ff"><br/>
Birthday:
<input type="date" name="bdate" value="2013-09-02"><br/>
Email:
<input type="email" name="email"><br/>
Quantity (between 1 and 5):
<input type="number" name="quantity" min="1" max="5"><br/>
Add your homepage:
<input type="url" name="homepage"><br/>
Transportation:
<input type="flying" name="saucer"><br/>

<p>
  <input type="submit" name="dopost" value="Submit"/>
  <input type="button"
    onclick="location.href='http://www.wa4e.com/'; return false;" value="Escape">
</form>

<pre>
  $_POST:
  <?php
    print_r($_POST);
  ?>
</pre>

</body>
