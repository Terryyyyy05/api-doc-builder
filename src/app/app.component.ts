import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxPrintModule, NgxPrintService } from 'ngx-print';
import { TableGroupComponent } from './table-group/table-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgxPrintModule, TableGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private printService: NgxPrintService) {}
  content: any;

  fileOnChange(event: any) {
    const file = event.target.files[0];

    if (!file) return;
    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = (e) => {
      console.log('ggggg22', e.target?.result);
      this.content = JSON.parse(e.target?.result as string);
      console.log('ggggg2233', this.content);
    };
  }
}
