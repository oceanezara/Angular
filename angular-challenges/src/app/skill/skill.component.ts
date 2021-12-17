import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  @Input()
  public skill = new Skill(
    'english',
    'https://via.placeholder.com/150',
    'https://en.wikipedia.org/wiki/English_language'
  );
  constructor() {}

  ngOnInit(): void {}
}
