<?php 

    include 'database.php';

    foreach ($graphs as $graph) {
        $graph['access'];

        if ($graph['access'] == 'employee') {
            
            header('Content-type: application/json');
            echo json_encode($graph);
        }
    }
    

?>