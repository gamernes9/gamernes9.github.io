var activeQuestion;

var music = document.getElementById("jeopardy");
var endMusic = document.getElementById("endMusic");

var redScore = 0;
var blueScore = 0;

var question = 0;
var answer = 1;
var value = 2;

var winningTeam;

var data = {
    "1":["question","answer","200"],
    "2":["question","answer","200"],
    "3":["question","answer","200"],
    "4":["question","answer","200"],
    "5":["question","answer","200"],
    "6":["question","answer","200"],
    "7":["question","answer","400"],
    "8":["question","answer","400"],
    "9":["question","answer","400"],
    "10":["question","answer","400"],
    "11":["question","answer","400"],
    "12":["question","answer","400"],
    "13":["question","answer","600"],
    "14":["question","answer","600"],
    "15":["question","answer","600"],
    "16":["question","answer","600"],
    "17":["question","answer","600"],
    "18":["question","answer","600"],
    "19":["question","answer","800"],
    "20":["question","answer","800"],
    "21":["question","answer","800"],
    "22":["question","answer","800"],
    "23":["question","answer","800"],
    "24":["question","answer","800"],
    "25":["question","answer","1000"],
    "26":["question","answer","1000"],
    "27":["question","answer","1000"],
    "28":["question","answer","1000"],
    "29":["question","answer","1000"],
    "30":["question","answer","1000"]
};

