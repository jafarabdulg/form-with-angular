import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.css']
})
export class AnimeFormComponent {
  animeForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]),
    cover: new FormControl(null, [Validators.required, Validators.minLength(10)])
  });

  @Output() sendAnime = new EventEmitter<any>();

  emitData(data: any): void{
    this.sendAnime.emit(data)
  }

  form(property: string): FormGroup{
    return this.animeForm.get(property) as FormGroup;
  }
}
