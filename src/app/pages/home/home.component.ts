import { Component, OnInit } from '@angular/core'; // Importando OnInit
import { ActivatedRoute } from '@angular/router'; // Importando ActivatedRoute
import { dataFake } from '../../data/dataFake';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	// Implementando OnInit
	newsCover: string = '';
	newsTitle: string = '';
	newsContent: string = '';
	private id: string | null = '';

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
		this.setValuesToComponent(this.id);
	}

	setValuesToComponent(id: string | null) {
		const result = dataFake.filter((article) => article.id === id)[0];
		if (result) {
			// Adicionando verificação se result existe
			this.newsCover = result.coverImage;
			this.newsTitle = result.title;
			this.newsContent = result.newsContent;
		}
	}
}
