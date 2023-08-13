import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin: boolean = false;

  getLogin(value: boolean): void{
    this.isLogin = value;
  }
  handleLogoutReq(value: boolean) {
    this.isLogin = value;
  }


  animes: any[] = [];

  getAnime(anime: any) {
    this.animes = [...anime];
  }
}
