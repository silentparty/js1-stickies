
// Something a little more modular. We're now freed of the button and can invoke makeNote however we wish.
// Also got rid of that nasty global variable. Ooops.

function makeNote() {
  // Get an array of elements matching the selector
    var boxCount = document.getElementsByClassName('box');
    // Count the elements in boxCount array
    var count = boxCount.length;
    // Create the necessary elements. Turns out I can create multiple objects here :)
    var box = document.createElement("box", "p");
    // Grab the colour value from user input
    var colourVal = document.getElementById('colour').value;
    // Grab the text value from user input
    var textVal = document.getElementById('text').value;
    // Use the current count of box elements to get a number prefix
    var text = document.createTextNode((count + 1) +" - " + textVal);

    // Give the box some class
    box.className = "box";
    // And a background colour
    box.style.backgroundColor = colourVal;

    // Self explanatory
    document.getElementsByClassName('container')[0].appendChild(box);
    // Insert the textNode into the current .box element (we know it's the current element because we've counted how many .box elements there are using count, then used count to select the index of the current element)
    document.getElementsByClassName('box')[count].appendChild(text);

    return;
};

document.getElementById('make-sticky').onclick = makeNote; // Make the note


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
