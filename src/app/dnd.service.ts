import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DndService {
  editMode: boolean = false;

  active = [
    'date_range',
    'eject',
    'flight_land',
    'explore',
    'history'
  ];

  inactive = [
    'wifi',
    'confirmation_number',
    'drive_eta'
  ]

  constructor() {
  }

  toggleEditMode(enabled: boolean) {
    this.editMode = enabled;
  }
}