import "./App.css";
import Layout from "./Layout";
import KnowledgeBase from "./modules/KnowledageBase";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/knowledge-base" element={<KnowledgeBase />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
