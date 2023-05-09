// you can create React components using classes or hooks
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Form from "./components/Form";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Sure you wanna delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <Form handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
      {/* <h1>Twinwaters, Lagos</h1>
      <p>The best leisure and dining experience</p> */}
    </>
  );
}

export default App;
