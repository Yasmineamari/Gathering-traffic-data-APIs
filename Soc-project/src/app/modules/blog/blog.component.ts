import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/Article';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles = new Array(Article);
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`;
  DialogAnimationsExampleDialog: string;
  enterAnimationDuration = [];
  exitAnimationDuration = [];
  constructor(public dialog: MatDialog) { }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    /*this.dialog.open(
      //this.DialogAnimationsExampleDialog, {
      //width: '250px',
    //  enterAnimationDuration,
      //exitAnimationDuration,
   // }
    );*/
  }

  ngOnInit(): void {
    /*this.getAllArticlesFromDB().subscribe((res) => {
      this.articles = res;
      console.log(res);
    });
  */
  }
}
