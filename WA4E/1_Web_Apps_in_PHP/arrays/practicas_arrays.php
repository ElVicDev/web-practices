<!DOCTYPE html>
<html>
<head>
    <title>Vicente Escobar PHP</title>
</head>
<body>
    <h1>Prácticas de Arrays</h1>
<p>
  <?php
    $stuff = array("Hi", "There");
    echo $stuff[1], "\n";
  ?>
</p>

<p>
<?php
  $stuff = array("name" => "Chuck", "course" => "WA4E");
  echo("<pre>\n");
  print_r($stuff);
  echo("\n</pre>\n");
?>
</p>

<p>
<?php
  $stuff = array("name" => "Chuck", "course" => "SI664");
  var_dump($stuff);
?>
</p>

<p>
 <?php
  $thing = FALSE;
  echo("One\n");
  print_r($thing);
  echo("Two\n");
  var_dump($thing);
 ?>
</p>

<p>
<?php
  $stuff = array("name" => "Chuck", "course" => "SI664");
  foreach ($stuff as $k => $v) {
    echo "key=" ,$k," Val=",$v,"\n";
  }
?>
</p>

<p>
  <?php
  $products = array(
    'paper' => array(
      'copier' => "Copier & Multipurpose",
      'inkjet' => "Inkjet Printer",
      'laser' => "Laser Printer",
      'photo' => "Photographic Paper"),
    'pens' => array(
      'ball' => "Ball Point",
      'hilite' => "Highlighters",
      'marker' => "Markers"),
    'misc' => array(
      'tape' => "Sticky Tape",
      'glue' => "Adhesives",
      'clips' => "Paperclips"),
    );
    echo $products["pens"]["marker"];

  ?>

</p>

</body>
