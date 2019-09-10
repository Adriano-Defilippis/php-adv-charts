function getMonth(){

    var months = moment.months();
  
    return months
  }

function step_1(){

    $.ajax({

        url: "api_chart1.php",
        method: "GET",

        success: function(data){

            console.log("succes graph 1!");
            console.log("data", data);

            printChartLine(data, 'step1_chart');
        
        },
        error: function(err){
            console.log("errore api grafico 1");
            
        }
    });
}

function step_2(){

    $.ajax({

        url: "api_chart2.php",
        method: "GET",

        success: function(data){

            console.log("Oggetto fatturato", data.fatturato);
            console.log("Oggetto fatturato_by_agent", data.fatturato_by_agent);

           var fatt_month = data.fatturato;
           var fatt_by_agent = data.fatturato_by_agent;
           var name_agents = [];
           var fatt_agent = [];
           var obj_fatt_by_agent = fatt_by_agent.data;

           console.log("agenti: ",fatt_by_agent.data );

           /* Ricavo i due array nnomi e fatturato dall oggetto 
           contenuto nell'array restituito da ajax */
           for (const name in obj_fatt_by_agent) {
               if (obj_fatt_by_agent.hasOwnProperty(name)) {
                   const fatturato = obj_fatt_by_agent[name];
                    
                    name_agents.push(name);
                    fatt_agent.push(fatturato);
               }
           }
           
           console.log("arr fatt name", name_agents, fatt_agent);

           
           /* Controllo js per usare la funzione in base al 
           tipo di grafico specificato nell'oggetto json */
           
            printChartLine(fatt_month.data, 'step2_chart1');
           
            printChartPie(name_agents, fatt_agent, 'step2_chart2');
            console.log("PIE");
            
        
             
        
        },
        error: function(err){
            console.log("errore api grafico 1");
            
        }
    });
}

function printChartLine(data, id){

    var ctx = document.getElementById(id).getContext('2d');
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

function printChartPie(labels, data, id){

    var ctx = document.getElementById(id).getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'pie',
  
      // The data for our dataset
      data: {
          labels: labels,
          datasets: [{
  
              backgroundColor: ['lightblue',
                                'lightgreen',
                                'lightpink',
                                'lightgrey',
                                'lightbrown',
                                'orange',
                                'blue',
                                'grey',
                                'green'],
              borderColor: 'rgba(255, 99, 132, 0.3)',
              data: data,
  
          }]
  
      },
  
      // Configuration options go here
      options: {
  
              // rotation: -Math.PI,
              cutoutPercentage: 30,
              // circumference: Math.PI,
              legend: {
                display: true,
                position: 'left',
              },
              title: {
                display: true,
                text: 'VENDITE TOTALI PER OGNI VENDITORE SU BASE ANNUA',
                position: 'top',
                fontSize: 24,
              },
              animation: {
                animateRotate: true,
                animateScale: true
              }
            }
  
  });
}

function init() {
    console.log("Hello World");
   step_1(); 
   step_2();

}

$(document).ready(init);
