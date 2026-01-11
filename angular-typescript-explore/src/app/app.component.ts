import { Component, signal, computed } from '@angular/core';

// 1. OPTIONS (Type Alias)
type PaymentStatus = 'Paid' | 'Unpaid' | 'Refunded';

// 2. DATA SHAPE (Interface)
interface Booking {
  id: number;
  guestName: string;
  roomNumber: number;
  status: PaymentStatus;
  totalPrice: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="p-8 font-sans">
      <h1 class="text-2xl font-bold">Sea Eagle Booking System</h1>
      <p>Guest: {{ activeBooking().guestName }}</p>
      <p>Status: <span [class.text-green-500]="activeBooking().status === 'Paid'">
        {{ activeBooking().status }}
      </span></p>
      
      <button (click)="markAsPaid()" class="mt-4 bg-blue-500 text-white p-2 rounded">
        Confirm Payment
      </button>
    </div>
  `,
})
export class AppComponent {
  // 3. THE SIGNAL: A Type-Safe reactive variable
  activeBooking = signal<Booking>({
    id: 1,
    guestName: 'John Doe',
    roomNumber: 101,
    status: 'Unpaid',
    totalPrice: 200
  });

  markAsPaid() {
    // TypeScript ensures you can only set status to 'Paid' | 'Unpaid' | 'Refunded'
    this.activeBooking.update(current => ({
      ...current,
      status: 'Paid'
    }));
  }
}