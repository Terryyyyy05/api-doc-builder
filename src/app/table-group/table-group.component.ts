import { JsonConfig } from './shared/type/type';
import { Component, Input, OnInit } from '@angular/core';
import { RequestTableComponent } from './request-table/request-table.component';
import { SampleTableComponent } from './sample-table/sample-table.component';
import { ResponseTableComponent } from './response-table/response-table.component';
import { ApiInfoTableComponent } from './api-info-table/api-info-table.component';
import { ViewObj } from './shared/class/view-obj';
import { DataFormatService } from './shared/service/data-format.service';

@Component({
  selector: 'app-table-group',
  standalone: true,
  templateUrl: './table-group.component.html',
  styleUrl: './table-group.component.scss',
  imports: [RequestTableComponent, SampleTableComponent, ResponseTableComponent, ApiInfoTableComponent],
  providers: [DataFormatService],
})
export class TableGroupComponent implements OnInit {
  @Input() apiConfig!: JsonConfig;

  viewObj!: ViewObj;

  constructor(private dataFormatService: DataFormatService) {}

  ngOnInit(): void {
    this.viewObj = this.dataFormatService.transRawData2ViewObj(this.apiConfig);
    console.log('ggggg', this.viewObj);
  }
}
