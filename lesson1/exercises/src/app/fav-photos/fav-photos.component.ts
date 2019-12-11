import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Pics';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'http://scififics.com/wp-content/uploads/2018/12/4-Witness-Header-1024x512.jpg';
  image3 = 'http://scififics.com/wp-content/uploads/2019/07/1-Jurisdiction-Header-1024x514.jpg';

  constructor() { }

  ngOnInit() {
  }

}