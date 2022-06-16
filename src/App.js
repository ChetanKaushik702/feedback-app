import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

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
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="container">
                <FeedbackForm addFeedback={addFeedback} />
                <FeedbackStats feedbacks={feedbacks} />
                <FeedbackList
                  feedbacks={feedbacks}
                  deleteFeedbackById={deleteFeedbackById}
                />
              </div>
              <AboutIconLink />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <div className="container">
                <AboutPage />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
