package com.example.firstbookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.firstbookstore.entity.BookCategory;

public interface BookCategoryRepository extends JpaRepository<BookCategory, Integer>{
	

}
