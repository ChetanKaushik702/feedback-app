import { v4 as uuidv4 } from "uuid";
import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Rating from "./Rating";
import FeedbackContext from "./FeedbackContext";
const FeedbackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedbackById } =
    useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (feedbackEdit.edit) {
      const { item: feedback } = feedbackEdit;
      setText(feedback.text);
      setRating(feedback.rating);
      setMessage(null);
      setBtnDisabled(false);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text.trim().length < 10) {
      setMessage("Text must be atleast 10 characters");
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const feedback = {
        text,
        id: feedbackEdit.edit ? feedbackEdit.item.id : uuidv4(),
        rating,
      };
      if (feedbackEdit.edit) {
        updateFeedbackById(feedback);
      } else {
        addFeedback(feedback);
      }
      setText("");
      setBtnDisabled(true);
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <Rating select={setRating} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            Send
          </Button>
          {message && <div className="message">{message}</div>}
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
