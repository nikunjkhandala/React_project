import React,{useState} from "react";
import QuestionList from "./QuestionList";
import quizcss from "/Users/js/Full-Stack/ReactJs_projects/Quiz-App/src/components/Quiz.css";

const Quiz = () => {
  const question = [
    {
      question: "What is React?",
      options: [
        "A CSS Framework",
        "A javaScript for building user interfaces",
        "A database management system",
        "A JavaScript framework",
      ],
      answer: "A javaScript for building user interfaces",
    },
    {
      question: "What is 2+2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "What is React?",
      options: [
        "A CSS Framework",
        "A javaScript for building user interfaces",
        "A database management system",
        "A JavaScript framework",
      ],
      answer: "A javaScript for building user interfaces",
    },
  ];
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const [currentAnser, setCurrentAnser] = useState(null);
    const handleClick = (option) => {
        setCurrentAnser(option)
    }
  return (
    <div>
      <div>
              <QuestionList question={question[currentQuestionIndex].question}
                  options={question[currentQuestionIndex].options}

                  handleClick={handleClick}currentAnser={currentAnser}
              />
              <button>Next Question</button>
      </div>
    </div>
  );
};

export default Quiz;
