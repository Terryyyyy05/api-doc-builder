import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { jsonString2 } from '../shared/class/view-obj';
import { EMPTY_DATA_TEXT } from '../shared/config';
import { DataFormatService } from '../shared/service/data-format.service';

@Component({
  selector: 'app-payload-table',
  standalone: true,
  imports: [NgIf],
  providers: [DataFormatService],
  templateUrl: './payload-table.component.html',
  styleUrl: './payload-table.component.scss',
})
export class PayloadTableComponent {
  emptyText = EMPTY_DATA_TEXT;
  @Input() isResponse!: boolean;
  sample = jsonString2;

  constructor(private dataFormatService: DataFormatService) {}

  ngOnInit(): void {
    const test = this.dataFormatService.transRawData2ViewObj<{}>(this.sample.resBodyConfig);
    console.log('ggggg', test);
  }
}
