import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
displayname: string = '';
  technicalname: string = '';
  expireon: string = '';
  description: string = '';
  id : string = '';
  constructor(private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {


    this.activatedRoute.queryParams.subscribe(params => {
            this.id  = params['id'];

            //API call will go here to get date of particular feature
            console.log(this.id);
        });

  }
   //Function to save create and update feature
   save(){

        //API call to save date of create and update feature. if this.id not as blank it will treat as create and if it
        //has value it will treat as update
        this.router.navigate(['/list']);
   }
}
