import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Customer1', weight: 1, symbol: '75' },
  { position: 2, name: 'Customer1', weight: 4, symbol: '55' },
  { position: 3, name: 'Customer1', weight: 6, symbol: '20' },
  { position: 4, name: 'Customer1', weight: 9, symbol: '12' },
  { position: 5, name: 'Customer1', weight: 10, symbol: '74' },
  { position: 6, name: 'Customer1', weight: 12, symbol: '4' },
  { position: 7, name: 'Customer1', weight: 14, symbol: '5' },
  { position: 8, name: 'Customer1', weight: 15, symbol: '85' },
  { position: 9, name: 'Customer1', weight: 18, symbol: '89' },
  { position: 10, name: 'Customer1', weight: 20, symbol: '65' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {/*
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
*/
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
