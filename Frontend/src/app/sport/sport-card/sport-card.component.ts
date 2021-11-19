import { Component } from '@angular/core';

@Component({
  selector: 'app-sport-card',

  templateUrl: 'sport-card.component.html',

  styleUrls: ['sport-card.component.css']
})
export class SportCardComponent {

  Sport : any = {
    "Id" : 1,
    "Name" : "Bat",
    "Type" : "House",
    "Price" : 12000

  }

}
