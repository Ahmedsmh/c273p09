
<?php
include("dbFunctions.php");
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $stat = array();
    $query = "SELECT * FROM statistics WHERE id = $id";
    $result = mysqli_query($link, $query);

    $stat = mysqli_fetch_assoc($result);
    mysqli_close($link);
    echo json_encode($stat);
}
   
?>