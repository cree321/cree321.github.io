const input = document.getElementById("file");
const reader = new FileReader();

input.addEventListener("change", (e) => {
  reader.readAsDataURL(input.files[0]);
})
reader.onload = (e) => {
  reader.result
}
