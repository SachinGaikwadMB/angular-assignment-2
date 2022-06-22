import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {
  message : string = '';
  
  constructor() { }

  ngOnInit(): void {
    this.showGreetMessage();

  }
  
  /*Method to show Greet Message for the user*/
  
  showGreetMessage(){
    let Datetime = new Date();
    let currentHours = Datetime.getHours();
    
    if(currentHours < 12) {
      this.message = 'Good Morning Sachin !!!';
    } else if(currentHours >= 12 && currentHours <= 17) {
      this.message = 'Good Afternoon Sachin !!!';
    }else if(currentHours >= 17 && currentHours <= 24){
      this.message = 'Good Evening Sachin !!!';
    }

  }

}
