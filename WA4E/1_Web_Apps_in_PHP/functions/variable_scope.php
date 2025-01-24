<!DOCTYPE html>
<html>
<head>
    <title>Vicente Escobar PHP</title>
</head>
<body>
    <h1>Prácticas de Functions (Variable Scope)</h1>

<p>
  <h3>--- Normal Scope (isolated) ---</h3>
  <?php // Normal Scope (isolated)
    function tryzap() {
      $val = 100;
    }
  $val = 10;
  tryzap();
  echo "TryZap = $val\n";
  ?>
</p>

<p>
  <h3>--- Global Scope (shared) ---</h3>
  <?php // Global Scope (shared)
    function dozap() {
      global $val;
      $val = 100;
    }
  $val = 10;
  dozap();
  echo "DoZap = $val\n";
  ?>
</p>

<p>
  <h3>--- Coping with Missing Bits ---</h3>
  <?php // Coping with Missing Bits
    if(function_exists("array_combine")){
      echo "Function exists";
    }
    else {
      echo "Function does not exist";
    }
  ?>
</p>

<p>
  <h3>--- One Heck of a Function... ---</h3>
  <?php // One Heck of a Function...
    phpinfo();
  ?>
</p>

<?php
function double($val) {
  $val = $val * 2;
  return $val;
}
$val = 15;
$dval = double($val);
echo "Value = $val Doubled = $dval";
?>

</body>
