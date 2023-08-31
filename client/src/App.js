import logo from "./logo.svg";
import Navigation from "./routes/navbar/Navbar";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <div>
      <Navigation />
      <h1>Welcome</h1>
    </div>
  );
}

export default App;
