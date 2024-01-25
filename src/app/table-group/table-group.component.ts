import { Component } from '@angular/core';
import { RequestTableComponent } from './request-table/request-table.component';
import { SampleTableComponent } from './sample-table/sample-table.component';

@Component({
  selector: 'app-table-group',
  standalone: true,
  imports: [RequestTableComponent, SampleTableComponent],
  templateUrl: './table-group.component.html',
  styleUrl: './table-group.component.scss',
})
export class TableGroupComponent {}
