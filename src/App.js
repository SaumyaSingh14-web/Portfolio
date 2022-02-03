import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-slate-900 flex min-h-screen min-w-full ">
        <Title title="Hi, I'm Saumya Singh" />
      </div>
    </div>
  );
}

export default App;
