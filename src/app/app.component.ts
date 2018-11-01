import { Component } from '@angular/core';
import { DndService } from './dnd.service';

/**
 * @title Drag&Drop sorting
 */
@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public dndService: DndService) { }
}