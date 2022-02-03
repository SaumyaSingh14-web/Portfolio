import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-slate-900 min-h-screen min-w-full ">
        <Title
          title="Hi, I'm Saumya Singh"
          description="A computer sience student passionate about programming and development."
        />
      </div>
    </div>
  );
}

export default App;
