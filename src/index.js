import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
import math from "mathjs";

document.getElementById("btn1").onclick = e =>
  (e.target.textContent = math.sqrt(parseFloat(e.target.textContent)));

document.getElementById("btn2").onclick = e =>
  (e.target.className = "animated infinite bounce");
