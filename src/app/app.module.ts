import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HowWeDoitComponent } from './pages/how-we-doit/how-we-doit.component';
import { MenuComponent } from './pages/menu/menu.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [ NavbarComponent, AppComponent, HeroComponent, HowWeDoitComponent, MenuComponent, EventsComponent, ContactComponent ],
	imports: [ BrowserModule, AppRoutingModule, BrowserAnimationsModule, AngularMaterialModule, LayoutModule, FontAwesomeModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
