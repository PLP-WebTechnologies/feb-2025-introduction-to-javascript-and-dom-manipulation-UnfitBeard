// Changes text content and style
function changeContent() {
  const text = document.getElementById("dynamic-text");
  text.textContent = "🎉 The text has been updated and styled!";
  text.style.color = "white";
  text.style.backgroundColor = "#007bff";
  text.style.padding = "10px";
  text.style.borderRadius = "5px";
}

// Toggles adding/removing a paragraph element
function toggleElement() {
  const container = document.getElementById("element-container");
  const existing = document.getElementById("dynamic-paragraph");

  if (existing) {
    container.removeChild(existing);
  } else {
    const newPara = document.createElement("p");
    newPara.id = "dynamic-paragraph";
    newPara.textContent = "✨ This element was added dynamically!";
    newPara.style.color = "green";
    container.appendChild(newPara);
  }
}
