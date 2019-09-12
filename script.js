function getMonth(){

    var months = moment.months();
  
    return months
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


function step_3() {
    
    /* Variabile per ricavare dall'url i dati inseriti come parametri
    da inviare a php come permessi per visualizzare il grafico */
    var window_location_for_query = window.location.search;

    var arr_parameter_url = window.location.search.split("=");
    
    console.log("window location", window.location.search);    
    
    $.ajax({

        url: "api_chart3.php" + window_location_for_query,
        method: "GET",
        
        complete: function(){
            alert(this.url);
        },

        success: function(data){

            var name_agents = [];
            var fatt_agent = [];
            var dataof_json = data.data;
            var type = data.type;
 
            console.log("3", data);

            /* Il Ciclo mi permette di ciclare l'array con i grafici restituiti da php in base alla query dei permessi */
            for (let i = 0; i < data.length; i++) {
                const el = data[i];

                console.log("data[i]", el);
                /* ogni oggetto dell'array viene ciclato per recuperari i dati necessari a Chart.js */
                console.log('data l', el.data);

                /* STAMPO IN BASE AL TIPO ED AI PERMESSI */
                switch (el.type) {
                    case 'line':

                         switch (el.access) {
                            case "guest":
                                
                                $('#step3_chart1').siblings('h1').remove();
                                printChartLine(el.data, 'step3_chart1');
                            break;

                            case "clevel":

                                $('#step3_chart3').siblings('h1').remove();
                                printChart3Line(el.data, 'step3_chart3');
                            break;

                            default:
                                break;
                        
                        }
                        
                    break;

                    case 'pie':

                        if (el.access == 'employee') {
                            
                            $('#step3_chart2').siblings('h1').remove();
                            printChartPie(el.data, 'step3_chart2');

                        }
                
                    default:
                        break;
                } 

            }
        
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

function printChartPie(obj, id){

    /* var name_agents = [];
    var fatt_agent = []; */

    /* Ricavo i due array nnomi e fatturato dall oggetto 
    contenuto nell'array restituito da ajax */
    var name_agents = Object.keys(obj);
    var fatt_agent = Object.values(obj);


    /* for (const name in obj) {
        if (obj.hasOwnProperty(name)) {
            const fatturato = obj[name];
                
                name_agents.push(name);
                fatt_agent.push(fatturato);
        }
    } */

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
/* L'oggetto contiene array con 3 label, ed array con 3 data */
function printChart3Line(object, id){

    var name_team = [];
    var fatt_team = [];

        
    for (const team in object) {
        if (object.hasOwnProperty(team)) {
            const el = object[team];

            name_team.push(team);
            fatt_team.push(el);
            
        }
        console.log("TEAM", name_team);
        console.log("FATT TEAM", fatt_team);
    }


    /* Preparo template di Chart.js */
    var ctx = document.getElementById(id).getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: getMonth(),
            datasets: [
                {

                label: name_team[0],
                backgroundColor: 'rgba(00, 00, 00, 0.0)',
                borderColor: 'rgba(30, 100, 234, 0.4)',
                data: fatt_team[0],
    
                },
                {

                label: name_team[1],
                backgroundColor: 'rgba(00, 00, 00, 0.0)',
                borderColor: 'rgba(200, 490, 30, 0.4)',
                data: fatt_team[1],
        
                },
                {

                label: name_team[2],
                backgroundColor: 'rgba(00, 00, 00, 0.0)',
                borderColor: 'rgba(400, 120, 290, 0.4)',
                data: fatt_team[2],
            
                },
            ],
            
        },
    
        // Configuration options go here
        options: {
            title: {
            display: true,
            text: 'VENDITE TEAM',
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

    step_1(); 
    step_2();       
    step_3();
 
}

$(document).ready(init);
