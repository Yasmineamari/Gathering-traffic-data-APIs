import { Category } from '../models/Category';
import { CategoryService } from '../services/category.service';
import { Component, OnInit } from '@angular/core';
import {PreloaderService} from "../services/PreloaderService";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../assets/css/bootstrap.min.css'],
})
export class HeaderComponent implements OnInit {
  loading$ = this.preloader.loading$;
  constructor(private cs: CategoryService,  private preloader: PreloaderService) {}

  categorys: Category[] = [];
  token: string;

  ngOnInit(): void {
    this.cs.getAllCategorysFromDB().subscribe((res) => {
      this.categorys = res;
    });
    this.token = this.readLocalStorageValue('token');
  }

  readLocalStorageValue(key: string): string {
    return localStorage.getItem(key);
  }
}
