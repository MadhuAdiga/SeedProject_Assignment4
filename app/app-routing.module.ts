import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';

const routes : Routes = [// Declare a routes variable which contains the paths and the corresponding routed component 
    { path: 'about', component: AboutComponent},// Specify the three routes used in this application
    { path: 'home', component: HomeComponent},
    { path: 'contact', component: ContactComponent}
]

@NgModule({
  imports:      [ RouterModule.forRoot(routes) ],
  exports:      [ RouterModule ]
})

export class AppRoutingModule {}
export const routingComponents = [AboutComponent, HomeComponent, ContactComponent]//Export the three routed components used in this application
