import { Component, Input } from '@angular/core';
import { PayloadTableComponent } from '../payload-table/payload-table.component';
import { BaseApiTableComponent } from '../shared/base/base-api-table.component';
import { PayloadData } from '../shared/class/view-obj';

@Component({
  selector: 'app-response-table',
  standalone: true,
  templateUrl: './response-table.component.html',
  styleUrl: './response-table.component.scss',
  imports: [PayloadTableComponent],
})
export class ResponseTableComponent extends BaseApiTableComponent {}
