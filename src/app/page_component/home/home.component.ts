import { Component, OnInit } from '@angular/core';
import { MusicalEventService } from 'src/app/services/musical-event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _musicalEventService: MusicalEventService) { }
  public cardArray
  cardData = {
    title: 'Coachella',
    img: '',
    buttonType: 'default',
    date: 'April 11, 2011',
    location: {
      address: 'Empire Polo Fields',
      cityState: 'Empire Polo Fields'
    },
    whoElseThere: [
      { name: 'Mark', img: '' },
      { name: 'Kevin', img: '' },
      { name: 'Jim', img: '' },
      { name: 'Alan', img: '' },
      { name: 'Bob', img: '' },
      { name: 'Tim', img: '' }
    ]
  };
  ngOnInit() {
    setTimeout(()=>{
    this._musicalEventService.getEvents().subscribe(data => {
      this.cardArray = data;
    });
    },1000);
  }

}
