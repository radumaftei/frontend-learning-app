import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideMenuComponent } from '../aside-menu/aside-menu.component';
import { SubtopicsListComponent } from '../subtopics-list/subtopics-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AsideMenuComponent, SubtopicsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  topicName: string = '';

  getTopicName(event: string) {
    this.topicName = event;
  }
}
