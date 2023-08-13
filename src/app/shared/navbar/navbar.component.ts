import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() logoutReq = new EventEmitter<boolean>();

  logout() {
    this.logoutReq.emit(false);
  }
}
