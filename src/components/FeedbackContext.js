import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      text: "This item is from context",
      rating: 10,
    },
  ]);

  const deleteFeedbackById = (id) => {
    if (window.confirm("Are you sure you want to delete the feedback?"))
      setFeedbacks((items) => items.filter((item) => item.id !== id));
  };

  const addFeedback = (feedback) => {
    setFeedbacks((prevFeedbacks) => [feedback, ...prevFeedbacks]);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        deleteFeedbackById,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
