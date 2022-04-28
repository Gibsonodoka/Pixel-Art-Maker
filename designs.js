const sizePicker = document.getElementById("sizePicker");
// Select input size
let inputHeight = document.getElementById("inputHeight");
let inputWidth = document.getElementById("inputWidth");

// Create color picker
let color = document.getElementById("colorPicker");

const pixelCanvas = document.getElementById("pixelCanvas");

function clearGrid() 
{
     const allRows = document.querySelectorAll("tr");
     allRows.forEach((row) => {
     row.remove();
     });
}
// create grid 
function makeGrid(pam) {
  
  pam.preventDefault();

  // clear  grid function, to clear the grid everytime! 
  clearGrid();

  // height of grid
  const height = inputHeight.value;
  // width of grid
  const width = inputWidth.value;
 // Grid increment based on what theuser selects as width and height (Nested loop)
  for (let i = 1; i <= height; i++) {
  //create row element
    const row = document.createElement("tr");
    
    for (let j = 1; j <= width; j++) {
     //Column element is created
      const column = document.createElement("td");
      
      column.id = "column-i-j";
   // Append column to row element
      row.appendChild(column);
    }
    
   
    //Append row element to table element
    pixelCanvas.appendChild(row);
  }
}

//  call makeGrid() function when user clicks on submit

sizePicker.addEventListener("submit", makeGrid);


pixelCanvas.addEventListener("click", function (pam) {
  pam.target.style.backgroundColor = color.value;
});
