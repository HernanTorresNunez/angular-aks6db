import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ProductsComponent } from './products.component';
import { TeamComponent } from './team.component';

export const breadCrumbRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        redirectTo: ''
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'products/about',
        component: AboutComponent
    },
    {
        path: 'products/about/team',
        component: TeamComponent
    }
];

export const appRoutingProviders: any[] = [];

export const breadCrumbRouting: ModuleWithProviders = RouterModule.forRoot(breadCrumbRoutes);
