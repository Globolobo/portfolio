import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

/*import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';*/

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/home/home.component.html',
    styleUrls: ['public/css/components/home/home.css','public/css/styles/styles.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        //HeroService
    ]
})
//TODO add the routes/route config to separate file.
/*@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }
])*/
export class AppComponent {
    name = 'Sean Pichardo';
    title = 'Senior Web Application Developer';
}
