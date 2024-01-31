import { Injectable } from '@angular/core';
import { ViewObj } from '../class/view-obj';
import { ApiConfig, JsonConfig } from '../type/type';

@Injectable({
  providedIn: 'root',
})
export class DataFormatService {
  private titleText!: string;
  constructor() {}

  transRawData2ViewObj(rawData: JsonConfig): ViewObj {
    const resBodyConfig = rawData.resBodyConfig;
    const reqBodyConfig = rawData.reqBodyConfig;

    const viewObj = new ViewObj();
    viewObj.setPayloadData(reqBodyConfig, 'req');
    viewObj.setJson(reqBodyConfig, 'req');

    viewObj.setPayloadData(resBodyConfig, 'res');
    viewObj.setJson(resBodyConfig, 'res');

    // set info table
    viewObj.setInfoTable(rawData.infoConfig);

    return viewObj;
  }
}
