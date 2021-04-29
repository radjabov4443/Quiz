import { Component } from '@angular/core';

@Component({
    templateUrl: './question.component.html',
    selector: 'question'
})
export class QuestionComponent {
    question: string | undefined; 
    post() {
        console.log(this.question);
    }
}