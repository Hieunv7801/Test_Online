import { Question } from "./question.js";

export class MultipleChoice extends Question {
  getExact() {
    const valid = document.querySelector(
      `input[name='multiple-choice-${this.id}']:checked`
    )?.value;

    return valid === "true" ? true : false;
  }

  renderContent() {
    return `
    ${this.answers.reduce((total, value) => {
      total += `
        <div class="col-6">
            <div class="custom-control custom-radio">
                <input
                    type="radio"
                    class="custom-control-input"
                    name="multiple-choice-${this.id}"
                    value="${value.exact}"
                    id="question-${this.id}-${value.id}"
                />
                <label class="custom-control-label" for="question-${this.id}-${value.id}"
                    >${value.content}</label
                >
            </div>
        </div>`;

      return total;
    }, ``)}
    `;
  }
}
