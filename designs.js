const sizePicker = document.getElementById("sizePicker");
// Select input size
let inputHeight = document.getElementById("inputHeight");
let inputWidth = document.getElementById("inputWidth");

// color picker
let color = document.getElementById("colorPicker");

const pixelCanvas = document.getElementById("pixelCanvas");

function clearGrid() 
{
     const allRows = document.querySelectorAll("tr");
     allRows.forEach((row) => {
     row.remove();
     });
}

function makeGrid(pam) {
  // Your code goes here!
  pam.preventDefault();

  // ResetUSER  grid 
  clearGrid();

  
  const height = inputHeight.value;
  
  const width = inputWidth.value;

  for (let i = 1; i <= height; i++) {
  
    const row = document.createElement("tr");
    
    for (let j = 1; j <= width; j++) {
     
      const column = document.createElement("td");
      
      column.id = "column-i-j";
   
      row.appendChild(column);
    }
    
   
    
    pixelCanvas.appendChild(row);
  }
}

//  call makeGrid() function

sizePicker.addEventListener("submit", makeGrid);


pixelCanvas.addEventListener("click", function (pam) {
  pam.target.style.backgroundColor = color.value;
});
