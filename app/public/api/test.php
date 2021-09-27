<!--Start PHP Engine Line-->
<?php

//$ means a variable
$num = 2;
$foo = $num. " be";
$bar = "or not " .  $num . " to be";

//Concatenate Strings using "." and print using "echo"
echo $foo . ' ' . $bar . "\n"; 
echo $num * $num * $num;

//PHP calls this an associative array even though it's in Object in JS
$arr = [
    "first" => "Jeff",
    "last" => "Yu",
    "best" => "Still Jeff"
];

$arr2 = [1, 2, 3, 4, 5];

if (true) {
    echo "\nTRUE\n";
}

while (true) {
    //This way it doesn't actually do anything python function 
    break;
}

//Looks at the $arr array and assigns $key and $vaulue that can be called
foreach($arr as $key=>$value) {
    echo "<li>" . $key . "is" . "$value" . "</li>";
}

function printAndEncode( $val ) {
    echo json_encode(
        $val, 
        JSON_PRETTY_PRINT|JSON_THROW_ON_ERROR
    );
}

// Naming Conventions for JS and PHP : camelCase
// When naming varables, every new word becomes capitalized.

//There's also PascalCase, snake_case, and kebab-case 
