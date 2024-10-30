import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.None // Adicione esta linha

})
export class ContentComponent implements OnInit {
  newsCover: string = '';
  newsTitle: string = '';
  newsContent: SafeHtml = ''; // Alterado para SafeHtml
  private id: string | null = '';

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id == id)[0];
    this.newsCover = result.coverImage;
    this.newsTitle = result.title;
    // Sanitizando o conteúdo HTML
    this.newsContent = this.sanitizer.bypassSecurityTrustHtml(result.newsContent);
  }
}
