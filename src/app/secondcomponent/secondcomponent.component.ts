import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrls: ['./secondcomponent.component.css']
})
export class SecondcomponentComponent implements OnInit {
  name = "Sofia"
  constructor() {}

  ngOnInit(): void {
    console.log(`Hello, I'm ${this.name}`)
  }

}

export default SecondcomponentComponent
