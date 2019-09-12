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
    <header>
      <div class="logo">
        <i class="fab fa-js-square fa-4x"></i>
        <img src="img/JQuery.png" alt="ajax.png">
        <img src="img/ajax.png" alt="ajax.png">
        <i class="fab fa-php fa-4x"></i>
        
      </div>
    </header>

    <div class="container">
      

      <section>
        <h1>STEP 1</h1>
        <h2>Una chiamata Ajax a file .php, ritorna un oggetto Json con un singolo Array <br>
            Array Mesi generato con libreria Moment.js</h2>
        <div class="myCanvas">
          <canvas id="step1_chart"></canvas>
        </div>
        
      </section>
      <hr>
      <section>
        <h1>STEP 2</h1>
        <h2>Una chiamata Ajax ritorna un oggetto Json con due Array <br>
            L'oggetto viene elaborato per estrapolare i data per Chart.Js</h2>
        <div class="myCanvas">
          <canvas id="step2_chart1"></canvas>
        </div>
      

        <div class="myCanvas">
          <canvas id="step2_chart2"></canvas>
        </div>
        
      </section>
      <hr>
      <section>
        <h1>STEP 3</h1>
        <h2>JS elabora i parametri passati nell'url per creare l'oggetto data della chiamata ajax JQuery<br>
            che chiede al file php l'invio di dati in base alla chiave access di questi ultimi passata come parametro: <br> ?level=guest/employee/clevel</h2>
        <h3>Per visualizzare i grafici occorre completare l'url con la query da inviare a php<br>
        Secondo Quanto segue: localhost/index.php?level=...., ed indicare il livello del permesso:</h3>
        <h3>guest - employee - clevel:</h3>
        <div class="myCanvas">
          <h1>Non hai i permessi per vedere questo widget</h1>
          <canvas id="step3_chart1" ></canvas>
        </div>

        <div class="myCanvas">
          <h1>Non hai i permessi per vedere questo widget</h1>
          <canvas id="step3_chart2"></canvas>
        </div>

        <div class="myCanvas">
          <h1>Non hai i permessi per vedere questo widget</h1>
          <canvas id="step3_chart3">
          </canvas>
        </div>
      
      </section>

    </div>

            

  
  </body>
</html>