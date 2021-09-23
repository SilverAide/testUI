import { Component, OnInit } from '@angular/core';
import { PostService } from './services/postService/post.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { from, of } from 'rxjs';
import createAuth0Client, { Auth0Client } from '@auth0/auth0-spa-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'help';
  posts: Object[];

  async getAuth0Client(): Promise<Auth0Client> {
      return await createAuth0Client({
        domain: 'dev-fmo9aa35.us.auth0.com',
        client_id: 'Pv1JpQeiYniCehoaIfBMH8NMTjzG7kHm'
      });
  }

  constructor(private postService: PostService, private authService: AuthService){ }

  ngOnInit(): void {
    this.getAuth0Client().then(client =>
      client.getTokenSilently().then(token =>
        this.postService.getAll(token).subscribe(posts =>
          this.posts = posts)
        )
      )
  }

}
