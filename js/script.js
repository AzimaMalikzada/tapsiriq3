function chBg(){

    document.getElementById("main").style.animationName = "go";
}

function aniStop(){

    document.getElementById("main").style.animationName = "";
    }

function changeWidth(){

   var width = document.getElementById('width').value
   var olchu = document.getElementById('olchu').value

    document.getElementById("main").style.width = width+olchu
}
function changeHeight(){
   var height = document.getElementById('height').value
   var olchu = document.getElementById('olchu').value
    document.getElementById("main").style.height = height+olchu
}
function color(){
    var color = document.getElementById('color').value
    document.getElementById("main").style.backgroundColor = color 
}

function changeWidthDefault(){
    document.getElementById("main").style.width = "150px"
    }