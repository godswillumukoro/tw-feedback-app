// you can create React components using classes or hooks
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Form from "./components/Form";
import Footer from "./components/Footer";
import About from "./pages/About";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Form />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
        {/* <h1>Twinwaters, Lagos</h1>
    <p>The best leisure and dining experience</p> */}
      </Router>
    </FeedbackProvider>
  );
}

export default App;
