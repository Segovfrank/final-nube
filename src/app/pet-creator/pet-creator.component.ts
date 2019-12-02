import { Component, OnInit } from '@angular/core';
import { Pet } from '../models/pet';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-pet-creator',
  templateUrl: './pet-creator.component.html',
  styleUrls: ['./pet-creator.component.scss']
})
export class PetCreatorComponent implements OnInit {

  pet: Pet;
  submitted = false;
  pets: Pet[];

  constructor(private apiService: ApiService) {
    this.pet = new Pet(1, '');


   }

  ngOnInit() {
    this.apiService.getPets().subscribe((res)=>{
      this.apiService.getPets().subscribe((res)=>{
        console.log("-----------------------------------");
        //this.pets = res.body.pets as Pet[];
        this.pets = res.body["pets"] as Pet[];
        
        console.log(this.pets);
        console.log(res.body);
      });
    });
  }



random(){
  this.apiService.createRandomPet().subscribe((res)=>{
    this.apiService.createRandomPet().subscribe((res)=>{
      this.apiService.getPets().subscribe((res)=>{
        this.apiService.getPets().subscribe((res)=>{
          this.pets = res.body["pets"] as Pet[];
        });
      });
    });
  });
}


}
