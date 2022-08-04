import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { AuthGuardService as AuthGuard  } from './services/auth-guard.service';
import { RoleGuardService as RoleGuard} from './services/role-guard.service';

const routes: Routes = [
   
    { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
      
    { path: 'facesnaps', component: FaceSnapListComponent,
    canActivate: [AuthGuard]  },
    { path: 'create', component: NewFaceSnapComponent ,canActivate: [RoleGuard] , data: { 
      expectedRole: 'ROLE_ADMIN'
    }  },
    { path: 'login', component: LoginComponent },
    { path: '', component: LandingPageComponent }
      
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule {}