
// Something a little more modular. We're now freed of the button and can invoke makeNote however we wish.
// Also got rid of that nasty global variable. Ooops.

function makeNote() {
  // Get an array of elements matching the selector
    var count = document.getElementsByClassName('box').length;
    // Create the necessary elements. Turns out I can create multiple objects here :)
    var box = document.createElement("box", "p");
    // Grab the colour value from user input
    var noteColour = document.getElementById('colour').value;
    // Grab the text value from user input
    var noteMessage = document.getElementById('text').value;
    // Use the current count of box elements to get a number prefix
    var textNode = document.createTextNode((count + 1) +" - " + noteMessage);

    // Give the box some class
    box.className = "box";
    // And a background colour
    box.style.backgroundColor = noteColour;
    
    // Self explanatory
    document.getElementsByClassName('container')[0].appendChild(box);

    // Insert the textNode into the current .box element (we know it's the current element because we've counted how many .box elements there are using count, then used count to select the index of the current element)
    document.getElementsByClassName('box')[count].appendChild(textNode);

}

document.getElementById('make-sticky').onclick = makeNote; // Make the note
