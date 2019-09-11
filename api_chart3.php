<?php 

    include 'database.php';

    foreach ($graphs as $graph) {
        $graph['access'];

        if ($graph['access'] == 'rr') {
            
            header('Content-type: application/json');
            echo json_encode($graph);
        }
    }
    
?>