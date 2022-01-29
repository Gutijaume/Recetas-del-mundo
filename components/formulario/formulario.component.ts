import { dishModel } from './../../src/app/food-container/models/food_divs';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  @Output() sendDish = new EventEmitter<dishModel>()

  public dish: dishModel;


  constructor() {}

  ngOnInit(): void {
    this.dish = {
      name: '',
      img: '',
      description: '',
      ingredients: [],
      flag: '',
    };
  }

  public addNewDish(): void {
    this.sendDish.emit(this.dish);
  }

  public saveName(value: string): void {
    this.dish.name = value;
  }

  public saveFlag(value: string): void {
    if (this.dish){
      this.dish.flag = value;
    }


  }

  public saveImg(value: string): void {
    if (this.dish) {
      this.dish.img = value;
    }
  }

  // public saveIngredients(value: string): void {
  //   if (this.dish) {
  //     this.dish.ingredients = value;
  //   }
  // }

  public saveDescription(value: string): void {
    if (this.dish) {
      this.dish.description = value;

    }
  }


}
