import { FurnitureService } from './../../../services/furniture.service';
import { NotifyService } from './../../../services/notify.service';
import { Component, OnInit } from '@angular/core';
import { FurnitureModel } from 'src/app/models/furniture.model';
import { TypeModel } from 'src/app/models/type.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-furniture',
  templateUrl: './add-furniture.component.html',
  styleUrls: ['./add-furniture.component.scss']
})
export class AddFurnitureComponent implements OnInit {
  furniture = new FurnitureModel() //for 2 way-binding
  types: TypeModel[]
  constructor(private notify: NotifyService, private router: Router, private furnitureService: FurnitureService) { }

  async ngOnInit() {
    try {
      this.types = await this.furnitureService.getAllTypes()
    } catch (err: any) {
      this.notify.error(err)
    }
  }

  async add() {
    try {
      await this.furnitureService.addFurniture(this.furniture)
      this.notify.success('Furniture has been added')
      this.router.navigateByUrl('/furniture-list')
    } catch (err: any) {
      this.notify.error(err)
    }
  }

}
