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
  constructor() { }


  selectedTypeProject() {
    if (!this.button) {
      this.button = true;
    } else if (this.button) {
      this.button = false;
    }
  }

  ngOnInit() {
  }

}
