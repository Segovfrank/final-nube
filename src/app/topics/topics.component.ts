import { Component, OnInit, Input } from '@angular/core';
import {TopicService} from '../service/topic.service';
import {Topic} from '../models/topic';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss'],
  providers: [TopicService]
})
export class TopicsComponent implements OnInit {
  topics: Topic[];
  newsTopics: Topic[];

  constructor(private topicService: TopicService) {
    this.topics = this.topicService.getTopics();
    this.newsTopics = this.topicService.getTopicsNoticias();

  }

  deleteTopic(){
    console.log('Delete');
  }
  ngOnInit() {
  }

}
