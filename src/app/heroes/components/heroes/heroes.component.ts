import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';
import { ConfirmationDialogComponent } from './../../../core/components/confirmation-dialog/confirmation-dialog.component';
import { DialogData } from './../../../core/models/dialog-data.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  heroes: Hero[] = [];

  constructor(private dialog: MatDialog, private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getAll().subscribe((heroes) => (this.heroes = heroes));
  }

  deleteHero(hero: Hero): void {
    const dialogData: DialogData = {
      cancelText: 'Cancel',
      confirmText: 'Delete',
      content: `Delete '${hero.name}'?`,
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: dialogData,
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.heroService.delete(hero).subscribe(() => {
          this.getHeroes();
        });
      }
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
