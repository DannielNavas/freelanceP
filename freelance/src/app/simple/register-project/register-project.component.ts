import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-project',
  templateUrl: './register-project.component.html',
  styleUrls: ['./register-project.component.css']
})
export class RegisterProjectComponent implements OnInit {
  selectedProject = '0';
  button = false;
  contador = 0;
  scope;
  constructor() { }


  selectedTypeProject() {
    if (!this.button) {
      this.button = true;
      // document.getElementById('frontend').className = "contractus-color";
    } else if (this.button) {
      this.button = false;
      // document.getElementById('frontend').className = "contractus-color-off";
    }
  }

  ngOnInit() {
  }

}
