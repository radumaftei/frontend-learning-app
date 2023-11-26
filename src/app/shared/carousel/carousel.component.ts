import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ArticlesService } from '../../services/articles.service';
import { Article, ArticleItems } from '../../models/article.model';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit, OnChanges {
  @Input() topicName: string = '';
  autoplayInterval: number = 3000;
  responsiveOptions: any[] | undefined;
  articles: ArticleItems[] | [] = [];
  articlesByTopic: ArticleItems[] | [] = [];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    this.articlesService
      .getArticles()
      .subscribe((el: Article) => (this.articles = el.items.map((article: ArticleItems) => article)));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['topicName'] && !changes['topicName'].firstChange) {
      this.articlesByTopic = this.articlesService.getListOfArticlesByTopicName(this.topicName, this.articles);
    }
  }

  isCarouselOpen(): boolean {
    return !!this.articlesByTopic.length;
  }
}
