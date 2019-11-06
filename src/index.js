import createHeader from "./components/header";
import createRoot from "./components/root";
import createFooter from "./components/footer";
import createMap from "./components/map";
import createSidebar from "./components/sidebar";
import "./index.scss";

//import "bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";

document.getElementById("header").innerHTML = createHeader();

document.getElementById("root").innerHTML = createRoot();

document.getElementById("footer").innerHTML = createFooter();

createMap();

createSidebar(document.getElementById("root"));
