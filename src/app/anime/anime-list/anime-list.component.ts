import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent {
  @Input() animes: any[] = [];

  ngOnChanges(changes: SimpleChanges): void{
    this.currentAnimesLength = changes['animes'].currentValue.length;
    console.log(changes);
  }

  showedIndex: number = 3;
  currentAnimesLength: number = 0;
  isLoading: boolean = false
  refresh(): void{
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.showedIndex  = this.currentAnimesLength;
    }, 1000);
  }
}
