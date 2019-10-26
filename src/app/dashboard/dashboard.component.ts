import { Component, OnInit } from '@angular/core';
import{TopicService} from '../service/topic.service';
import{Topic} from '../models/topic';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [TopicService]
})
export class DashboardComponent implements OnInit {
  topics: Topic[];
  newsTopics: Topic[];

  constructor(private topicService: TopicService) {
    this.topics = this.topicService.getTopics();
    this.newsTopics = this.topicService.getTopicsNoticias();
  }

  ngOnInit() {
  }

}
