import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  takeOffEnabled: boolean = true;

  moveRocket(variable, direction) {
    if (direction === 'right'){
      let movement = parseInt(variable.style.left) + 10 + 'px';
      variable.style.left = movement;
      this.width += 10000;
  }
  if (direction === 'left'){
    let movement = parseInt(variable.style.left) - 10 + 'px';
    variable.style.left = movement;
    this.width -= 10000;
}
if (direction === 'up'){
  let movement = parseInt(variable.style.bottom) + 10 + 'px';
  variable.style.bottom = movement;
  this.height += 10000;
}
if (direction === 'down'){
  let movement = parseInt(variable.style.bottom) - 10 + 'px';
  variable.style.bottom = movement;
  this.height += 10000;
}
  }

  handleTakeOff() {
    let results = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (results) {
      this.color = 'blue';
      this.height = 1000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
    }
  }

  handleLand() {
    let results = window.confirm('Are you sure the shuttle is ready to land?');
    if (results) {
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = 'The shuttle has landed.';
    }
  }
  abort() {
    let results = window.confirm('Are you sure you want to abort the mission?');
    if (results) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'The shuttle has landed.';
    }
  }
}
