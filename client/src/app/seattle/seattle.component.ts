console.log( "******** seattle.component.ts ********" );

import { Component, OnInit } from '@angular/core';

import { HttpService } from "./../http.service"

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  main = {};
  name: string;
  
  constructor(
    private _httpService: HttpService
  ){}

  ngOnInit() {
    this.get_seattle();
  }

  get_seattle(){
    let observable = this._httpService.get_seattle();
    observable.subscribe( data => {
      this.main = data["main"];
      this.name = data["name"];
      console.log( "got Seattle", data );
    })
  }

}
