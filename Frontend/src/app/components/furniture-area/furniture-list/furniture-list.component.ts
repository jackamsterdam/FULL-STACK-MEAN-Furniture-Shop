import { NotifyService } from './../../../services/notify.service';
import { FurnitureService } from './../../../services/furniture.service';
import { Component, OnInit } from '@angular/core';
import { TypeModel } from 'src/app/models/type.model';
import { FurnitureModel } from 'src/app/models/furniture.model';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrls: ['./furniture-list.component.scss']
})
export class FurnitureListComponent implements OnInit {
  types: TypeModel[]
  furniture: FurnitureModel[]
  constructor(private furnitureService: FurnitureService, private notify: NotifyService) { }

  async ngOnInit() {
    try {
      this.types = await this.furnitureService.getAllTypes()
    } catch (err: any) {
      this.notify.error(err)
    }
  }

  async getFurniture(event: Event) {
    try {
      const typeId = (event.target as HTMLSelectElement).value
      this.furniture = await this.furnitureService.getFurnitureByType(typeId)
    } catch (err: any) {
      this.notify.error(err)
    }

  }

  async deleteThisFurniture(_id: string) {
try {
  const ok = confirm('Are you sure?')
  if (!ok) return
  await this.furnitureService.deleteFurniture(_id)
  this.notify.success('Furniture has been deleted')
  const indexToDelete = this.furniture.findIndex(f => f._id === _id)
  this.furniture.splice(indexToDelete, 1)
} catch (err: any) {
  this.notify.error(err)
}
  }

}
