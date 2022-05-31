import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FurnitureModel } from 'src/app/models/furniture.model';

@Component({
  selector: 'app-furniture-card',
  templateUrl: './furniture-card.component.html',
  styleUrls: ['./furniture-card.component.scss']
})
export class FurnitureCardComponent  {
@Input()
furniture: FurnitureModel

@Output()
deleteMe = new EventEmitter<string>()
 
deleteFurniture(_id: string) {
 this.deleteMe.emit(_id)
}


}
