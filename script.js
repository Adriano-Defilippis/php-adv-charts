function getMonth(){

    var months = moment.months();
  
    return months
  }

function getGraph1(){

    $.ajax({

        url: "api_chart1.php",
        method: "GET",

        success: function(data){

            console.log("succes graph 1!");
            console.log("data", data);

            printChartLine(data);
        
        },
        error: function(err){
            console.log("errore api grafico 1");
            
        }
    });
}

function getGraph2(){

    $.ajax({

        url: "api_chart2.php",
        method: "GET",

        success: function(data){

            console.log("Oggetto fatturato", data.fatturato);
            console.log("Oggetto fatturato_by_agent", data.fatturato_by_agent);

           var fatt_month = data.fatturato;
           var fatt_by_agent = data.fatturato_by_agent;
           
           /* Controllo js per usare la funzione in base al 
           tipo di grafico specificato nell'oggetto json */
           if (fatt_month.type == "line" || fatt_by_agent == "line") {
                
                printChartLine(fatt_month.data);

           }else if(fatt_month.type == "pie" || fatt_by_agent == "pie"){

                printChartPie(fatt_by_agent.data);
           }
           
            
        
        },
        error: function(err){
            console.log("errore api grafico 1");
            
        }
    });
}

function printChartLine(data){

    var ctx = document.getElementById('myChart1').getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
  
      // The data for our dataset
      data: {
          labels: getMonth(),
          datasets: [{
              label: "Volume D'affari",
              backgroundColor: 'rgba(255, 99, 132, 0.4)',
              borderColor: 'rgba(00, 00, 00, 0.4)',
              data: data,
  
          }]
      },
  
      // Configuration options go here
      options: {
        title: {
          display: true,
          text: 'VENDITE TOTALI PER OGNI MESE',
          fontSize: 28,
          position: "left"
        },
        legend: {
          display: true,
          position: 'right',
        },
      }
  });
}

function printChartPie(data){

    /* TO DO....... */
}

function init() {
    console.log("Hello World");
   /*  getGraph1(); */
    getGraph2();

}

$(document).ready(init);
