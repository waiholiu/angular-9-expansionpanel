import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {


  countArray;

  constructor(private route : ActivatedRoute, router:Router) { 

    this.countArray = Array(100).fill(0).map((x,i)=>i);

  }




  ngOnInit() {

   
  }


}
