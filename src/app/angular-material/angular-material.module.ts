import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [],
	imports: [ CommonModule, MatSliderModule, MatGridListModule, MatIconModule ],
	exports: [ MatSliderModule, MatGridListModule, MatIconModule ]
})
export class AngularMaterialModule {}
