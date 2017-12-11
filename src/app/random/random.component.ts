import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  breedlist = [];
  
    constructor(private apiService: APIService) { }
   
    
    ngOnInit() {

      this.apiService.getRandomImage().subscribe(data => this.breedlist = data);
  
    }

}
