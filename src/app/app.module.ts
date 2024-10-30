import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutAppComponent } from './components/about-app/about-app.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MainTitleComponent,
    BigCardComponent,
    NewsCardComponent,
    HomeComponent,
    ContentComponent,
    FooterComponent,
    AboutAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
