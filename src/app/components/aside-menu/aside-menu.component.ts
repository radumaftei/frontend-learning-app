import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Topic } from '../../models/topic.model';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-aside-menu',
  standalone: true,
  imports: [CommonModule],
  providers: [TopicService],
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.scss',
})

export class AsideMenuComponent implements OnInit {
  protected isOpen: boolean = false;
  protected selectedTopic: string | null = null;
  protected topicsList!: Topic[];

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.topicsList = this.topicService.getListOfTopics();
  }

  handleAsideMenu() {
    this.isOpen = !this.isOpen;
    this.selectedTopic = null;
  }

  selectTopic(topic: string) {
    this.selectedTopic = topic;
  }
}
