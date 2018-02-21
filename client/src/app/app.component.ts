console.log( "******** app.component.ts ********" );

import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Router
} from "@angular/router";

import { HttpService } from "./http.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title = 'Dojo Weather Station';
  
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){
    // this._route.params.subscribe( ( params: Params ) => console.log( params["id"] ) ); //>> this one comes out as undefined
  }

  doHome(){
    this._router.navigate( ["/home"] );
  }

}



