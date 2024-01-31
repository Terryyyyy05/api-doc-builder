import { ViewObj } from './../shared/class/view-obj';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-api-info-table',
  standalone: true,
  imports: [],
  templateUrl: './api-info-table.component.html',
  styleUrl: './api-info-table.component.scss',
})
export class ApiInfoTableComponent {
  @Input() infoTableData!: ViewObj['infoData'];
}
