import Header from "./components/Header";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Achievements from "./components/Achievments";
function App() {
  return (
    <div className="mx-4 flex max-w-[1200px] flex-col gap-2 sm:mx-auto sm:px-2">
      <Header />
      <About />
      <Expertise />
      <Achievements />
    </div>
  );
}

export default App;
