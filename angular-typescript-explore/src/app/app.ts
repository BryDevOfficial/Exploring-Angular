import { Component, signal } from '@angular/core';

// Define the shape of your data
interface Booking {
  guestName: string;
  roomNumber: number;
  status: 'Paid' | 'Unpaid';
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html', // This links to your app.html
})
export class App {  // Class name is 'App' to match your error message
  
  // Define the signal that the HTML is looking for
  activeBooking = signal<Booking>({
    guestName: 'Sea Eagle Guest',
    roomNumber: 101,
    status: 'Unpaid'
  });

  markAsPaid() {
    this.activeBooking.update(current => ({
      ...current,
      status: 'Paid'
    }));
  }
}