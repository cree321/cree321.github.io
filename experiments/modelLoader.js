const input = document.getElementById("file");
const reader = new FileReader();

input.addEventListener("change", (e) => {
  reader.readAsText(input.files[0]);
})
reader.onload = (e) => {
  console.log(reader.result);
}
