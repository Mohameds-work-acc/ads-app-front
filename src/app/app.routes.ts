import { Routes } from '@angular/router';

import { ContactPageComponent } from './pages/contact-page.component';
import { LandingPageComponent } from './pages/landing-page.component';
import { PrivacyPageComponent } from './pages/privacy-page.component';
import { TermsPageComponent } from './pages/terms-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent, title: 'Full Ads | TikTok Coins and Meta Ads Support' },
  { path: 'contact', component: ContactPageComponent, title: 'Contact | Full Ads' },
  { path: 'privacy', component: PrivacyPageComponent, title: 'Privacy Policy | Full Ads' },
  { path: 'terms', component: TermsPageComponent, title: 'Terms of Service | Full Ads' },
  { path: '**', redirectTo: '' }
];
