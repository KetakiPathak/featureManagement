import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-feature',
  templateUrl: './list-feature.component.html',
  styleUrls: ['./list-feature.component.scss']
})
export class ListFeatureComponent implements OnInit {

   features = [
    { displayName: 'Feature 1' ,technicalName: 'Feature Tech 1', expiresOn : '2-12-2021', description : 'test', enabled : 'yes', ApplicationIds: [1,2,3]},
    { displayName: 'Feature 2' ,technicalName: 'Feature Tech 2', expiresOn : '3-12-2021', description : 'test', enabled : 'yes', ApplicationIds: [1,2,3]},
    { displayName: 'Feature 3' ,technicalName: 'Feature Tech 3', expiresOn : '4-12-2021', description : 'test', enabled : 'yes', ApplicationIds: [1,2,3]},
    { displayName: 'Feature 4' ,technicalName: 'Feature Tech 4', expiresOn : '5-12-2021', description : 'test', enabled : 'yes', ApplicationIds: [1,2,3]},
    { displayName: 'Feature 5' ,technicalName: 'Feature Tech 5', expiresOn : '6-12-2021', description : 'test', enabled : 'yes', ApplicationIds: [1,2,3]},
    { displayName: 'Feature 6' ,technicalName: 'Feature Tech 6', expiresOn : '7-12-2021', description : 'test', enabled : 'yes', ApplicationIds: [1,2,3]},
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
