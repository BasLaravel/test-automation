import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-index',
  templateUrl: './posts-index.component.html',
  styleUrls: ['./posts-index.component.css']
})
export class PostsIndexComponent implements OnInit {
  allPosts;

  // constructor(public apiService: ApiService, public route: ActivatedRoute) {
  //   apiService.routeGetPost('getdrinks').subscribe((res) => {
  //     this.allPosts = res;
  //   });
  //  }

  ngOnInit() {
  }

  // index() {
  //   this.apiService.routeGetPost('getposts').subscribe((res) => {
  //     this.allPosts = res;
  //   });
  // }

}
