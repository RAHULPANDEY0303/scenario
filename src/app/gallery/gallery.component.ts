import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  appList: any[] = [{
    "ID": "1",
    "url": './assets/images/tutor1.png',
    "Name": 'Henry K',
    "Master": 'Quality Assurance',
    "Expirence":'15 Years'
  },
  {
     "ID": "2",
     "url": './assets/images/tutor2.png',
     "Name": 'Helen Keller',
     "Master": 'Front-End Developer',
     "Expirence":'5 Years'
  },
  {
    "ID": "3",
    "url": './assets/images/tutor3.png',
    "Name": 'Henry S',
    "Master": 'Mean Stack',
    "Expirence":'15 Years'
 },
 {
  "ID": "4",
  "url": './assets/images/tutor4.png',
  "Name": 'John Jacob',
  "Master": 'Mern Stack',
  "Expirence":'15 Years'
}];
}
