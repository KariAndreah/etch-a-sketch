var container = document.getElementById("container");
var submit = document.getElementById("submit");
function createGrid(amount) {
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${amount}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${amount}, 1fr)`;
  container.style.height = "500px";
  container.style.width = "500px";
  container.style.border = "lightgray solid 0.5px";
  container.style.margin = "auto";
  const area = amount * amount;
  for (var i = 1; i <= area; i++) {
    let content = document.createElement("div");
    content.className = "content";
    container.appendChild(content);
    submit.addEventListener("click", function() {
      content.style.backgroundColor = "white";
    });
    content.addEventListener("mouseover", function() {
      content.style.backgroundColor = "grey";
    });
  }
}
function choiceAmount() {
  var x = document.getElementById("myText").value;
  console.log(Number(x));
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createGrid(x);
}

createGrid(16);
