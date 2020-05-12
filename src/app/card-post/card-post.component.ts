import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {
  @Input() currentPost:any;
  constructor() { }

  ngOnInit(): void {
  }

}
