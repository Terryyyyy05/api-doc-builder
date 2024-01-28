import { Component } from '@angular/core';
import { RequestTableComponent } from './request-table/request-table.component';
import { SampleTableComponent } from './sample-table/sample-table.component';
import { ResponseTableComponent } from './response-table/response-table.component';
import { ApiInfoTableComponent } from './api-info-table/api-info-table.component';

@Component({
  selector: 'app-table-group',
  standalone: true,
  templateUrl: './table-group.component.html',
  styleUrl: './table-group.component.scss',
  imports: [
    RequestTableComponent,
    SampleTableComponent,
    ResponseTableComponent,
    ApiInfoTableComponent,
  ],
})
export class TableGroupComponent {}
