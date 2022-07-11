import questions from "../data/questions.json" assert { type: "json" };

export class Question {
  constructor(id, questionType, content, answers) {
    this.id = id;
    this.questionType = questionType;
    this.content = content;
    this.answers = answers;
  }

  renderContent() {}

  render() {
    return `
        <div class="quizSection" id="quizSection-${this.id}">
            <div class="quiz__main">
                <div class="quiz__header">
                    <p>${this.content}:</p>
                </div>
                <div class="quiz__body row">
                  ${this.renderContent()}
                </div>
                <div class="quiz__footer text-center">
                    <span>Question ${this.id} of ${questions.length}</span>
                    <a id="${this.id === questions.length && "result"}" 
                    href="${
                      this.id === questions.length
                        ? "#quizResult"
                        : `#quizSection-${this.id + 1}`
                    }" class="quiz__btn">NEXT</a>
              </div>
            </div>
        </div>
    `;
  }
}
