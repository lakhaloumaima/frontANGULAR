import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './admin/add-category/add-category.component';

import { CategoriesComponent } from './admin/categories/categories.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { LanguagesComponent } from './admin/languages/languages.component';
import { ListUsersComponent } from './admin/list-users/list-users.component';
import { MissionsComponent } from './admin/missions/missions.component';
import { ProfileAdminComponent } from './admin/profile-admin/profile-admin.component';
import { ReviewsComponent } from './admin/reviews/reviews.component';
import { AddMissionComponent } from './client/add-mission/add-mission.component';

import { DashboardClientComponent } from './client/dashboard-client/dashboard-client.component';
import { MissionsClientComponent } from './client/missions-client/missions-client.component';
import { ProfilClientComponent } from './client/profil-client/profil-client.component';

import { DashbordFreelancerComponent } from './freelancer/dashbord-freelancer/dashbord-freelancer.component';
import { EditFreelancerComponent } from './freelancer/edit-freelancer/edit-freelancer.component';
import { ExpEducationComponent } from './freelancer/exp-education/exp-education.component';
import { ExperianceComponent } from './freelancer/experiance/experiance.component';
import { MissionsFreelancerComponent } from './freelancer/missions-freelancer/missions-freelancer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth.guard';

import { AboutComponent } from './users/about/about.component';
import { ContactComponent } from './users/contact/contact.component';
import { FindFreelancerComponent } from './users/find-freelancer/find-freelancer.component';
import { FindProjectComponent } from './users/find-project/find-project.component';
import { HomeComponent } from './users/home/home.component';

const routes: Routes = [
  {path:'',  component : HomeComponent},
  {path:'freelancer' , component:FindFreelancerComponent},
  {path:'project' , component:FindProjectComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactComponent} ,

  { path : 'register' , component:RegisterComponent } ,
  {path:'login' ,  component:LoginComponent } ,
  {path:'dashboard'    , canActivate:[AuthGuard]  , component:DashboardAdminComponent } ,
  { path : 'profil-admin' , canActivate:[AuthGuard]  , component:ProfileAdminComponent  },
  { path : 'addcategory' , canActivate:[AuthGuard]    ,component:AddCategoryComponent} ,
  { path : 'categories' , canActivate:[AuthGuard]   , component : CategoriesComponent} ,
  { path : 'missions' , canActivate:[AuthGuard]   ,component : MissionsComponent} ,
  {path:'allusers'  ,canActivate:[AuthGuard] , component:ListUsersComponent} ,
  {path:'allreviews' ,canActivate:[AuthGuard]   ,component:ReviewsComponent} ,
  {path:'alllanguages' ,canActivate:[AuthGuard]   ,component:LanguagesComponent} ,



  { path : 'dashboard-client' ,canActivate:[AuthGuard]  , component:DashboardClientComponent  },
  { path : 'profil-client' ,canActivate:[AuthGuard]  , component:ProfilClientComponent  },
  { path : 'missions-client' ,canActivate:[AuthGuard]  , component:MissionsClientComponent  },
  { path : 'addMission' ,canActivate:[AuthGuard]  , component:AddMissionComponent  },

  { path:'Education' , canActivate:[AuthGuard]  ,  component:ExpEducationComponent},
  {path:'edit-freelancer' ,canActivate:[AuthGuard]  ,component:EditFreelancerComponent} ,
  {path:'dashbord-freelancer' ,canActivate:[AuthGuard]  ,component:DashbordFreelancerComponent} ,
  { path:'experiance', canActivate:[AuthGuard]  , component:ExperianceComponent},
  { path:'missions-freelancer', canActivate:[AuthGuard]  , component:MissionsFreelancerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }