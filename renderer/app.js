const {ipcRenderer} = require("electron");
const items = require("./items");

// Dom Nodes
let showModalBtn = document.getElementById("show-modal");
let closeModalBtn = document.getElementById("close-modal");
let modal = document.getElementById("modal");
let addItem = document.getElementById("add-item");
let itemUrl = document.getElementById("url");
let search = document.getElementById("search");

search.addEventListener("keyup", (e) => {
  Array.from(document.getElementsByClassName("read-item")).forEach((item) => {
    let hasMatch = item.innerText.toLowerCase().includes(search.value);
    item.style.display = hasMatch ? "flex" : "none";
  });
});

// Navigate item selection with up/down arrows
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    items.changeSelection(e.key);
  }
});

// Disable and enable modal buttons
const toggleModalButtons = () => {
  if (addItem.disabled === true) {
    addItem.disabled = false;
    addItem.style.opacity = 1;
    addItem.style.cursor = "pointer";
    addItem.innerText = "Add Item";
    closeModalBtn.disabled = false;
  } else {
    addItem.disabled = true;
    addItem.style.opacity = 0.5;
    addItem.style.cursor = "not-allowed";
    addItem.innerText = "Adding...";
    closeModalBtn.disabled = true;
  }
};

showModalBtn.addEventListener("click", (e) => {
  modal.style.display = "flex";
  itemUrl.focus();
});

closeModalBtn.addEventListener("click", (e) => {
  modal.style.display = "none";
});

addItem.addEventListener("click", (e) => {
  if (itemUrl.value) {
    ipcRenderer.send("new-item", itemUrl.value);
    toggleModalButtons();
  }
});

// Listen for keyboard submit
itemUrl.addEventListener("keyup", (e) => {
  if (e.key === "Enter") addItem.click();
});

// Listen for new item from main process
ipcRenderer.on("new-item-success", (e, newItem) => {
  items.addItem(newItem, true);
  toggleModalButtons();
  modal.style.display = "none";
  itemUrl.value = "";
});
