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
  isEditing!: boolean;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private router: ActivatedRoute
  ) {}

  getHero(): void {
    const paramId = this.router.snapshot.paramMap.get('id');

    if (paramId === 'new') {
      this.isEditing = false;
      this.hero = { name: '' } as Hero;
    } else {
      this.isEditing = true;

      const id = Number(paramId);
      this.heroService.getOne(id).subscribe((hero) => (this.hero = hero));
    }
  }

  goBack(): void {
    this.location.back();
  }

  updateHero(): void {
    this.heroService.update(this.hero).subscribe(() => this.goBack());
  }

  createHero(): void {
    this.heroService.create(this.hero).subscribe(() => this.goBack());
  }

  isFormValid(): boolean {
    return !!this.hero.name.trim();
  }

  ngOnInit(): void {
    this.getHero();
  }
}
