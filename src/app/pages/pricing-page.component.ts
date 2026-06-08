import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pricing-page.component.html'
})
export class PricingPageComponent {
  readonly plans = [
    {
      name: 'Payment Support',
      price: 'Custom quote',
      description: 'For TikTok Coin-related payment assistance, billing questions, receipts, and status review.',
      features: ['Payment request review', 'Receipt and invoice support', 'Transaction status updates']
    },
    {
      name: 'Ads Setup',
      price: 'Custom quote',
      description: 'For Facebook or Instagram campaign setup support based on your approved budget and campaign details.',
      features: ['Campaign setup assistance', 'Audience and placement coordination', 'Creative upload support']
    },
    {
      name: 'Operations Support',
      price: 'Custom quote',
      description: 'For startups that need ongoing support across payment workflows and social advertising requests.',
      features: ['Priority request handling', 'Campaign change support', 'Basic reporting summaries']
    }
  ];
}
