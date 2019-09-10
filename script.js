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

function init() {
    console.log("Hello World");
    getGraph1();

}

$(document).ready(init);
