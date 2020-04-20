import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  currentCategoryId: number;

  // tslint:disable-next-line:variable-name
  constructor(private _bookService: BookService,private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(() => {
      this.listBooks();
    });
  }

  listBooks(){

    const hasCategoryId: boolean = this.activatedRoute.snapshot.paramMap.has('id');

    if (hasCategoryId){
      this.currentCategoryId = +this.activatedRoute.snapshot.paramMap.get('id');
      console.log(this.currentCategoryId);
    }else{
      this.currentCategoryId = 1;
    }


    this._bookService.getBooks(this.currentCategoryId).subscribe(
      data => this.books = data
    )
  }

}
