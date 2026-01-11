import { Component, signal, computed } from '@angular/core';

type StatusPayment = 'Paid' | 'Unpaid';

interface Booking {
  guestName: string;
  roomNumber: number;
  status: StatusPayment;
  basePrice: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
})
export class App {
  // Practice strictly typing your Signal
  activeBooking = signal<Booking>({
    guestName: 'Sea Eagle Guest',
    roomNumber: 101,
    status: 'Unpaid',
    basePrice: 250
  });

  // Signal-based math for your Financial System
  taxRate = signal(0.12);
  taxAmount = computed(() => this.activeBooking().basePrice * this.taxRate());
  total = computed(() => this.activeBooking().basePrice + this.taxAmount());

  markAsPaid() {
    this.activeBooking.update(current => ({ ...current, status: 'Paid' }));
  }
}