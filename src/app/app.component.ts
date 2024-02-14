import { JsonConfig } from './table-group/shared/type/type';
import { DataFormatService } from './table-group/shared/service/data-format.service';
import { JsonPipe, NgFor, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { TableGroupComponent } from './table-group/table-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe, NgxPrintModule, TableGroupComponent, NgFor, NgIf, FormsModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isShowPage: boolean = false;
  taskTitle!: string;
  dataList: JsonConfig[] = [];
  constructor(private dataFormatService: DataFormatService) {}

  fileOnChange(event: Event) {
    this.isShowPage = false;
    this.dataList = [];
    const fileData = (event.target as HTMLInputElement).files;
    console.log('看看上傳的檔案', fileData);

    if (!fileData || !fileData[0]) return;
    Object.values(fileData).forEach((item) => {
      const reader = new FileReader();
      reader.readAsText(item as Blob);

      reader.onload = (e) => {
        this.dataList.push(JSON.parse(e.target?.result as string));
      };
    });
  }

  renderPage(): void {
    console.log('api 功能：', this.taskTitle);

    this.dataList.forEach((item) => {
      item.infoConfig.taskIdText = this.taskTitle;
    });

    this.isShowPage = true;
  }
}
