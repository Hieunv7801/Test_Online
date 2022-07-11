import { Question } from "./question.js";

export class FillInBlank extends Question {
  getExact() {
    return (
      document
        .querySelector(`#fill-in-blank-${this.id}`)
        ?.value?.toLowerCase() === this.answers[0].content.toLowerCase()
    );
  }

  renderContent() {
    return `
      <div class="col-6">
        <div class="form-group">
          <label for="">Câu trả lời</label>
          <input type="text" class="form-control" id="fill-in-blank-${this.id}"/>
        </div>
      </div>
    `;
  }
}
