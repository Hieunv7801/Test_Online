import questions from "../data/questions.json" assert { type: "json" };
import { MultipleChoice } from "../models/multiple-choice.js";
import { FillInBlank } from "../models/fill-in-blank.js";

const getEle = (id) => document.getElementById(id);

const questionInstances = questions.map((ele) => {
  const { id, questionType, content, answers } = ele;

  if (ele.questionType === 1) {
    return new MultipleChoice(id, questionType, content, answers);
  }

  return new FillInBlank(id, questionType, content, answers);
});

const content = questionInstances.reduce((total, value) => {
  total += value.render();

  return total;
}, ``);

getEle("quizList").innerHTML = content;

getEle("result").onclick = () => {
  let correct = 0;
  let incorrect = 0;

  questionInstances.forEach((question) => {
    const isExact = question.getExact();

    if (isExact) {
      correct += 1;
    } else {
      incorrect += 1;
    }
  });

  getEle("correct").innerHTML = correct;
  getEle("incorrect").innerHTML = incorrect;
  getEle("score").innerHTML = (correct * 10) / questions.length;
};
