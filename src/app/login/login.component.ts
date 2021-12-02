import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  uname: string = '';
  psw: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validateUser(){

  if(this.uname == "prodmanager" && this.psw == "prodmanager"){
    sessionStorage.setItem('role', 'prodmanager');
    this.router.navigate(['/list']);
  }else if(this.uname == "user" && this.psw == "user"){
    sessionStorage.setItem('role', 'user');
    this.router.navigate(['/list']);
  }else{
   this.router.navigate(['/login']);
  }



  }

}
