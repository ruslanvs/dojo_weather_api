console.log ( "******** sanjose.component.ts ********" );

import { Component, OnInit } from '@angular/core';

import { HttpService } from "./../http.service"

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

  main = {};
  name: string;

  constructor(
    private _httpService: HttpService
  ){}

  ngOnInit() {
    this.get_sanjose();
  }

  get_sanjose(){
    let observable = this._httpService.get_sanjose();
    observable.subscribe( data => {
      this.main = data["main"];
      this.name = data["name"];
      console.log( "Got San Jose:", data );
    })
  }

}