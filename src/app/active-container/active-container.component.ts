import { Component } from '@angular/core';
import { DndService } from '../dnd.service';
import { DropContainer } from '../drop-container';
import { CdkDragEnter } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-active-container',
  templateUrl: './active-container.component.html',
  styleUrls: ['./active-container.component.css']
})
export class ActiveContainerComponent extends DropContainer {
  constructor(public dndService: DndService) { super(); }

  dropListEntered(event: CdkDragEnter) {
    this.dndService.toggleEditMode(true);
  }
}
