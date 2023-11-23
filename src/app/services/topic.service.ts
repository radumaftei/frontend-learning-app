import { Injectable } from '@angular/core';
import { SubTopic } from '../models/subtopic.model';
import { Topic } from '../models/topic.model';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  TOPICSLIST: Topic[] = [
    {
      name: 'HTML',
      subtopic: [
        {
          title: 'What is HTML?',
          description:
            'Lorem Ipsum is simply Bogdan dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
          title: 'What is HTML?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys Radu standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
          title: 'What is HTML?',
          description:
            'Lorem Ipsum is simply dummy text of Stefan the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
          title: 'What is HTML?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard Catalin Rauta dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
      ],
    },
    {
      name: 'CSS/SCSS',
      subtopic: [
        {
          title: 'What is CSS/SCSS?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
          title: 'What is Lorem Ipsum?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
          title: 'What is Lorem Ipsum?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
          title: 'What is Lorem Ipsum?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
      ],
    },
    {
      name: 'JAVASCRIPT',
      subtopic: [
        {
          title: 'What is JAVASCRIPT?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
          title: 'What is Lorem Ipsum?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
          title: 'What is Lorem Ipsum?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
          title: 'What is Lorem Ipsum?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
      ],
    },
    {
      name: 'ANGULAR',
      subtopic: [
        {
          title: 'What is ANGULAR?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
          title: 'What is Lorem Ipsum?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
          title: 'What is Lorem Ipsum?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
          title: 'What is Lorem Ipsum?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
      ],
    },
    {
      name: 'REACT',
      subtopic: [
        {
          title: 'What is REACT?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
          title: 'What is Lorem Ipsum?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
          title: 'What is Lorem Ipsum?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
          title: 'What is Lorem Ipsum?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
      ],
    },
    {
      name: 'JAVA',
      subtopic: [
        {
          title: 'What is JAVA?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
          title: 'What is Lorem Ipsum?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
          title: 'What is Lorem Ipsum?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
          title: 'What is Lorem Ipsum?',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
      ],
    },
  ];

  constructor() {}

  getListOfTopics(): Topic[] {
    return this.TOPICSLIST;
  }

  getListOfSubtopicsByTopicName(topic: string): SubTopic[] | undefined {
    return this.TOPICSLIST.filter((el) => el.name === topic)[0]?.subtopic;
  }

  getSubtopicBySearchedValue(
    searchedValue: string,
    topicName: string
  ): SubTopic[] | undefined {
    const listOfSubtopics = this.getListOfSubtopicsByTopicName(topicName);
    return listOfSubtopics?.filter(
      (el) =>
        el.title.toLowerCase().includes(searchedValue) ||
        el.description.toLowerCase().includes(searchedValue) ||
        el.content.toLowerCase().includes(searchedValue)
    );
  }
}
