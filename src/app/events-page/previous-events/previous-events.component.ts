import { Component, OnInit } from '@angular/core';
import {EventsInfo} from '../../../model'
@Component({
  selector: 'app-previous-events',
  templateUrl: './previous-events.component.html',
  styleUrls: ['./previous-events.component.scss']
})
export class PreviousEventsComponent implements OnInit {
  events:EventsInfo[]=[];
  selectedEvent:EventsInfo;
  constructor() {
  }

  ngOnInit() {
    this.events=[
      {title:"Resume Critique and Interview Session", hosts:"Randell Persad and Rachel Peters", image:"../../../assets/events/Resume Session.jpg",description:"TBA"},
      {title:"Android Session", hosts:"Justin Ramjattan and Qarun Bissoondial", image:"../../../assets/events/Android Session.png",description:"Introduction to android development where we create a basic to do list application."},
      {title:"Machine Learning Session", hosts:"None", image:"../../../assets/events/Machine Learning Session.png",description:"TBA"},
      {title:"Programming Languages Session", hosts:"None", image:"../../../assets/events/Programming Languaes Session.jpeg",description:"TBA"},
      {title:"Python Session", hosts:"David Orr and Randell Persad", image:"../../../assets/events/Python Session.png",description:"TBA"},
      {title:"Git Session", hosts:"Akil Hosang", image:"../../../assets/events/Git Session.png",description:"TBA"},
      {title:"First Session 2018", hosts:"None", image:"../../../assets/events/First Session 2018.png",description:"TBA"},
      {title:"LAN Party(April 2018)", hosts:"", image:"../../../assets/events/LAN PARTY.jpg",description:"TBA"},

    ];
    this.selectedEvent=this.events[0];
  }
  onSelected(event:EventsInfo):void{
    this.selectedEvent=event;
  }
}