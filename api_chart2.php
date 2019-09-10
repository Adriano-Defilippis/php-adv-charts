<?php 

    include 'database.php';

    header('Content-type: application/json');

    
    echo json_encode($graphs);

    

?>