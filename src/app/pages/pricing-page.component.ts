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
      name: 'Starter',
      price: '$9 / month',
      description: 'For individuals who want a simple space to keep tasks and notes organized.',
      features: ['Tasks and notes', 'Basic search', 'Email support']
    },
    {
      name: 'Team',
      price: '$19 / month',
      description: 'For small teams that need shared client records and lightweight reporting.',
      features: ['Clients and reports', 'Shared workspace', 'Priority support']
    },
    {
      name: 'Business',
      price: '$39 / month',
      description: 'For growing businesses that need a more structured dashboard for daily operations.',
      features: ['Everything in Team', 'Workspace controls', 'Onboarding help']
    }
  ];
}
