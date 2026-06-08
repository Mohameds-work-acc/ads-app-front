import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent {
  readonly reviewPoints = [
    'Business identity and contact information are easy to find.',
    'Privacy Policy explains account, payment, and advertising data use.',
    'Terms describe payment rules, refunds, user responsibilities, and platform limits.'
  ];

  readonly services = [
    {
      title: 'TikTok Coin Payment Support',
      body: 'Guided support for payment requests, billing questions, receipts, transaction review, and status updates connected to TikTok Coin-related app workflows.'
    },
    {
      title: 'Facebook Ads Setup',
      body: 'Campaign setup assistance for Facebook ads, including objective selection, budget entry, audience details, creative upload, and launch coordination.'
    },
    {
      title: 'Instagram Ads Setup',
      body: 'Support for Instagram placement setup, creative review, ad account details, campaign changes, and basic performance reporting.'
    }
  ];

  readonly steps = [
    {
      title: 'Submit a request',
      body: 'Tell us whether you need payment support, ad campaign creation, or account help through the contact page.'
    },
    {
      title: 'Confirm details',
      body: 'We review the required account, billing, campaign, creative, and compliance details before taking action.'
    },
    {
      title: 'Receive support',
      body: 'We complete the agreed service, provide status updates, and share receipts or campaign summaries when applicable.'
    }
  ];
}
