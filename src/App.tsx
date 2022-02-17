import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { LanguageContextProvider } from "./Context/LanguageContextProvider";

function App() {
  return (
    <div>
      <LanguageContextProvider defaultLanguage ="en">
      <BrowserRouter>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/page1">Page 1</Link> | <Link to="/page2">Page 2</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
      </LanguageContextProvider>
    </div>
  );
}

export default App;
