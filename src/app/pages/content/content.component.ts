import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css'],
})
export class ContentComponent {
	newsCover: string = '';
	newsTitle: string = '';
	newsContent: string = '';
	private id: string | null = '';

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id)
  }

	setValuesToComponent(id: string | null) {
		const result = dataFake.filter((article) => article.id == id)[0]
		this.newsCover = result.coverImage
		this.newsTitle = result.title
		this.newsContent = result.newsContent
	}
}
