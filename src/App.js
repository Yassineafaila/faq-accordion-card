import { useState } from "react";
import React from "react";
import { Questions } from "./components/Question";

import "bootstrap/dist/css/bootstrap.min.css"
import mobile from "./assets/images/illustration-woman-online-mobile.svg"
import desktop from './assets/images/illustration-woman-online-desktop.svg'
import QuestionAndAnswer from "./components/QandA";

function App() {
  const [quests] = useState(Questions);
  return (
    <div className="container bg-light d-lg-flex align-items-center justify-content-lg-between p-3 ">
      <div>
        <picture>
          <source media="(min-width:768px)" srcSet={desktop} />
          <img src={mobile} />
        </picture>
      </div>
      <div>
        <h1 className="text-center text-lg-start">FAQ</h1>
        {quests.map((quest) => (
          <QuestionAndAnswer key={quest.id} question={quest.question} answer={ quest.answer} />
        ))}
      </div>
    </div>
  );
}

export default App;
