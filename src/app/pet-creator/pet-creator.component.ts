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

  constructor(private apiService: ApiService) {
    this.pet = new Pet(1, '');

   }

  ngOnInit() {
    this.apiService.getPets().subscribe((res)=>{
      this.apiService.getPets(this.apiService.nextPage).subscribe((res)=>{
        console.log(res);
      });      
    });
  }

  submit(formData) {
    console.log(this.pet);
    this.pet = new Pet(1, '');
    this.submitted = true;

}


}
