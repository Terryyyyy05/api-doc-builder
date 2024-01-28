import { Injectable } from '@angular/core';
import { ViewObj } from '../class/view-obj';
import { ApiConfig } from '../type/type';

@Injectable({
  providedIn: 'root',
})
export class DataFormatService {
  constructor() {}

  transRawData2ViewObj<T extends ApiConfig>(rawData: T): ViewObj {
    const viewObj = new ViewObj();
    viewObj.setPayloadData(rawData);
    return viewObj;
  }
}
