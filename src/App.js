import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";

const App = () => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  const deleteFeedbackById = (id) => {
    if (window.confirm("Are you sure you want to delete the feedback?"))
      setFeedbacks((items) => items.filter((item) => item.id !== id));
  };
  return (
    <>
      <Header />
      <FeedbackStats feedbacks={feedbacks} />
      <FeedbackList
        feedbacks={feedbacks}
        deleteFeedbackById={deleteFeedbackById}
      />
    </>
  );
};

export default App;
