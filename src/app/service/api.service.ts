import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://6dsdfjyy6k.execute-api.us-east-2.amazonaws.com/dev/';

  constructor(private httpClient: HttpClient) {}

  public createPet(pet: Pet){}

  //public updatePet(pet: Pet){}

  //public deletePet(id: number){}

  //public getPetById(id: number){}

  public createRandomPet(){
    console.log("Creating random pet");
    return this.httpClient.get(`${this.apiURL}random`, {observe: 'response'});
  }

  public getPets(url?: string){
    return this.httpClient.get(`${this.apiURL}getAll`, {observe: 'response'});
  }


}
