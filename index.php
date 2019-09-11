<!DOCTYPE html>
<html lang="" dir="ltr">
  <head>
    <meta charset="utf-8">
    <!-- FONT: LATO -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
    <!-- FONT: FONTAWESOME -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">

    <!-- JS: JQUERY -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- JS: MOMENT -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>

    <!-- JS: CHART JS -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.js"></script>

    <!-- JS: HANDLEBARS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.0/handlebars.min.js" charset="utf-8"></script>
    <!-- TEMPLATE: MESSAGE MENU -->
    <script id="item-template" type="text/x-handlebars-template">
    </script>

    <!-- CSS: MY STYLE -->
    <link rel="stylesheet" href="style.css">
    <!-- JS: MY SCRIPT -->
    <script src="script.js" charset="utf-8"></script>
    <!-- IMG: ICON -->
    <link rel="shortcut icon" href="img/me_icon.gif">
    <title>Advanzed-Chart</title>

    

    <!-- DICHIARAZIONE VARIABILI PHP -->
    <?php 

      include 'database.php';
    ?>
    
  </head>


  <!-- BODY -->
  <body>
   

    <div class="container">

      <div class="results"></div>

      <h1>STEP 1</h1>
      <div class="myCanvas">
        <canvas id="step1_chart"></canvas>
      </div>

      <h1>STEP 2</h1>
      <div class="myCanvas">
        <canvas id="step2_chart1"></canvas>
      </div>

      <div class="myCanvas">
        <canvas id="step2_chart2"></canvas>
      </div>

      <h1>STEP 3</h1>
      <h2>Per visualizzare i grafici occorre completare l'url con la query da inviare a php<br>
      Secondo Quanto segue: localhost/index.php?level=...., ed indicare il levello del permesso</h2>
      <h3>guest - employee - clevel:</h3>
      <div class="myCanvas">
        <canvas id="step3_chart1" ></canvas>
      </div>

      <div class="myCanvas">
        <canvas id="step3_chart2"></canvas>
      </div>

      <div class="myCanvas">
        <canvas id="step3_chart3"></canvas>
      </div>

    </div>

            

  
  </body>
</html>