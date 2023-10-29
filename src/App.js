import "./styles.css";
import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Search />
        <Weather />
        <Footer />
      </div>
    </div>
  );
}
