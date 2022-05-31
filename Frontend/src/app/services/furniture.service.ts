import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeModel } from '../models/type.model';
import { environment } from 'src/environments/environment';
import { FurnitureModel } from '../models/furniture.model';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor(private http: HttpClient) { }

  async getAllTypes():Promise<TypeModel[]> {
    const types = await firstValueFrom(this.http.get<TypeModel[]>(environment.typesUrl))
    return types
  }

  async getFurnitureByType(typeId: string):Promise<FurnitureModel[]> {
    const furniture = await firstValueFrom(this.http.get<FurnitureModel[]>(environment.furnitureByTypeUrl + typeId))
    return furniture 
  }

  async addFurniture(furniture: FurnitureModel):Promise<FurnitureModel> {
    const addedFurniture = await firstValueFrom(this.http.post<FurnitureModel>(environment.furnitureUrl, furniture))
    return addedFurniture
  }

  async deleteFurniture(_id: string):Promise<void> {
    await firstValueFrom(this.http.delete(environment.furnitureUrl + _id))
  }
}

