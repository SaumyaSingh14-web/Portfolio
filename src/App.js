import "./App.css";
import Buttons from "./components/Buttons";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-slate-900 min-h-screen min-w-full text-center">
        <Title
          title="Hi, I'm Saumya Singh"
          description="A computer science student passionate about programming and development."
        />
        <div className="p-16">
          <Buttons btns="Explore" />
        </div>
      </div>
    </div>
  );
}

export default App;
