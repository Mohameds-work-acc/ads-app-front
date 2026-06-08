import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-page.component.html'
})
export class ContactPageComponent {
  private readonly fb = inject(FormBuilder);
  protected statusMessage = '';

  readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    requestType: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, requestType, message } = this.form.getRawValue();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Request type: ${requestType}`,
      '',
      message
    ].join('\n');

    const mailto =
      `mailto:support@flowdesk.app?subject=${encodeURIComponent('FlowDesk support request')}` +
      `&body=${encodeURIComponent(body)}`;

    this.statusMessage = 'Opening your email app with the request details.';
    window.location.href = mailto;
  }
}

