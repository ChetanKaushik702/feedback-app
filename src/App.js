import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

const App = () => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  const deleteFeedbackById = (id) => {
    if (window.confirm("Are you sure you want to delete the feedback?"))
      setFeedbacks((items) => items.filter((item) => item.id !== id));
  };

  const addFeedback = (feedback) => {
    setFeedbacks((prevFeedbacks) => [feedback, ...prevFeedbacks]);
  };
  return (
    <div className="container">
      <Header />
      <FeedbackForm addFeedback={addFeedback} />
      <FeedbackStats feedbacks={feedbacks} />
      <FeedbackList
        feedbacks={feedbacks}
        deleteFeedbackById={deleteFeedbackById}
      />
    </div>
  );
};

export default App;
