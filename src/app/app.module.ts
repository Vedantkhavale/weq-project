import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { WhyusComponent } from './whyus/whyus.component';
import { PricingComponent } from './pricing/pricing.component';
import { FormsModule } from '@angular/forms';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CtaComponent } from './cta/cta.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    WhyusComponent,
    PricingComponent,
    TestimonialsComponent,
    CtaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
