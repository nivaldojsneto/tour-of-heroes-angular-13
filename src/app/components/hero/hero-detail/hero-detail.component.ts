import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from './../../../interfaces/hero.model';
import { HeroService } from './../../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
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

  ngOnInit(): void {
    this.getHero();
  }
}
