import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-table',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './sample-table.component.html',
  styleUrl: './sample-table.component.scss',
})
export class SampleTableComponent implements OnInit {
  @Input() sample!: Record<string, unknown>;
  @Input() isResponse!: boolean;

  typeText!: string;

  ngOnInit(): void {
    this.typeText = this.isResponse ? 'Response' : 'Request';
  }
}
