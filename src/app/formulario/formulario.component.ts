import { Component, OnInit } from '@angular/core';
import { dishModel } from '../food-container/models/food_divs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {


  public dishList : dishModel[] = []

  public dishName : string = ""
  public dishImg: string = ""
  public dishDescription: string = ""
  public dishIngredients : string[] = [""]
  public dishFlag: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  addDish (dishName: string, dishFlag: string, dishImg:string, dishIngredients: string[], dishDescription: string){
    let dish: dishModel = {
      name : dishName,
      flag : dishFlag,
      img: dishImg,
      ingredients: dishIngredients,
      description: dishDescription
    }
    this.dishList.push(dish)
  }

}
