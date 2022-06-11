import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

const App = () => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);
  return (
    <>
      <Header />
      <FeedbackList feedbacks={feedbacks} />
    </>
  );
};

export default App;
