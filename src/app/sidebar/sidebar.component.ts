import { Component, OnInit } from '@angular/core';
import { TopicService } from '../service/topic.service';
import { Topic } from '../models/topic';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [TopicService]

})
export class SidebarComponent implements OnInit {
  public isCollapsed = false;
  topics: Topic[];

  constructor(private topicService: TopicService) {
    this.topics = this.topicService.getTopics();
  }

  addTopic() {
    this.topicService.addTopic(new Topic('New topic', 'sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud', `https://picsum.photos/900/500?random&t=${Math.random()}`)
    );
  }

  ngOnInit() {
  }

}
