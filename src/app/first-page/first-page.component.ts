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

    // router.events
    // .subscribe((event: NavigationStart) => {
    //   if (event.navigationTrigger === 'popstate') {
    //     // Perform actions
    //     console.log('back');
    //   }
    // });

    router.events.pipe(
      map((event: NavigationStart) => {
      if (event.navigationTrigger === 'popstate') {
            // Perform actions
            return 'back'
          }
        })

        
    ).subscribe(x => console.log(x) );


    // router.events.pipe(map(event : NavigationStart) => {
    //   if (event.navigationTrigger === 'popstate') {
    //     // Perform actions
    //     return 'back'




    // .subscribe((event: NavigationStart) => {
    //   if (event.navigationTrigger === 'popstate') {
    //     // Perform actions
    //     console.log('back');
    //   }
    // });

  }




  ngOnInit() {

    this.countArray = Array(100).fill(0).map((x,i)=>i);
    // this.route.queryParams
    //   .subscribe((params) => {


    //     this.countArray = Array(100).fill(0).map((x,i)=>i);
    //   });

  }


}
