import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bigger-exercise',
  templateUrl: './bigger-exercise.component.html',
  styleUrls: ['./bigger-exercise.component.css'],
})
export class BiggerExerciseComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.fetchRandom();
    this.fetchRandomBreed()
  }

  url = 'https://dog.ceo/api/breeds/image/random';
  breedUrl = 'https://dog.ceo/api/breeds/image/random/10';
  image: any;
  imageArr:any
  breeds:any = []
  breedName:any

  fetchRandom() {
    this.http.get(this.url).subscribe(
      (res: any) => {
        this.image = res.message;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  fetchRandomBreed() {
    this.http.get(this.breedUrl).subscribe(
      (res:any) => {
        this.imageArr = res.message;
        this.breeds = res.message.forEach((element:any) => {
          this.breedName = element.split('/')[4]
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
