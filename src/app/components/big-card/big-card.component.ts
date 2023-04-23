import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-big-card',
	templateUrl: './big-card.component.html',
	styleUrls: [
		'./big-card.component.css',
		'./big-card.component.responsive.css',
	],
})
export class BigCardComponent {
	@Input()
	id: string = '0';
	@Input()
	bigNewsImage: string = '';
	@Input()
	bigNewsDate: string = '';
	@Input()
	bigNewsTitle: string = '';
	@Input()
	bigNewsDesctription: string = '';
}
