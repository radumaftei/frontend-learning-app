import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubTopic } from '../../../models/subtopic.model';

@Component({
  selector: 'app-subtopic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subtopic.component.html',
  styleUrl: './subtopic.component.scss'
})
export class SubtopicComponent {
  @Input() subtopicName?: SubTopic;
}
