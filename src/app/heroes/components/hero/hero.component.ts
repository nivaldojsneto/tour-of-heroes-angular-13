import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  hero!: Hero;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private router: ActivatedRoute
  ) {}

  getHero(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }

  saveHero(): void {
    this.heroService.update(this.hero).subscribe((hero) => this.goBack());
  }

  ngOnInit(): void {
    this.getHero();
  }
}
