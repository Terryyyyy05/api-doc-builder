import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { jsonString2, PayloadData, ViewObj } from '../shared/class/view-obj';
import { EMPTY_DATA_TEXT, FIELD_NAME_PADDING, ROW_BG_COLOR } from '../shared/config';
import { DataFormatService } from '../shared/service/data-format.service';

@Component({
  selector: 'app-payload-table',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  providers: [DataFormatService],
  templateUrl: './payload-table.component.html',
  styleUrl: './payload-table.component.scss',
})
export class PayloadTableComponent {
  emptyText = EMPTY_DATA_TEXT;
  FIELD_NAME_PADDING = FIELD_NAME_PADDING;
  ROW_BG_COLOR = ROW_BG_COLOR;
  @Input() isResponse!: boolean;
  @Input() payloadList: PayloadData[] = [];

  constructor(private dataFormatService: DataFormatService) {}

  ngOnInit(): void {
    console.log('goooooo', this.payloadList);
  }

  getBgColor(level: PayloadData['level'], type: PayloadData['type']): string | undefined {
    if (type === 'String') return;
    const bgColorMap = new Map([
      ['02', ROW_BG_COLOR.Level1],
      ['03', ROW_BG_COLOR.Level2],
      ['04', ROW_BG_COLOR.Level3],
      ['05', ROW_BG_COLOR.Level4],
    ]);
    const bgColor = bgColorMap.get(level)!;
    return bgColor;
  }
}
