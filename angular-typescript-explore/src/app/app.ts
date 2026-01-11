import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-typescript-explore');

    // 1. You MUST define the variable here for the HTML to see it
  // 2. We use a Signal because it's the 2026 standard
  activeBooking = signal({
    guestName: 'Sea Eagle Guest',
    roomNumber: 101
  });
}
