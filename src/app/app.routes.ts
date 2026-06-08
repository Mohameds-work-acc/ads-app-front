import { Routes } from '@angular/router';

import { ContactPageComponent } from './pages/contact-page.component';
import { LandingPageComponent } from './pages/landing-page.component';
import { PricingPageComponent } from './pages/pricing-page.component';
import { PrivacyPageComponent } from './pages/privacy-page.component';
import { RefundPageComponent } from './pages/refund-page.component';
import { TermsPageComponent } from './pages/terms-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent, title: 'Simple SaaS Dashboard | Personal productivity & business dashboard' },
  { path: 'pricing', component: PricingPageComponent, title: 'Pricing | Simple SaaS Dashboard' },
  { path: 'contact', component: ContactPageComponent, title: 'Contact | Simple SaaS Dashboard' },
  { path: 'privacy', component: PrivacyPageComponent, title: 'Privacy Policy | Simple SaaS Dashboard' },
  { path: 'refund', component: RefundPageComponent, title: 'Refund Policy | Simple SaaS Dashboard' },
  { path: 'terms', component: TermsPageComponent, title: 'Terms of Service | Simple SaaS Dashboard' },
  { path: '**', redirectTo: '' }
];
