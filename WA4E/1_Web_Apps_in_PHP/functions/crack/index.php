<!DOCTYPE html>
<head><title>Vicente Escobar MD5 Cracker</title></head>
<body>
<h1>MD5 cracker</h1>
<p>This application takes an MD5 hash of a four numbers and
attempts to hash all four-number combinations
to determine the original four numbers.</p>
<pre>
Debug Output:
<?php
$goodnumber = "Not found";
// If there is no parameter, this code is all skipped
if ( isset($_GET['md5']) ) {
    $time_pre = microtime(true);
    $md5 = $_GET['md5'];

    // This are our numbers
    $num = "0123456789";
    $show = 15;

    // Outer loop to go through the numbers for the
    // first position in our "possible" pre-hash number
    for($i=0; $i<strlen($num); $i++ ) {
        $ch1 = $num[$i];   // The first of four numbers

        // Our inner loop. Note the use of new variables
        // $j and $ch2
        for($j=0; $j<strlen($num); $j++ ) {
            $ch2 = $num[$j];  // Our second number

            for($k=0; $k<strlen($num); $k++ ) {
                $ch3 = $num[$k];  // Our third number

                for($l=0; $l<strlen($num); $l++ ) {
                    $ch4 = $num[$l];  // Our fourth number


            // Concatenate the four numbers together to
            // form the "possible" pre-hash text
            $try = $ch1.$ch2.$ch3.$ch4;

            // Run the hash and then check to see if we match
            $check = hash('md5', $try);
            if ( $check == $md5 ) {
                $goodnumber = $try;
                break;   // Exit the inner loop
            }

            // Debug output until $show hits 0
            if ( $show > 0 ) {
                print "$check $try\n";
                $show = $show - 1;
              }
            }
          }
        }
    }
    // Compute elapsed time
    $time_post = microtime(true);
    print "Elapsed time: ";
    print $time_post-$time_pre;
    print "\n";
}
?>
</pre>
<!-- Use the very short syntax and call htmlentities() -->
<p>PIN: <?= htmlentities($goodnumber); ?></p>
<form method="GET">
<input type="text" name="md5" size="40" />
<input type="submit" value="Crack MD5"/>
</form>
<ul>
<li><a href="index.php">Reset</a></li>
<li><a href="md5.php">MD5 Encoder</a></li>
<li><a href="makecode.php">MD5 Code Maker</a></li>

</ul>
</body>
</html>
