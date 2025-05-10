import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// import pages
import HomePage from "./pages/HomePage";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}
