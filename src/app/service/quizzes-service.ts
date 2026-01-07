import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root',
})
export class QuizzesService {

  constructor(private http: HttpClient) {}

  // 🔹 Get all quizzes
  getAllQuizzes(): Observable<any> {
    return this.http.get(`${baseUrl}/quiz/`);
  }

  // 🔹 Get quizzes by category
  getQuizzesByCategory(categoryId: number): Observable<any> {
    return this.http.get(`${baseUrl}/quiz/category/${categoryId}`);
  }

  // 🔹 Add quiz
  addQuiz(quiz: any): Observable<any> {
    return this.http.post(`${baseUrl}/quiz/`, quiz);
  }

  // 🔹 Update quiz
  updateQuiz(quiz: any): Observable<any> {
    return this.http.put(`${baseUrl}/quiz/`, quiz);
  }

  // 🔹 Delete quiz
  deleteQuiz(qId: number): Observable<any> {
    return this.http.delete(`${baseUrl}/quiz/${qId}`);
  }

  // 🔹 Get single quiz
  getQuiz(qId: number): Observable<any> {
    return this.http.get(`${baseUrl}/quiz/${qId}`);
  }
}
