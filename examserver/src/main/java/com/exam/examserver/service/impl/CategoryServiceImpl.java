package com.exam.examserver.service.impl;

import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.examserver.model.exam.Category;
import com.exam.examserver.repo.CategoryRepository;
import com.exam.examserver.service.CatetogoryService;

@Service
public class CategoryServiceImpl implements CatetogoryService{

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category addCategory(Category category) {

        return this.categoryRepository.save(category);
        
    }

    @SuppressWarnings("rawtypes")
    @Override
    public Category updateCategory(Category category) {
       return this.categoryRepository.save(category);}

    @Override
    public Set<Category> getCategories() {
        return new LinkedHashSet<>(this.categoryRepository.findAll());
    }

    @Override
    public Category getCategory(Long categoryId) {
        return this.categoryRepository.findById(categoryId).get();
    }

    @Override
    public void deleteCategory(Long categoryId) {
        Category category = new Category();
        category.setCategoryId(categoryId);


        this.categoryRepository.delete(category);
    }



}
