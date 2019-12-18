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
  takeOffEnabled = true;

  positionCheck(height, width) {
    if(height <= 10000 || height >= 330000 ||
      width < 0 || width >= 250000) {
        this.color = 'orange';
      } else {
        this.color = 'blue';
      }
  }

  handleTakeOff() {
    if(confirm("Confirm that shuttle is ready for takeoff.")) {
      this.message = "Shuttle in flight.";
      this.color = 'blue';
      this.height = 10000;
      this.takeOffEnabled = false;
    }
  }

  handleLanding(rocketImage) {
    alert("The shuttle is landing. Landing gear engaged.");
    this.message = "The shuttle has landed."
    this.color = 'green';
    this.height = 0;
    rocketImage.style.bottom = '0px';
    this.takeOffEnabled = true;
  }

  handleAbort(rocketImage) {
    if(confirm("Do you really want to abort!?")) {
      this.message = "Mission aborted";
      this.color = "red";
      this.height = 0;
      rocketImage.style.bottom = '0px';
      this.takeOffEnabled = true;
    }
    
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    } else if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    } else if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    } else if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
    this.positionCheck(this.height, this.width);
  }
}

