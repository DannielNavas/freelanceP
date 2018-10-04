import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-profesional',
    templateUrl: './profesional.component.html',
    styleUrls: ['./profesional.component.css']
})
export class ProfesionalComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $(document).ready(function () {
            $('.collapsible').collapsible();
        });
    }

}
