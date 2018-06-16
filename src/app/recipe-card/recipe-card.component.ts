import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from '../store/interfaces';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() public recipe: IRecipe;

  constructor() { }

  ngOnInit() {
  }

}
