import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home.routing';
import { HeroComponent } from './page/home/hero/hero.component';
import { NgParticlesModule } from 'ng-particles';
import { ParticleComponent } from './page/home/particle/particle.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent, ParticleComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, NgParticlesModule],
  exports: [HomeComponent, HeroComponent, ParticleComponent],
})
export class HomeModule {}
