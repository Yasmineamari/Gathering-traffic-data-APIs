import { Category } from './../../models/Category';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Article } from 'src/app/models/Article';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  article = {
    _id: '',
    Title: '',
    Description: '',
    image: '',
    AlaUne: '',
    createdAt: '',
    Category: '',
  }

  ArticleForm = new FormGroup({
    Title: new FormControl(null, [Validators.required]),
    Description: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
    AlaUne: new FormControl(null, [Validators.required]),
    createdAt: new FormControl(null, [Validators.required]),
    Category: new FormControl(null, [Validators.required]),
  });

  constructor(private http: HttpClient, private auth: ArticleService, private router: Router) { }
  addArticle(article) {
    Swal.fire(
      'Good job!',
      'Your Article has been Published !',
      'success'
    )

    this.router.navigate(['/default/Blog']);
  }
  ngOnInit() {
  }



}

