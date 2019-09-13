function getMonth(){

    var months = moment.months();
  
    return months
}

function printChartLine(data, id){

    var ctx = document.getElementById(id).getContext('2d');

    if (Array.isArray(data)) {
        printchartSingleLine(data, ctx);
    }else{
        printchartMultipleLine(data, ctx);
    } 
}

function printchartSingleLine(data, ctx){

    new Chart(ctx, {
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
    
            }],
            
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

function printchartMultipleLine(data, ctx){

    var label = Object.keys(data);
    var arr_data = Object.values(data);

    var datasets = [];

    for (let i = 0; i < label.length; i++) {
        const team_name = label[i];
        const team_score = arr_data[i];

        var rand = Math.floor(Math.random() * 500);

        var rand_r = Math.floor(Math.random() * 500);
        var rand_g = Math.floor(Math.random() * 500);
        var rand_b = Math.floor(Math.random() * 500);

        console.log(rand_r, rand_g);
        
        datasets.push({
            label: team_name,
            data: team_score,
            backgroundColor: 'rgba(00, 00, 00, 0.0)',
            borderColor: 'rgb('+rand_r+', '+rand_g+', '+rand_b+')',
        });
        
    }
    
    new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: getMonth(),
            datasets: datasets,   
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

function printChartPie(data, id) {
    
    /* Ricavo i due array nnomi e fatturato dall oggetto 
    contenuto nell'array restituito da ajax */
    var name_agents = Object.keys(data);
    var fatt_agent = Object.values(data);


    var ctx = document.getElementById(id).getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'pie',
  
      // The data for our dataset
      data: {
          labels: name_agents,
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
              data: fatt_agent,
  
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
                text: 'VENDITE TOTALI PER OGNI VENDITORE',
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

function step_3(){

    var searchParams = new URLSearchParams(new URL(location.href).search);
    
    var level = searchParams.get('level');
    var access = {"level": level};

    $.ajax({

        url: 'api_chart3.php',
        method: 'GET',
        data: access,

        success: function(data){
            console.log("DATA STEP 3", data);
            var id_appendto = "";
            /* Ciclo array risultati da php */
            for (let i = 0; i < data.length; i++) {
                const el = data[i];
                
                id_appendto = 'step3_chart' + (i + 1);
                console.log("id", id_appendto);
                
                switch (el.type) {
                    case 'line':
                        $('#'+ id_appendto +'').siblings('h1').remove();
                        printChartLine(el.data, id_appendto);
                        break;

                    case 'pie':
                        $('#'+ id_appendto +'').siblings('h1').remove();
                        printChartPie(el.data, id_appendto);    
                
                    default:
                        break;
                }   
                
            }
            
        },
        error: function(error){
            console.log("error chiamata 3", error);
            
        }
    });
}
  
function step_1(){

    $.ajax({

        url: "api_chart1.php",
        method: "GET",

        success: function(data){

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

            console.log("Oggetto fatturato", data.fatturato_by_agent.data);
           

            var fatt_month = data.fatturato;
            var fatt_by_agent = data.fatturato_by_agent;
            var obj_fatt_by_agent = fatt_by_agent.data;

            printChartLine(fatt_month.data, 'step2_chart1');
            
            printChartPie(obj_fatt_by_agent, 'step2_chart2');   
        
        },
        error: function(err){
            console.log("errore api grafico 1");
            
        }
    });
}


function init() {

    step_1(); 
    step_2();
    step_3();       
 
}

$(document).ready(init);
