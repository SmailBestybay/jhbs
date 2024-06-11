import Header from "./components/Header";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Achievements from "./components/Achievements";
import WorkSamples from "./components/WorkSample";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <div className="mx-4 max-w-[1200px] sm:mx-auto sm:px-2">
        <Header />
      </div>
      <main>
        <div className="bg-amber-400">
          <div className="mx-4 max-w-[1200px] sm:mx-auto sm:px-2">
            <About />
          </div>
        </div>
        <div className="bg-blue-500">
          <div className="mx-4 max-w-[1200px] sm:mx-auto sm:px-2">
            <Expertise />
          </div>
        </div>
        <div className="mx-4 max-w-[1200px] sm:mx-auto sm:px-2">
          <Achievements />
        </div>
        <div className="mx-4 max-w-[1200px] sm:mx-auto sm:px-2">
          <WorkSamples />
        </div>
      </main>
      <div className="mx-4 max-w-[1200px] sm:mx-auto sm:px-2">
        <Footer />
      </div>
    </div>
  );
}

export default App;
