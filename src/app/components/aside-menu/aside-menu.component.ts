import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Topic } from '../../models/topic.model';

@Component({
  selector: 'app-aside-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.scss',
})
export class AsideMenuComponent {
  isOpen: boolean = false;
  selectedTopic: string | null = null;
  TOPICSLIST: Topic[] = [
    {
      name: 'HTML',
    },
    {
      name: 'CSS/SCSS',
    },
    {
      name: 'JAVASCRIPT',
    },
    {
      name: 'ANGULAR',
    },
    {
      name: 'REACT',
    },
    {
      name: 'JAVA',
    },
  ];

  handleAsideMenu() {
    this.isOpen = !this.isOpen;
    this.selectedTopic = null;
  }

  selectTopic(topic: string) {
    this.selectedTopic = topic;
  }
}
