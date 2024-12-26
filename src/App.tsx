import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import Navbar from "./hooks/Navbar";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navbar />}
        >
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/about"
            element={<AboutUs />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