$(document).ready(function() {
    $("#td1").click(function(){
        activeQuestion = "1";
        $('#td1').css("text-decoration","line-through");
        $('#td1').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td2").click(function(){
        activeQuestion = "2";
        $('#td2').css("text-decoration","line-through");
        $('#td2').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td3").click(function(){
        activeQuestion = "3";
        $('#td3').css("text-decoration","line-through");
        $('#td3').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td4").click(function(){
        activeQuestion = "4";
        $('#td4').css("text-decoration","line-through");
        $('#td4').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td5").click(function(){
        activeQuestion = "5";
        $('#td5').css("text-decoration","line-through");
        $('#td5').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td6").click(function(){
        activeQuestion = "6";
        $('#td6').css("text-decoration","line-through");
        $('#td6').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td7").click(function(){
        activeQuestion = "7";
        $('#td7').css("text-decoration","line-through");
        $('#td7').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td8").click(function(){
        activeQuestion = "8";
        $('#td8').css("text-decoration","line-through");
        $('#td8').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td9").click(function(){
        activeQuestion = "9";
        $('#td9').css("text-decoration","line-through");
        $('#td9').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td10").click(function(){
        activeQuestion = "10";
        $('#td10').css("text-decoration","line-through");
        $('#td10').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td11").click(function(){
        activeQuestion = "11";
        $('#td11').css("text-decoration","line-through");
        $('#td11').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td12").click(function(){
        activeQuestion = "12";
        $('#td12').css("text-decoration","line-through");
        $('#td12').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td13").click(function(){
        activeQuestion = "13";
        $('#td13').css("text-decoration","line-through");
        $('#td13').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td14").click(function(){
        activeQuestion = "14";
        $('#td14').css("text-decoration","line-through");
        $('#td14').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td15").click(function(){
        activeQuestion = "15";
        $('#td15').css("text-decoration","line-through");
        $('#td15').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td16").click(function(){
        activeQuestion = "16";
        $('#td16').css("text-decoration","line-through");
        $('#td16').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td17").click(function(){
        activeQuestion = "17";
        $('#td17').css("text-decoration","line-through");
        $('#td17').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td18").click(function(){
        activeQuestion = "18";
        $('#td18').css("text-decoration","line-through");
        $('#td18').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td19").click(function(){
        activeQuestion = "19";
        $('#td19').css("text-decoration","line-through");
        $('#td19').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td20").click(function(){
        activeQuestion = "20";
        $('#td20').css("text-decoration","line-through");
        $('#td20').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td21").click(function(){
        activeQuestion = "21";
        $('#td21').css("text-decoration","line-through");
        $('#td21').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td22").click(function(){
        activeQuestion = "22";
        $('#td22').css("text-decoration","line-through");
        $('#td22').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td23").click(function(){
        activeQuestion = "23";
        $('#td23').css("text-decoration","line-through");
        $('#td23').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td24").click(function(){
        activeQuestion = "24";
        $('#td24').css("text-decoration","line-through");
        $('#td24').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td25").click(function(){
        activeQuestion = "25";
        $('#td25').css("text-decoration","line-through");
        $('#td25').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td26").click(function(){
        activeQuestion = "26";
        $('#td26').css("text-decoration","line-through");
        $('#td26').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td27").click(function(){
        activeQuestion = "27";
        $('#td27').css("text-decoration","line-through");
        $('#td27').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td28").click(function(){
        activeQuestion = "28";
        $('#td28').css("text-decoration","line-through");
        $('#td28').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td29").click(function(){
        activeQuestion = "29";
        $('#td29').css("text-decoration","line-through");
        $('#td29').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
    $("#td30").click(function(){
        activeQuestion = "30";
        $('#td30').css("text-decoration","line-through");
        $('#td30').css("color","#666");
        $('#question').html(data[activeQuestion][0]);
        $('#answer').hide();
        music.play();
        $('#answer').html(data[activeQuestion][1]);
    });
});

$(document).ready(function() {
    $("#revealAns").click(function(){
       $('#answer').toggle();
       music.load();
       music.pause();
    });
});    

function reset(activeQuestion) {
    activeQuestion = null;
    $('#answer').hide();
    $('#question').html(" ");
};

$(document).ready(function() {
  $(document).keydown(function(key) {
    switch(parseInt(key.which,10)) {
      case 82:
        redScore = redScore + parseInt(data[activeQuestion][2]);
        $(".teamRed").html(redScore);
        reset(activeQuestion);
      break;
      case 114:
        redScore = redScore + parseInt(data[activeQuestion][2]);
        $(".teamRed").html(redScore);
        reset(activeQuestion);
      break;
      case 66:
        blueScore = blueScore + parseInt(data[activeQuestion][2]);
        $(".teamBlue").html(blueScore);
        reset(activeQuestion);
      break;
      case 98:
        blueScore = blueScore + parseInt(data[activeQuestion][2]);
        $(".teamBlue").html(blueScore);
        reset(activeQuestion);
      break;
      case 88:
        reset(activeQuestion);
      break;
      case 120:
        reset(activeQuestion);
      break; 
      case 13:
        $('#answer').toggle();
       music.load();
       music.pause();
      break;
    }
  });
});  

$(document).ready(function() {
  $(document).keydown(function(key) {
    switch(parseInt(key.which,10)) {
      case 27:
        var exitPrompt = confirm("Are you sure you want to end the game?");
        if (exitPrompt == true){
            music.pause();
            endMusic.play();
            $('#overlay').css("background-color","#142283");
            if(blueScore<redScore){
                winningTeam = "RED TEAM WINS!";
                $('#overlay').css("background-color", "#ff1919");
                $('#screen').css("background-color", "#ff1919");
            }
            else if(blueScore>redScore){
                winningTeam = "BLUE TEAM WINS!";
            }
            else if(blueScore===redScore){
                winningTeam = "IT'S A TIE!";
            }
            else{
                winningTeam = "NEITHER TEAM WON!";
            } 
            $('#overlay h1').html(winningTeam);
            $('#overlay').css("z-index","9999");
        }
        else if (exitPrompt == false){
        }
      break;
    }
  });
});






// document scanner to import spreadsheet data

function scan(spreadsheet) {
  console.log("Searching for documents...");
  console.log(spreadsheet);
  console.log("Found "+'1'+" document(s)");
  console.log("Scanning documents...");
  var sourceFile = "div#my_file_output td:nth-of-type(1)";
  var sf = sourceFile;

    data = {
        "1":["question","answer","200"],
        "2":["question","answer","200"],
        "3":["question","answer","200"],
        "4":["question","answer","200"],
        "5":["question","answer","200"],
        "6":["question","answer","200"],
        "7":["question","answer","400"],
        "8":["question","answer","400"],
        "9":["question","answer","400"],
        "10":["question","answer","400"],
        "11":["question","answer","400"],
        "12":["question","answer","400"],
        "13":["question","answer","600"],
        "14":["question","answer","600"],
        "15":["question","answer","600"],
        "16":["question","answer","600"],
        "17":["question","answer","600"],
        "18":["question","answer","600"],
        "19":["question","answer","800"],
        "20":["question","answer","800"],
        "21":["question","answer","800"],
        "22":["question","answer","800"],
        "23":["question","answer","800"],
        "24":["question","answer","800"],
        "25":["question","answer","1000"],
        "26":["question","answer","1000"],
        "27":["question","answer","1000"],
        "28":["question","answer","1000"],
        "29":["question","answer","1000"],
        "30":["question","answer","1000"]
    };

    var tempLogQ;
    var tempLogA;

    data[1][question] = $('div#my_file_output tr:nth-of-type(1) td:nth-of-type(1)').text();
    data[1][answer] = $('div#my_file_output tr:nth-of-type(1) td:nth-of-type(2)').text();
    data[2][question] = $('div#my_file_output tr:nth-of-type(2) td:nth-of-type(1)').text();
    data[2][answer] = $('div#my_file_output tr:nth-of-type(2) td:nth-of-type(2)').text();
    data[3][question] = $('div#my_file_output tr:nth-of-type(3) td:nth-of-type(1)').text();
    data[3][answer] = $('div#my_file_output tr:nth-of-type(3) td:nth-of-type(2)').text();
    data[4][question] = $('div#my_file_output tr:nth-of-type(4) td:nth-of-type(1)').text();
    data[4][answer] = $('div#my_file_output tr:nth-of-type(4) td:nth-of-type(2)').text();
    data[5][question] = $('div#my_file_output tr:nth-of-type(5) td:nth-of-type(1)').text();
    data[5][answer] = $('div#my_file_output tr:nth-of-type(5) td:nth-of-type(2)').text();
    data[6][question] = $('div#my_file_output tr:nth-of-type(6) td:nth-of-type(1)').text();
    data[6][answer] = $('div#my_file_output tr:nth-of-type(6) td:nth-of-type(2)').text();
    data[7][question] = $('div#my_file_output tr:nth-of-type(7) td:nth-of-type(1)').text();
    data[7][answer] = $('div#my_file_output tr:nth-of-type(7) td:nth-of-type(2)').text();
    data[8][question] = $('div#my_file_output tr:nth-of-type(8) td:nth-of-type(1)').text();
    data[8][answer] = $('div#my_file_output tr:nth-of-type(8) td:nth-of-type(2)').text();
    data[9][question] = $('div#my_file_output tr:nth-of-type(9) td:nth-of-type(1)').text();
    data[9][answer] = $('div#my_file_output tr:nth-of-type(9) td:nth-of-type(2)').text();
    data[10][question] = $('div#my_file_output tr:nth-of-type(10) td:nth-of-type(1)').text();
    data[10][answer] = $('div#my_file_output tr:nth-of-type(10) td:nth-of-type(2)').text();
    data[11][question] = $('div#my_file_output tr:nth-of-type(11) td:nth-of-type(1)').text();
    data[11][answer] = $('div#my_file_output tr:nth-of-type(11) td:nth-of-type(2)').text();
    data[12][question] = $('div#my_file_output tr:nth-of-type(12) td:nth-of-type(1)').text();
    data[12][answer] = $('div#my_file_output tr:nth-of-type(12) td:nth-of-type(2)').text();
    data[13][question] = $('div#my_file_output tr:nth-of-type(13) td:nth-of-type(1)').text();
    data[13][answer] = $('div#my_file_output tr:nth-of-type(13) td:nth-of-type(2)').text();
    data[14][question] = $('div#my_file_output tr:nth-of-type(14) td:nth-of-type(1)').text();
    data[14][answer] = $('div#my_file_output tr:nth-of-type(14) td:nth-of-type(2)').text();
    data[15][question] = $('div#my_file_output tr:nth-of-type(15) td:nth-of-type(1)').text();
    data[15][answer] = $('div#my_file_output tr:nth-of-type(15) td:nth-of-type(2)').text();
    data[16][question] = $('div#my_file_output tr:nth-of-type(16) td:nth-of-type(1)').text();
    data[16][answer] = $('div#my_file_output tr:nth-of-type(16) td:nth-of-type(2)').text();
    data[17][question] = $('div#my_file_output tr:nth-of-type(17) td:nth-of-type(1)').text();
    data[17][answer] = $('div#my_file_output tr:nth-of-type(17) td:nth-of-type(2)').text();
    data[18][question] = $('div#my_file_output tr:nth-of-type(18) td:nth-of-type(1)').text();
    data[18][answer] = $('div#my_file_output tr:nth-of-type(18) td:nth-of-type(2)').text();
    data[19][question] = $('div#my_file_output tr:nth-of-type(19) td:nth-of-type(1)').text();
    data[19][answer] = $('div#my_file_output tr:nth-of-type(19) td:nth-of-type(2)').text();
    data[20][question] = $('div#my_file_output tr:nth-of-type(20) td:nth-of-type(1)').text();
    data[20][answer] = $('div#my_file_output tr:nth-of-type(20) td:nth-of-type(2)').text();
    data[21][question] = $('div#my_file_output tr:nth-of-type(21) td:nth-of-type(1)').text();
    data[21][answer] = $('div#my_file_output tr:nth-of-type(21) td:nth-of-type(2)').text();
    data[22][question] = $('div#my_file_output tr:nth-of-type(22) td:nth-of-type(1)').text();
    data[22][answer] = $('div#my_file_output tr:nth-of-type(22) td:nth-of-type(2)').text();
    data[23][question] = $('div#my_file_output tr:nth-of-type(23) td:nth-of-type(1)').text();
    data[23][answer] = $('div#my_file_output tr:nth-of-type(23) td:nth-of-type(2)').text();
    data[24][question] = $('div#my_file_output tr:nth-of-type(24) td:nth-of-type(1)').text();
    data[24][answer] = $('div#my_file_output tr:nth-of-type(24) td:nth-of-type(2)').text();
    data[25][question] = $('div#my_file_output tr:nth-of-type(25) td:nth-of-type(1)').text();
    data[25][answer] = $('div#my_file_output tr:nth-of-type(25) td:nth-of-type(2)').text();
    data[26][question] = $('div#my_file_output tr:nth-of-type(26) td:nth-of-type(1)').text();
    data[26][answer] = $('div#my_file_output tr:nth-of-type(26) td:nth-of-type(2)').text();
    data[27][question] = $('div#my_file_output tr:nth-of-type(27) td:nth-of-type(1)').text();
    data[27][answer] = $('div#my_file_output tr:nth-of-type(27) td:nth-of-type(2)').text();
    data[28][question] = $('div#my_file_output tr:nth-of-type(28) td:nth-of-type(1)').text();
    data[28][answer] = $('div#my_file_output tr:nth-of-type(28) td:nth-of-type(2)').text();
    data[29][question] = $('div#my_file_output tr:nth-of-type(29) td:nth-of-type(1)').text();
    data[29][answer] = $('div#my_file_output tr:nth-of-type(29) td:nth-of-type(2)').text();
    data[30][question] = $('div#my_file_output tr:nth-of-type(30) td:nth-of-type(1)').text();
    data[30][answer] = $('div#my_file_output tr:nth-of-type(30) td:nth-of-type(2)').text();

    console.log(data);

    
    for (i=1; i<=30; i++) {
        for (k=0; k<=2; k++) {
            //tempLogQ = $('div#my_file_output ' + 'td:nth-of-type('+i+')');
            //tempLogA = $('div#my_file_output ' + 'td:nth-of-type('+i+')');
            //data[i][k] = tempLogQ;
            //data[i][k] = tempLogA;
            console.log(data[i][k]);
            //alert(data[i][k]);
        }
    }

};






//excel reading... DO NOT TOUCH

var oFileIn;

$(function() {
    oFileIn = document.getElementById('my_file_input');
    if(oFileIn.addEventListener) {
        oFileIn.addEventListener('change', filePicked, false);
    }
});

function filePicked(oEvent) {
    // Get The File From The Input
    var oFile = oEvent.target.files[0];
    var sFilename = oFile.name;
    // Create A File Reader HTML5
    var reader = new FileReader();

    // Ready The Event For When A File Gets Selected
    reader.onload = function(e) {
        var data = e.target.result;
        var cfb = XLS.CFB.read(data, {type: 'binary'});
        var wb = XLS.parse_xlscfb(cfb);
        // Loop Over Each Sheet
        wb.SheetNames.forEach(function(sheetName) {
            // Obtain The Current Row As CSV
            var sCSV = XLS.utils.make_csv(wb.Sheets[sheetName]);
            var data = XLS.utils.sheet_to_json(wb.Sheets[sheetName], {header:1});
            $.each(data, function( indexR, valueR ) {
                var sRow = "<tr>";
                $.each(data[indexR], function( indexC, valueC ) {
                    sRow = sRow + "<td>" + valueC + "</td>";
                });
                sRow = sRow + "</tr>";
                $("#my_file_output").append(sRow);
            });
        });
    };

    // Tell JS To Start Reading The File.. You could delay this if desired
    reader.readAsBinaryString(oFile);




// miclaymon added
var outputDocument = oFile;

}

//end excel reading