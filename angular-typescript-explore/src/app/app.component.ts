import { Component, signal, computed } from '@angular/core';

type PaymentStatus = 'Paid' | 'Unpaid' | 'Refunded';

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