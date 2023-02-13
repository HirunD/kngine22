import "./App.css";
import Home from "./Pages/Home";
import Test from "./Pages/Test";
// import About from "./Pages/about";
// import News from "./Pages/news";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Contact from "./Pages/contact";


function App() {
  useEffect(() => {
    const onScroll = (event) => {
      if (event.target.scrollingElement.scrollTop > 30) {
        AOS.init({
          duration: 1000,
        });
      } else {
        console.log("less than ");
      }
    };
    document.addEventListener("scroll", onScroll);
  });
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="editor" element={<Editorpanel />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
