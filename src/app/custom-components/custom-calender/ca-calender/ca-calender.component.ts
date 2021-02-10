import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

@Component({
  selector: 'app-ca-calender',
  templateUrl: './ca-calender.component.html',
  styleUrls: ['./ca-calender.component.scss'],
})
export class CaCalenderComponent implements OnInit {

  @ViewChild('fullcalender') fullcalendar: FullCalendarComponent;

  @Input()  style ;
  @Input()  times;
  @Input() title ;

  constructor()
   {
           console.log(this.fullcalendar);

    }

  ngOnInit() {}


  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), 
  
    weekends: true,
    editable: true,
    selectable: true
    
  };


  handleDateClick(arg) {
    console.log('date click! ' + arg.dateStr);
    console.log(arg);
    const api = this.fullcalendar.getApi();
    // this.selDate=arg.dateStr;
   
    console.log("stule",this.style);
    console.log("times",this.times);

    if ( this.style ==="daily" && this.times!=0) 
    {  
       console.log("inside daily") ;
     setTimeout(()=>
     { 
     
      api.removeAllEvents();
      api.render();
      console.log(this.times);
              api.addEvent( 
                 { start: subDays(startOfDay(arg.date), 0),
                end: addDays(arg.date, this.times),
                title: this.title,
                color: "red" });
                // api.render();
             },100);
             api.render();
     }




    if ( this.style==="weekly" && this.times!=0)
   { setTimeout(()=>{ 
      const api = this.fullcalendar.getApi();
      api.removeAllEvents();
      api.render();
              api.addEvent(  {
                
                title: this.title,
                color: "red" ,
                daysOfWeek: [arg.date.getDay()  ],
                allDay:false,
                startRecur: subDays(startOfDay(arg.date), 0),
                endRecur: addDays(arg.date,7*this.times),
               
                
              });
              api.render();
             },500);
   
     

            }

            if ( this.style==="monthly" && this.times!=0)
            { 
              setTimeout(()=>{ 
               const api = this.fullcalendar.getApi();
                       api.removeAllEvents();
                       api.render();
                       api.addEvent(  
                         
                        { 
                         title: this.title,
                         color: "red" ,
                         allDay:false,
                         rrule: {
                          freq: 'monthly',
                          byweekday: [ arg.date.getDay() ],
                          dtstart:addDays(arg.date,1) ,
                          until:  addDays(arg.date,30*this.times)
                        },
                        
                       });


                       api.render();
                      },500);
            
             
              }

  }




  

}
