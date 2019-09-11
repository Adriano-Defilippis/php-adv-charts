<?php 

    include 'database.php';
    header('Content-type: application/json');
    $level = $_GET['level'];

    $resAp = [];

    foreach ($graphs as $graph) {
      
        

        switch ($level) {
            case 'clevel':
                $resAp[] = $graph;
                break;

            case 'employee':

                if ($graph['access'] == 'employee' || $graph['access'] == 'guest') {
            
                    $resAp[] = $graph;
                }
            break; 
            
            case 'guest':
                
                if ($graph['access'] == 'guest') {
                    $resAp[] = $graph;
                }
                break;
            
            default:
                
                break;
        }
   
    }


    echo json_encode($resAp);
    
?>