
<?php
include("dbFunctions.php");

$stat = array();
$query = "SELECT * FROM statistics";
$result = mysqli_query($link, $query);

while ($row = mysqli_fetch_assoc($result)) {
    $stat[] = $row;
}
mysqli_close($link);
echo json_encode($stat);
?>
