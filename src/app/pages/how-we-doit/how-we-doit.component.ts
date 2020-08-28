import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-how-we-doit',
	templateUrl: './how-we-doit.component.html',
	styleUrls: [ './how-we-doit.component.css' ]
})
export class HowWeDoitComponent implements OnInit {
	text: String = `TECNICA TAILANDESA
  La técnica de helado en rollo o helado a la plancha es originaria de Tailandia; siendo esta
  una técnica artesanal Tailandesa callejera, llega a Latinoamérica como el boom del helado,
  mostrando una forma diferente de disfrutar un helado, en cuantos a su forma de
  presentación y sabor.
  En dicha técnica con la cual se elaboran los rollos de helados se emplea una plancha que
  congela en un promedio de -16°C, temperatura en la cual se vierte nuestra base de helado
  con los ingredientes o sabores que elegiste, se trituran con ayuda de un par de espátulas
  combinando todos los sabores e integrándolo con la base de helado empleada.
  Por consiguiente, se esparcen en la plancha y cuando este en el punto perfecto de
  congelación comenzamos a enrollar uno por uno los rollos de helado con ayuda de una de
  las espátulas, asi queda listo para servir los rollos de helado, acompañándolos de salsas y
  toppings y disfrutar a nuestros mejor estilo.`;

	constructor() {}

	ngOnInit(): void {}
}
