import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from '@progress/kendo-angular-navigation';

import { breadCrumbRouting, appRoutingProviders } from './breadcrumb.routes';

import { HomeComponent } from './home.component';
import { ProductsComponent } from './products.component';
import { AboutComponent } from './about.component';
import { TeamComponent } from './team.component';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProductsComponent,
        TeamComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NavigationModule,
        breadCrumbRouting
    ],
    providers: [
        appRoutingProviders,
        {
            provide: APP_BASE_HREF,
            useValue: window.location.pathname
        }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
