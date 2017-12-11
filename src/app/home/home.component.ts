import { Component, OnInit } from '@angular/core';
import { APIService } from "../api.service";
import { Breed } from "../breed";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: APIService) {
  }

  breed: any;
  names: String[];

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.apiService.getList().subscribe(data => {
    this.breed = data;
      this.names = this.breed.message
    });

  }
}

