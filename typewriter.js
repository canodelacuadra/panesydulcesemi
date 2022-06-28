// set up text to print, each item in array is new line
var aText = new Array(
  `<p>Trabajamos durante la noche para ofrecerte lo mejor del día</p>
        <p>
          Nuestros panes son elaborados de forma tradicional, como los de toda
          la vida
        </p>
        <p>Ninguno de nuestros panes ha sufrido procesos de congelación</p>
        <p>Un consumo adecuado es esencial en tu salud y nutrición</p>`
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}
//document.querySelector(".slogans").addEventListener("LoadContent", typewriter);

typewriter();
