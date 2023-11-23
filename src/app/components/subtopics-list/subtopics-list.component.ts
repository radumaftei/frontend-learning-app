import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtopicComponent } from './subtopic/subtopic.component';
import { TopicService } from '../../services/topic.service';
import { SubTopic } from '../../models/subtopic.model';
import { SearchSectionComponent } from './search-section/search-section.component';

@Component({
  selector: 'app-subtopics-list',
  standalone: true,
  imports: [CommonModule, SubtopicComponent, SearchSectionComponent],
  providers: [TopicService],
  templateUrl: './subtopics-list.component.html',
  styleUrl: './subtopics-list.component.scss',
})
export class SubtopicsListComponent implements OnChanges {
  @Input() topicName: string = '';
  protected subtopics: SubTopic[] | undefined;

  constructor(private topicService: TopicService) {}

  ngOnChanges(): void {
    this.subtopics = this.topicService.getListOfSubtopicsByTopicName(
      this.topicName
    );
  }
}
