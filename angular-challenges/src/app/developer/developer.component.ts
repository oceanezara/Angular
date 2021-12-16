import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss'],
})
export class DeveloperComponent implements OnInit {
  public developer!: Developer;
  constructor() {}

  ngOnInit(): void {
    this.developer = new Developer(
      'Raubitschek',
      'Océane',
      31,
      'female',
      'Just a random girl who tries to get by on this f.ing planet',
      [
        {
          name: 'english',
          logo: 'https://via.placeholder.com/150',
          site: 'https://en.wikipedia.org/wiki/English_language',
        },
        {
          name: 'finance',
          logo: 'https://via.placeholder.com/150',
          site: 'https://fr.wikipedia.org/wiki/Finance',
        },
      ]
    );
  }
}
