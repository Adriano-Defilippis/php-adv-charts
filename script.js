function getGraph2(){

    $.ajax({

        url: "chart2_json.php",
        method: "GET",

        success: function(data){

            console.log("succes graph 2!");
            console.log("data", data);
            
            
        },
        error: function(err){
            console.log("errore api grafico 1");
            
        }
    });
}

function getGraph1(){

    $.ajax({

        url: "chart1_json.php",
        method: "GET",

        success: function(data){

            console.log("succes graph 1!");
            console.log("data", data);
            
            
        },
        error: function(err){
            console.log("errore api grafico 1");
            
        }
    });
}

function init() {
    console.log("Hello World");
    getGraph1();
    getGraph2();

}

$(document).ready(init);
