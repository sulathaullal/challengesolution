import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import rushingdetails from './jsonfiles/rushing.json'
import { MatTableDataSource } from '@angular/material/table';

export interface rushingDetails {
  Player: string;
  team:string;
  position:string;
  attempts:number;
  attemptsPerGame:number;
  yards:string;
  avgYards:number;
  yardsPerGame:number;
  touchDowns:number;
  longestRush:string;
  firstDowns:number;
  firstDownsPercentage:number;
  twentyPlusYards:number;
  fortyPlusYards:number;
  fumbles:number;
}

const JSON_DATA: rushingDetails[] = rushingdetails;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'challengesolution';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  matTableDataSource= new MatTableDataSource(JSON_DATA);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['player', 'team', 'position','attempts','attemptsPerGame','yards','avgYards','yardsPerGame','touchDowns','longestRush','firstDowns','firstDownsPercentage','twentyPlusYards','fortyPlusYards','fumbles'];

  ngOnInit() {
    this.matTableDataSource= new MatTableDataSource(JSON_DATA );
  }

  ngAfterViewInit() {
    this.matTableDataSource.paginator=this.paginator;
    this.matTableDataSource.sort=this.sort;
    this.matTableDataSource.filterPredicate = function(data, filter: string): boolean {
      return data.Player.toLowerCase().includes(filter);
    };
  
  }

  doFilter(value:string){
    this.matTableDataSource.filter=value.trim().toLowerCase();
  }

}
