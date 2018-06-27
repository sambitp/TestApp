import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HomeService } from './home.service';
import { DataService } from '../../core/services/data/data.service';


@Component({
  selector: 'app-configuration',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	userId: string;
  constructor( private dataService : DataService) { 
  }
  ngOnInit(): void {
  	console.log(this.dataService);
  	this.userId = this.dataService.getUserId();
console.log('this.dataService.getUserId',this.userId);
  }
}
