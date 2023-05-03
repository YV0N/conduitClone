import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mc-tag-article',
  templateUrl: './tagFeed.component.html',
  styleUrls: ['./tagFeed.component.scss'],
})
export class TagFeedComponent implements OnInit {
  tagName: string;
  apiUrl: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tagName = this.route.snapshot.paramMap.get('slug');
    console.log('tagName', this.tagName);
    this.apiUrl = `/articles?tag=${this.tagName}`;
  }
}
