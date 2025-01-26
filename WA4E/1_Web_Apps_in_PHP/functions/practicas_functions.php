<!DOCTYPE html>
<html>
<head>
    <title>Functions</title>
</head>
<body>
    <h1>Prácticas de Functions</h1>

<p>
  <h3>--- Built-In Functions ---</h3>
  <?php // Built-In Functions
    echo strrev(" .dlrow olleH");
    echo str_repeat("Hip ", 2);
    echo strtoupper("horray!\n");
    echo strlen("intro");
    echo "\n";
  ?>
</p>

<p>
  <h3>--- Defining Your Own Functions ---</h3>
  <?php // Defining Your Own Functions
    function greet() {
      print("Hello\n");
    }
  greet();
  greet();
  ?>
</p>

<p>
  <h3>--- Return Values ---</h3>
  <?php // Return Values
    function greeting() {
      return("Hello\n");
    }
  print(greeting() . " Glenn\n");
  print(greeting() . " Sally\n");
  ?>
</p>

<p>
  <h3>--- Arguments ---</h3>
  <?php // Arguments
    function howdy($lang) {
      if($lang == 'es') return "Hola";
      if($lang == 'fr') return "Bonjour";
      return "Hello";
    }
print howdy('es') . " Glenn\n";
print howdy('fr') . " Sally\n";
  ?>
</p>

<p>
<h3>--- Optional Arguments ---</h3>
  <?php /* Optional arguments */
    function howdy2($lang='es') {
      if($lang == 'es') return "Hola";
      if($lang == 'fr') return "Bonjour";
      return "Hello";
    }
print howdy2() . " Glenn\n";
print howdy2('fr') . " Sally\n";
  ?>
</p>

<p>
<h3>--- Call by Value ---</h3>
  <?php /* Call by Value */
    function double($alias) {
      $alias = $alias * 2;
      return $alias;
    }
$val = 10;
$dval = double($val);
echo "Value = $val  Doubled = $dval\n";
  ?>
</p>

<p>
<h3>--- Call by Reference ---</h3>
  <?php /* Call by Reference */
    function triple(&$realthing) {
      $realthing = $realthing * 3;
    }
$val = 10;
triple($val);
echo "Triple = $val\n";
  ?>
</p>

</body>
