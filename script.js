// Get references
const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");

// Event listener: updates count as user types
textInput.addEventListener("input", () => {
  charCount.textContent = textInput.value.length;
});
