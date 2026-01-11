import { Component, signal, computed } from '@angular/core';

type PaymentStatus = 'Paid' | 'Unpaid' | 'Refunded';

interface Booking {
    id: number;
    guestName: string;
    roomNumber: number;
    status: PaymentStatus;
    totalPrice: number;
}