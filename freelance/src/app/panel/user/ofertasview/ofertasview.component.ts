import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-ofertasview',
    templateUrl: './ofertasview.component.html',
    styleUrls: ['./ofertasview.component.css']
})
export class OfertasviewComponent implements OnInit {

    constructor(private router: Router) { }

    registrarOferta() {
        console.log('Entra');
        /*if (window.confirm('Desea postularse a esta oferta?')) {
          window.alert('Gracias!');
        }*/
        swal({
            title: "Estas seguro?",
            text: "Seras evaluado junto con otros aspirantes, debes estar pendiente de la comunicación con el dueño del proyecto.",
            icon: "warning",
            buttons: true,
            dangerMode: false,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Te has registrado exitosamente pronto seras notificado!.", {
                        icon: "success",
                    });
                } else {
                    swal("Este no fue pero puedes encontrar miles de proyectos que se adecuen a tu conocimiento.");
                    this.router.navigate(['/portal']);
                }
            });
    }

    salir() {
        localStorage.removeItem('login');
        localStorage.removeItem('userIdC');
        this.router.navigate(['/']);
    }

    ngOnInit() {
    }

}
