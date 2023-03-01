import Home from "./Pages/Home";
import Souvenir from "./Pages/esouvenir";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Contact from "./Pages/contact";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/esouvenir" element={<Souvenir/>} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="editor" element={<Editorpanel />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
