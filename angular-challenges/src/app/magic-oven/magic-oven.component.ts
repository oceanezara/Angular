import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-magic-oven',
  templateUrl: './magic-oven.component.html',
  styleUrls: ['./magic-oven.component.css'],
})
export class MagicOvenComponent implements OnInit {
  @Input()
  numberOfCookies!: number;

  @Input()
  flour!: number;

  @Input()
  salt!: number;

  @Input()
  sugar!: number;

  @Input()
  egg!: number;

  @Input()
  startCooking!: boolean;

  constructor() {}

  ngOnInit() {}
}
