import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-news-card',
	templateUrl: './news-card.component.html',
	styleUrls: ['./news-card.component.css'],
})
export class NewsCardComponent {
	@Input()
	id: string = '0';
	@Input()
	newsImage: string = '';
	@Input()
	newsDate: string = '';
	@Input()
	newsDescription: string = '';
	@Input()
	newsSubtitle: string = '';
}
