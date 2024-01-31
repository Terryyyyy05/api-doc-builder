import { Component, Input } from '@angular/core';
import { PayloadData, ViewObj } from '../class/view-obj';

@Component({
  selector: 'app-base-api-table',
  standalone: true,
  template: '',
})
export class BaseApiTableComponent {
  @Input() payloadList!: PayloadData[];
  @Input() infoData!: ViewObj['infoData'];
}
