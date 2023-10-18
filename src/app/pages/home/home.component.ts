import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';


interface Post {
  // id: number;
  // userId: number;
  // body: string;
  category: string;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  posts: Post[] = [];
  errorMessage!: string;

  constructor(private data_service: DataService) {}

  ngOnInit() {
    this.data_service.getAllPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
        console.log(this.posts);
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }



}

