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


/*

document.getElementById('make-sticky').onclick = function() {

  var box = document.createElement("box");
  box.className = "box";
  document.getElementsByClassName('container')[0].appendChild(box);
};


*/
