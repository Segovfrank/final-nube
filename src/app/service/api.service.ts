import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://6dsdfjyy6k.execute-api.us-east-2.amazonaws.com/dev/';
  public firstPage: string = "";
  public prevPage: string = "";
  public nextPage: string = "";
  public lastPage: string = "";

  constructor(private httpClient: HttpClient) {}

  public createPet(pet: Pet){}

  //public updatePet(pet: Pet){}

  //public deletePet(id: number){}

  //public getPetById(id: number){}

  public getPets(url?: string){
    /*if(url){
      return this.httpClient.get<Pet[]>(url,{ observe: 'response' }).pipe(tap(res => {
        this.retrieve_pagination_links(res);
      }));
    }

    return this.httpClient.get<Pet[]>(`${this.apiURL}/getAll?page=1`,
    { observe: 'response' }).pipe(tap(res => {
      this.retrieve_pagination_links(res); 
    }));*/
    //return this.httpClient.get<Pet[]>(`${this.apiURL}/getAll`);
    return this.httpClient.get(`${this.apiURL}getAll`);
  }

  parse_link_header(header) {
    if (header.length == 0) {
      return ;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach( p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;

    }); 
    return links;
  }

  public retrieve_pagination_links(response){
    const linkHeader = this.parse_link_header(response.headers.get('Link'));
    this.firstPage = linkHeader["first"];
    this.lastPage =  linkHeader["last"];
    this.prevPage =  linkHeader["prev"];
    this.nextPage =  linkHeader["next"];
}

}