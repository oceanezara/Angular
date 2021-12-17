import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss'],
})
export class CreateOnomatopiaComponent implements OnInit {
  @Output() sendOnomatopiaToParent = new EventEmitter<string>();

  createOnomatopia(value: string) {
    this.sendOnomatopiaToParent.emit(value);
  }
  constructor() {}

  ngOnInit(): void {}
}
