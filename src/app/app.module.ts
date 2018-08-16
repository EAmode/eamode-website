import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AboutComponent } from './about/about.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { PanelModule } from 'eang';
import { ConsultingComponent } from './consulting/consulting.component';
import { SoftwareComponent } from './software/software.component';
import { ModeComponent } from './mode/mode.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component'
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ConsultingComponent,
    SoftwareComponent,
    ModeComponent,
    MobileNavComponent
  ],
  imports: [BrowserModule, AppRoutingModule, PanelModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
