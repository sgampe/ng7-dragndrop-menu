import { Component } from '@angular/core';
import { DndService } from './../dnd.service';
import { DropContainer } from '../drop-container';

@Component({
  selector: 'app-inactive-container',
  templateUrl: './inactive-container.component.html',
  styleUrls: ['./inactive-container.component.css']
})
export class InactiveContainerComponent extends DropContainer {
  constructor(public dndService: DndService) { super(); }
}