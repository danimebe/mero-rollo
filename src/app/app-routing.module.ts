import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { EventsComponent } from './pages/events/events.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HowWeDoitComponent } from './pages/how-we-doit/how-we-doit.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
	{ path: 'home', component: HeroComponent },
	{ path: 'how-we-do-it', component: HowWeDoitComponent },
	{ path: 'menu', component: MenuComponent },
	{ path: 'events', component: EventsComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
