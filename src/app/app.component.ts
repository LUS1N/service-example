import {Component, OnInit} from '@angular/core';
import {CommunicateService} from "./communicate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app works!';


  constructor(private communicateService: CommunicateService) {
  }

  ngOnInit(): void {
    this.communicateService.stringCreated.subscribe(event => {
      console.log(event);
    });
  }
}
