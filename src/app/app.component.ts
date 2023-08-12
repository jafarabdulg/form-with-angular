import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animes: any[] = [];
  getAnime(anime: any) {
    this.animes.push(anime);
  }
}
