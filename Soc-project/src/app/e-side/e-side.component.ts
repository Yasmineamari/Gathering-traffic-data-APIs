import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e-side',
  templateUrl: './e-side.component.html',
  styleUrls: ['./e-side.component.css']
})
export class ESideComponent implements OnInit {

  /*colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));
  options = this._formBuilder.group({
    color: this.colorControl,
    fontSize: this.fontSizeControl,
  });

  constructor(private _formBuilder: FormBuilder) { }*/
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  constructor() { }
  ngOnInit(): void {
  }

}
