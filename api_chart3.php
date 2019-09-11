<?php 

    include 'database.php';
    header('Content-type: application/json');
    $level = $_GET['level'];

    $resAp = [];

    foreach ($graphs as $graph) {
      
        if ($graph['access'] == $level) {
            
            $resAp[] = $graph;
            
        }
    }


    echo json_encode($resAp);
    
?>