import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {
    
        constructor(private http: HttpClient) {}

        postQuestion(question: { text: string; }) {
            this.http.post('https://localhost:44384/api/question', question)
            .subscribe(response => {
                console.log(response);
            })
        }

}