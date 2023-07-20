import React from "react";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function QuestionAndAnswer(props) {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <>
      <div className="article-question">
        <article
          className="d-flex align-items-center justify-content-between"
          onClick={() => setIsShowing(!isShowing)}
        >
          <h2 className={`${isShowing && "bold"}`}>{props.question}</h2>
          {isShowing ? (
            <FaChevronUp className="icon" />
          ) : (
            <FaChevronDown className="icon" />
          )}
        </article>
        {isShowing && <p>{props.answer}</p>}
      </div>
    </>
  );
}
