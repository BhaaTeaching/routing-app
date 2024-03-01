import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) {
    this.activatedRoute.params.subscribe((param : Params) => {
      const id = Number(param['id']);
    });
    this.activatedRoute.queryParams.subscribe((queryParam : Params) => {
      console.log("query param is: ", queryParam['name'])
     });

   }


  ngOnInit(): void {
  }

}
