var BPM = 60;
var time = (60/(BPM*8))*1000
var init = setInterval(init,time); 
var nombre = 0 ;
var tab_track = new Array();


var index = 0;
var selectmode=0;
var vartest;

var start = 0;
var rewind = 0;

var initialisation = 0;



function addtrack(){

    document.getElementsByClassName("Track")[index].style.display   = "flex";
    index ++;

}

function StartFunction(){
    if (start == 0)
    {
        start = 1;
    }
}
function RewindFunction(){
    rewind = 1;
}
function PauseFunction(){
    if (start == 1)
    {
        start = 0;
    }
}

function select_sample(element,id){



    var player_Hihat = document.getElementById('Hihat');
    var player_Snare = document.getElementById('Snare');
    var player_Kick = document.getElementById('Kick');
    var player_Snap = document.getElementById('Snap');

    document.getElementsByClassName("Slot_Sample")[index-1].innerHTML   =  element.innerHTML;
    document.getElementsByClassName("Slot_Sample")[index-1].style.backgroundColor   = "#FE9A2E";
    document.getElementsByClassName("Slot_Sample")[index-1].style.paddingTop   = "15px";
    document.getElementsByClassName("Slot_Sample")[index-1].style.height   = "55px";
    tab_track[index-1][0]=id;

    switch(id) {
        case 0:
            player_Hihat.load();
            player_Hihat.play();
            break;
        case 1:
            player_Snare.load();
            player_Snare.play();
            break;
        case 2:
            player_Kick.load();
            player_Kick.play();
            break;
        case 3:
            player_Snap.load();
            player_Snap.play();
            break;
    }

}

function select_time(element,track,id){
    if(tab_track[track][id+1]==true){
        tab_track[track][id+1]=false;
        document.getElementsByClassName("Slot")[id+track*32].style.backgroundColor = "";
    }
    else{
        tab_track[track][id+1]=true;
        document.getElementsByClassName("Slot")[id+track*32].style.backgroundColor = "#FE9A2E";

    }
}



window.addEventListener("keydown", testfu ,false);

function testfu(e){
    document.getElementById("test1").innerHTML = e.keyCode; 
    if(e.keyCode == "32"){
        tab_track[0][nombre+1]=true;
        document.getElementsByClassName("Slot")[nombre].style.backgroundColor = "#FE9A2E";
    }

}



function init(){

    if(initialisation == 0){
        var i =0;
        var j =0;

        for (i=0;i<33;i++) {
            tab_track[i] =new Array();
            for (j=0;j<33;j++) {
                tab_track[i][j]=0;
            }
        }

        initialisation = 1;
    }
    



    var player_Hihat = document.getElementById('Hihat');
    var player_Snare = document.getElementById('Snare');
    var player_Kick = document.getElementById('Kick');
    var player_Snap = document.getElementById('Snap');

    vartest = 32.9*nombre+243;
    document.getElementById("test1").innerHTML = nombre;


    document.getElementsByClassName("TimeLine")[0].style.left=  + vartest + "px";


    for (i=0;i<10;i++) {
        if(tab_track[i][nombre+1]==true){
            switch(tab_track[i][0]) {
                case 0:
                    player_Hihat.load();
                    if(start)
                    player_Hihat.play();
                    break;
                case 1:
                    player_Snare.load();
                    if(start)
                    player_Snare.play();
                    break;
                case 2:
                    player_Kick.load();
                    if(start)
                    player_Kick.play();
                    break;
                case 3:
                    player_Snap.load();
                    if(start)
                    player_Snap.play();
                    break;
            }
        }
    }


    if(start == 1)
        nombre ++;
        if(nombre == 32 )
            nombre =0;
    if(rewind == 1){
        nombre = 0;
        rewind = 0;
    }
 }

