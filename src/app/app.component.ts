import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgxPrintModule, NgxPrintService } from 'ngx-print';
import { TableGroupComponent } from './table-group/table-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe, NgxPrintModule, TableGroupComponent, NgFor, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isShowPage: boolean = false;
  taskTitle!: string;
  dataList: any[] = [];
  content: any;
  constructor(private printService: NgxPrintService) {}

  fileOnChange(event: any) {
    this.isShowPage = false;
    this.dataList = [];
    const fileData = event.target.files;
    console.log('看看上傳的檔案', fileData);

    if (!fileData[0]) return;
    Object.values(fileData).forEach((item) => {
      const reader = new FileReader();
      reader.readAsText(item as Blob);

      reader.onload = (e) => {
        this.dataList.push(JSON.parse(e.target?.result as string));
      };
    });
  }

  renderPage(): void {
    console.log(this.taskTitle);

    this.isShowPage = true;
  }
}
