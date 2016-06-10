
// Something a little more modular. We're now freed of the button and can invoke makeNote however we wish.
// Also got rid of that nasty global variable. Ooops.

function makeNote() {
    var boxCount = document.getElementsByClassName('box');
    var count = boxCount.length;
    var box = document.createElement("box", "p"); // Turns out I can create multiple objects here :)
    var colourVal = document.getElementById('colour').value;
    var textVal = document.getElementById('text').value;
    var text = document.createTextNode((count + 1) +" - " + textVal);

    box.className = "box";
    box.style.backgroundColor = colourVal;

    document.getElementsByClassName('container')[0].appendChild(box);
    document.getElementsByClassName('box')[count].appendChild(text);

    console.log(count);
    return;
};

document.getElementById('make-sticky').onclick = makeNote;


/*
// Quick n' dirty

var count = 0;
document.getElementById('make-sticky').onclick = function() {
  var box = document.createElement("box");
  var p = document.createElement("p");
  var colourVal = document.getElementById('colour').value;
  var textVal = document.getElementById('text').value;
  var text = document.createTextNode(count + "-" + textVal);

  box.className = "box";
  box.style.backgroundColor = colourVal;

  document.getElementsByClassName('container')[0].appendChild(box);
  document.getElementsByClassName('box')[count].appendChild(text);

  count++;

};
*/
