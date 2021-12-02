import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListFeatureComponent } from './list-feature/list-feature.component';


const routes: Routes = [
{path:'',pathMatch:'full',redirectTo:'login'},
{path:'login', component: LoginComponent },
{path:'list', component: ListFeatureComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
