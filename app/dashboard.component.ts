import { Component, OnInit } from 'angular2/core';
import { Hero } from './hero';
import { HeroService } from './services/hero.service.ts';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'components/home/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(
        private _router: Router,
        private _heroService: HeroService) {
    }
    ngOnInit() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }
    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
}

