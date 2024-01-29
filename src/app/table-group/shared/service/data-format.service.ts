import { Injectable } from '@angular/core';
import { ViewObj } from '../class/view-obj';
import { ApiConfig } from '../type/type';

@Injectable({
  providedIn: 'root',
})
export class DataFormatService {
  constructor() {}

  transRawData2ViewObj(rawData: any): ViewObj {
    const resBodyConfig = rawData.resBodyConfig;
    const reqBodyConfig = rawData.reqBodyConfig;

    const viewObj = new ViewObj();
    viewObj.setPayloadData(reqBodyConfig, 'req');
    viewObj.setJson(reqBodyConfig, 'req');

    viewObj.setPayloadData(resBodyConfig, 'res');
    viewObj.setJson(resBodyConfig, 'res');

    return viewObj;
  }
}
