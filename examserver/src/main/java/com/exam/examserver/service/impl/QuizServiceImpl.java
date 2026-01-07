package com.exam.examserver.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.examserver.model.exam.Quiz;
import com.exam.examserver.service.QuizService;

@Service
public class QuizServiceImpl implements QuizService {

    @Autowired
    private com.exam.examserver.repo.QuizRepository quizRepository;

    @Override
    public Quiz addQuiz(Quiz quiz) {
        return this.quizRepository.save(quiz);
    }

    @Override
    public Quiz updateQuiz(Quiz quiz) {
        return this.quizRepository.save(quiz);
    }

    @Override
    public Set<Quiz> getQuizzes() {
       return new java.util.LinkedHashSet<>(this.quizRepository.findAll());}


    @Override
    public Quiz getQuiz(Long quizId) {
        return this.quizRepository.findById(quizId).get();
    }

   @Override
public void deleteQuiz(Long quizId) {
    quizRepository.deleteById(quizId);
}

}
