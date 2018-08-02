import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.sidenav').sidenav();
      $('.parallax').parallax();
    });
  }

}
