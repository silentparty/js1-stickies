// function Person(colour,message,number) {
//   this.noteColour = noteColour;
//   this.noteMessage = noteMessage;
//   this.noteNumber = noteNumber;
// }
//
// var text = function(noteText) {
//   this.text = noteText;
// }



// var colour = document.getElementById('colour').value;
// var message = document.getElementById('text').value;
//
// function notes() {
//   var notes = {}
//   return {
//     makeNote: function(noteColour, noteMessage) {
//       var box = document.createElement("p");
//       // var textNode = document.createTextNode((newCount + 1) +" - " + noteMessage);
//       var textNode = document.createTextNode(noteMessage);
//       box.className = "box";
//       box.style.backgroundColor = noteColour;
//       box.appendChild(textNode);
//       document.getElementsByClassName('container')[0].appendChild(box);
//     }
//   }
// }
//
// document.getElementById('make-sticky').onclick = notes.makeNote(colour, message);

(function () {
  var count = 0;

  function setupNote() {

    var colour = document.getElementById('colour').value;
    var message = document.getElementById('text').value;
    var newCount = count++;

    function makeNote(noteColour, noteMessage) {
      var box = document.createElement("p");
      var textNode = document.createTextNode((newCount + 1) +" - " + noteMessage);
      box.className = "box";
      box.style.backgroundColor = noteColour;
      box.appendChild(textNode);
      document.getElementsByClassName('container')[0].appendChild(box);
    }
    makeNote(colour, message);
  }
  document.getElementById('make-sticky').onclick = setupNote;
})();

/*
// Something a little more modular. We're now freed of the button and can invoke makeNote however we wish.
// Also got rid of that nasty global variable. Ooops.

function makeNote() {
  // Get an array of elements matching the selector
    var count = document.getElementsByClassName('box').length;
    // Create the necessary elements.
    var box = document.createElement("p");
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
    box.appendChild(textNode);

    // Self explanatory
    document.getElementsByClassName('container')[0].appendChild(box);

    // Insert the textNode into the current .box element (we know it's the current element because we've counted how many .box elements there are using count, then used count to select the index of the current element)

}

document.getElementById('make-sticky').onclick = makeNote; // Make the note



/*
// Something a little more modular. We're now freed of the button and can invoke makeNote however we wish.
// Also got rid of that nasty global variable. Ooops.

var count = 0;

function makeNote(count) {

    (function (noteCount) {

      // Create the necessary elements.
      var box = document.createElement("p");
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
      box.appendChild(textNode);

      // Self explanatory
      document.getElementsByClassName('container')[0].appendChild(box);
      noteCount++;
      return;
    })
    count = noteCount;
}

document.getElementById('make-sticky').onclick = makeNote; // Make the note
*/
