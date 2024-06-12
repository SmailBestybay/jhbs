import Header from "./components/Header";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Achievements from "./components/Achievements";
import WorkSamples from "./components/WorkSample";
import Footer from "./components/Footer";
import PropTypes from "prop-types";

function App() {
  return (
    <div className="grid min-h-full grid-rows-[auto_1fr_auto]">
      <Wrapper className="bg-amber-500">
        <Header />
      </Wrapper>
      <main>
        <Wrapper className="bg-amber-400">
          <About />
        </Wrapper>
        <Wrapper className="bg-blue-500">
          <Expertise />
        </Wrapper>
        <Wrapper>
          <Achievements />
        </Wrapper>
        <Wrapper>
          <WorkSamples />
        </Wrapper>
      </main>
      <Wrapper className="bg-red-700">
        <Footer />
      </Wrapper>
    </div>
  );
}

function Wrapper(props) {
  return (
    <div className={props.className}>
      <div className="mx-4 max-w-[1200px] sm:mx-auto sm:px-2">
        {props.children}
      </div>
    </div>
  );
}

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object.isRequired,
};
export default App;
