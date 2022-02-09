import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './../dashboard/dashboard.module';
import { MaterialModule } from './../material/material.module';
import { HeroComponent } from './components/hero/hero.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  declarations: [HeroesComponent, HeroComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    DashboardModule,
    HeroesRoutingModule,
    ReactiveFormsModule,
  ],
})
export class HeroesModule {}
