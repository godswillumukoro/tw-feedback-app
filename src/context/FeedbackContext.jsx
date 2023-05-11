// import { v4 as uuidv4 } from "uuid";
import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  const [feedbackEditData, setFeedbackEditData] = useState({
    item: {},
    editMode: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // fetch feedback from backend
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&order=desc`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  // add feedback to json server
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    // newFeedback.id = uuidv4();
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  // delete feedback from json server
  const deleteFeedback = async (id) => {
    if (window.confirm("Sure you wanna delete?")) {
      await fetch(`/feedback/${id}`, {
        method: "DELETE",
      });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const editFeedback = (item) => {
    setFeedbackEditData({
      item,
      editMode: true,
    });
  };

  // update feedback from json server
  const updateFeedback = async (id, updatedItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  // pass it to the provider inorder for it to be usuable
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        editFeedback, //function
        isLoading,
        deleteFeedback,
        feedbackEditData, //state that holds the item and the boolean
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
