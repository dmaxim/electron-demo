let readitClose = document.createElement("div");
readitClose.innerText = "Done";

readitClose.style.position = "fixed";
readitClose.style.bottom = "15px";
readitClose.style.right = "15px";
readitClose.style.padding = "5px 10px";
readitClose.style.fontSize = "20px";
readitClose.style.fontWeight = "bold";
readitClose.style.backgroundColor = "dodgerblue";
readitClose.style.color = "white";
readitClose.style.borderRadius = "5px";
readitClose.style.cursor = "pointer";
readitClose.style.boxShadow = "2px 2px 2px rgba(0, 0, 0, 0.2)";
readitClose.style.zIndex = "9999";

document.getElementsByTagName("body")[0].append(readitClose);
