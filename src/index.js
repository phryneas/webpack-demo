import "./override-bootstrap.scss";
import "roboto-npm-webfont/full/style.css";
import "./background.css";

document.getElementById("btn1").onclick = e =>
  require.ensure(["mathjs"], () => {
    const math = require("mathjs");
    e.target.textContent = math.sqrt(parseFloat(e.target.textContent));
  });

document.getElementById("btn2").onclick = e =>
  require.ensure(["animate.css"], () => {
    require("animate.css");
    e.target.className = "animated infinite bounce";
  });
