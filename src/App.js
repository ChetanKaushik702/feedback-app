import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

const App = () => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  const deleteFeedbackById = (id) => {
    setFeedbacks((items) => items.filter((item) => item.id !== id));
  };
  return (
    <>
      <Header />
      <FeedbackList
        feedbacks={feedbacks}
        deleteFeedbackById={deleteFeedbackById}
      />
    </>
  );
};

export default App;
