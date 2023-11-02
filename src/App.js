import "./styles.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
        <Footer />
      </div>
    </div>
  );
}
