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
    'Privacy Policy and Terms are linked from every page.',
    'The app clearly explains what users can do with tasks, notes, clients, and reports.'
  ];

  readonly services = [
    {
      title: 'Tasks',
      body: 'Keep personal and business work organized with a simple list view for priorities, deadlines, and status.'
    },
    {
      title: 'Notes',
      body: 'Capture ideas, meeting notes, and reminders in a lightweight workspace that stays easy to scan.'
    },
    {
      title: 'Clients',
      body: 'Track contacts, relationship details, and account history for small teams and independent operators.'
    },
    {
      title: 'Reports',
      body: 'Review simple summaries that help users understand progress without needing a heavy analytics tool.'
    }
  ];

  readonly steps = [
    {
      title: 'Add your workspace',
      body: 'Create a clean place for your tasks, notes, clients, and reports.'
    },
    {
      title: 'Organize your data',
      body: 'Group what matters, keep it searchable, and separate day-to-day work from longer term records.'
    },
    {
      title: 'Review progress',
      body: 'Use simple reporting views to stay on top of personal productivity and business activity.'
    }
  ];
}
