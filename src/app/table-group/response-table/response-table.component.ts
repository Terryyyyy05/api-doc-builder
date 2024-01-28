import { Component } from '@angular/core';
import { PayloadTableComponent } from '../payload-table/payload-table.component';

@Component({
  selector: 'app-response-table',
  standalone: true,
  templateUrl: './response-table.component.html',
  styleUrl: './response-table.component.scss',
  imports: [PayloadTableComponent],
})
export class ResponseTableComponent {}
