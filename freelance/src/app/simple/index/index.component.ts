import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.sidenav').sidenav();
      $('.parallax').parallax();
    });
  }

}
