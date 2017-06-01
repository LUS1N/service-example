import {Component, OnInit} from '@angular/core';
import {CommunicateService} from "../communicate.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  constructor(private communicateService: CommunicateService) {
  }

  onClick() {
    for (var i = 0; i < 10; i++)
      this.communicateService.sendNewString(`i is ${i}`); // string interpolation
  }
}
