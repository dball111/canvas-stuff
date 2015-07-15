var buttonSquare = document.getElementById("buttonSquare");
var hello = document.getElementById("hello");
var buttonCircle = document.getElementById("buttonCircle");
var erase = document.getElementById("erase");


var random =  Math.floor(Math.random() * 500) + 1 ;
var random1 =  Math.floor(Math.random() * 500) + 1 ;


function randomNum() {
  var result = Math.floor(Math.random() * 5) + 1 ;

  if (result === 1) {
    return "blue"
  }
  else if (result === 2) {
    return "red"
  }
  else if (result === 3) {
    return "yellow"
  }
  else if (result === 4) {
    return "orange"
  }
  else if (result === 5) {
    return "purple"
  }

}


function eraserHead() {
  var result = 0 ;
  if (result === 0) {
    return "white"
  }
}




function drawSquare() {
   var canvas = document.getElementById("tutorial");
   if (canvas.getContext) {
     var ctx = canvas.getContext("2d");

     ctx.fillStyle = randomNum();
    //  ctx.fillRect (10, 10, 55, 50);
     ctx.fillRect (random, random, random1, random1);



   }
 }

 function writeHello() {
    var canvas = document.getElementById("tutorial");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");

      ctx.fillStyle = randomNum();
      ctx.font = 'italic 40pt Calibri, sans-serif';
      ctx.fillText('Hello World!', random, random1);



    }
  }

  function drawCircle() {
     var canvas = document.getElementById("tutorial");
     if (canvas.getContext) {
       var ctx = canvas.getContext("2d");

       ctx.fillStyle = randomNum();
       ctx.beginPath();
       ctx.arc(random1, random, random, random1, Math.PI*2, true);
       ctx.closePath();
       ctx.fill();


     }
   }


   function eraser() {
      var canvas = document.getElementById("tutorial");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = eraserHead();
        ctx.fillRect (random, random, random1, random1);


        ctx.fillStyle = eraserHead();
        ctx.font = 'italic 40pt Calibri, sans-serif';
        ctx.fillText('Hello World!', random, random1);




       ctx.fillStyle = eraserHead();
       ctx.beginPath();
       ctx.arc(random1, random, random, random1, Math.PI*2, true);
       ctx.fillStyle = eraserHead();
       ctx.closePath();
       ctx.fill();

      }
    }

erase.addEventListener("click", function() {
  eraser();
})


buttonSquare.addEventListener("click", function() {
  drawSquare();

})


hello.addEventListener("click", function() {
  writeHello();

})

buttonCircle.addEventListener("click", function() {
  drawCircle();

})
