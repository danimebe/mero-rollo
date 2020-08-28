import { Component, OnInit } from '@angular/core';

export interface Tile {
	color: string;
	cols: number;
	rows: number;
	text: string;
}

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: [ './hero.component.css' ]
})
export class HeroComponent implements OnInit {
	tiles: Tile[] = [
		{ text: 'Imagen 1', cols: 3, rows: 1, color: 'lightblue' },
		{ text: 'Imagen 2', cols: 1, rows: 2, color: 'lightgreen' },
		{ text: 'Imagen 3', cols: 1, rows: 1, color: 'lightpink' },
		{ text: 'Imagen 4', cols: 2, rows: 1, color: '#DDBDF1' }
	];

	constructor() {}

	ngOnInit(): void {}
}
