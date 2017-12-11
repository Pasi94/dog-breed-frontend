import { Component, OnInit } from '@angular/core';
import { APIService } from "../api.service";
import { ActivatedRoute } from '@angular/router';
import { Breed } from "../breed";

@Component({
  selector: 'app-breed-images',
  templateUrl: './breed-images.component.html',
  styleUrls: ['./breed-images.component.css']
})
export class BreedImagesComponent implements OnInit {

  constructor(private apiService: APIService,
    private route: ActivatedRoute) { }

  breed: any;
  urls: String[];
  breed_name: string;

  ngOnInit() {
    this.breed_name = this.route.snapshot.queryParams["breed"];
    this.getImages(this.breed_name);

  }

  getImages(breed: string): void {
    this.apiService.getImageList(breed).subscribe(data => {
    this.breed = data;
      this.urls = this.breed.message
    });
  }

}
