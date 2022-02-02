import "./App.css";
import Navbar from "./components/Navbar";
import Tagline from "./components/Tagline";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-slate-900 flex min-h-screen min-w-full ">
        <Tagline tagline="Hi, I'm Saumya Singh" />
      </div>
    </div>
  );
}

export default App;
