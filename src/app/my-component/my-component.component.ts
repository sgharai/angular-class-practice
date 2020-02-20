import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  x:string = 'Hello';

  constructor() {

   }

  ngOnInit(): void {
    console.log(this.x)
  }

}
