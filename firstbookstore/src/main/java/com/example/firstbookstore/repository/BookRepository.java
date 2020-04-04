package com.example.firstbookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.firstbookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {
	

}
