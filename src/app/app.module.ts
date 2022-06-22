import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeaturesModule } from 'src/features/features.module';
import { AuthModule } from './auth/auth.module';
import { Routes, RouterModule} from '@angular/router';
import { AuthGuardGuard } from './auth/auth-guard.guard';


const routes: Routes = [ 
  {
    path : '',
    loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  
  {
    path : 'product',
    canActivate:[AuthGuardGuard], 
    loadChildren : () => import('./features/features.module').then(m => m.FeaturesModule),
       
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FeaturesModule,
    AuthModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
