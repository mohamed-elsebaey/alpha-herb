"use client";

import { useState } from "react";

interface FaqProps {
  question: string;
  answer: string;
}

const FaqCard: React.FC<FaqProps> = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const onShowAnswerHandler = () => {
    setShowAnswer(() => !showAnswer);
  };
  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8 ">
      <button
        className="faq-btn flex w-full text-left"
        onClick={onShowAnswerHandler}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary">
          <svg
            className={`${showAnswer && "rotate-180"}`}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold  ">{question}</h4>
        </div>
      </button>
      {showAnswer && (
        <div className="faq-content pl-[62px]">
          <p className="py-3 text-base leading-relaxed text-secondary ">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqCard;
