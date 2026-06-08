import { Routes } from '@angular/router';

import { ContactPageComponent } from './pages/contact-page.component';
import { LandingPageComponent } from './pages/landing-page.component';
import { PricingPageComponent } from './pages/pricing-page.component';
import { PrivacyPageComponent } from './pages/privacy-page.component';
import { RefundPageComponent } from './pages/refund-page.component';
import { TermsPageComponent } from './pages/terms-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent, title: 'FlowDesk | Personal productivity & business dashboard' },
  { path: 'pricing', component: PricingPageComponent, title: 'Pricing | FlowDesk' },
  { path: 'contact', component: ContactPageComponent, title: 'Contact | FlowDesk' },
  { path: 'privacy', component: PrivacyPageComponent, title: 'Privacy Policy | FlowDesk' },
  { path: 'refund', component: RefundPageComponent, title: 'Refund Policy | FlowDesk' },
  { path: 'terms', component: TermsPageComponent, title: 'Terms of Service | FlowDesk' },
  { path: '**', redirectTo: '' }
];

