import Header from "./components/Header";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Achievements from "./components/Achievements";
import WorkSamples from "./components/WorkSample";
import Footer from "./components/Footer";
import PropTypes from "prop-types";

function App() {
  return (
    <div className="">
      <WidthBGWrapper className="bg-amber-500">
        <Header />
      </WidthBGWrapper>
      <main>
        <WidthBGWrapper className="bg-amber-400">
          <About />
        </WidthBGWrapper>
        <WidthBGWrapper className="bg-blue-500">
          <Expertise />
        </WidthBGWrapper>
        <WidthBGWrapper>
          <Achievements />
        </WidthBGWrapper>
        <WidthBGWrapper>
          <WorkSamples />
        </WidthBGWrapper>
      </main>
      <WidthBGWrapper>
        <Footer />
      </WidthBGWrapper>
    </div>
  );
}

function WidthBGWrapper(props) {
  return (
    <div className={props.className}>
      <div className="mx-4 max-w-[1200px] sm:mx-auto sm:px-2">
        {props.children}
      </div>
    </div>
  );
}

WidthBGWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object.isRequired,
};
export default App;
