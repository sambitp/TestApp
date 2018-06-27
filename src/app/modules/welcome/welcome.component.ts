import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { welcomeService } from './welcome.service';
import { DataService } from '../../core/services/data/data.service';


@Component({
  selector: 'app-configuration',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class welcomeComponent implements OnInit {
	userId: string;
  constructor( private dataService : DataService) { 
  }
  ngOnInit(): void {
  	console.log(this.dataService);
  	this.userId = this.dataService.getUserId();
console.log('this.dataService.getUserId',this.userId);
  }
}
