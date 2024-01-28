import { ApiConfig, ApiConfigKey } from '../type/type';

export class ViewObj {
  // API 代號
  taskId!: string;
  // 功能名稱
  name!: string;
  // 服務分類
  serviceType!: string;

  reqData!: PayloadData;

  resData!: {
    payloadList: any[];
    jsonData: {};
  };

  constructor() {
    this.resData = { payloadList: [], jsonData: {} };
  }

  setPayloadData(resBodyConfig: ApiConfig, level = '02') {
    const keyList = Object.keys(resBodyConfig);
    const oriLevel = level;

    keyList.forEach((key, index) => {
      const tempItem = new PayloadData();
      tempItem.setData(key, resBodyConfig[key], level);
      this.resData.payloadList.push(tempItem);

      // data & list(遞歸)
      if (resBodyConfig[key].data || resBodyConfig[key].list) {
        level = '0' + (+level + 1).toString();
        const dataOrList = resBodyConfig[key].data ?? resBodyConfig[key].list;
        if (dataOrList) this.setPayloadData(dataOrList, level);
        else console.error('不可能會進到的錯誤');
      }

      level = oriLevel;
    });
  }

  setBasicData(json: any) {
    this.taskId = json.taskId;
    this.name = json.name;
    this.serviceType = json.serviceType;
  }

  getJson(resBodyConfig: ApiConfig) {
    if (resBodyConfig['data']) {
      // data
      const childList = Object.keys(resBodyConfig['data']);
      const tempObj: Record<string, any> = {};
      childList.forEach((item2) => {
        item2 as ApiConfigKey;
        resBodyConfig['data'] as ApiConfig;
        tempObj[item2] = this.getJson(resBodyConfig['data'][item2]);
      });
      return tempObj;
    } else if (resBodyConfig['list']) {
      // list
      const childList = Object.keys(resBodyConfig['list']);
      const tempList = [];
      const tempObj: Record<string, any> = {};
      childList.forEach((item2) => {
        tempObj[item2] = this.getJson(resBodyConfig['list'][item2]);
      });
      tempList.push(tempObj);
      return tempList;
    } else {
      // value
      return resBodyConfig['value'];
    }
  }
}

export class PayloadData {
  level!: string;
  fieldName!: string;
  type!: string;
  fieldDescription!: string;
  isRequired!: boolean;
  memo!: string;

  constructor() {}

  setData(
    fieldName: string,
    jsonPayloadData: {
      description: string;
      memo: string;
      value?: string;
      data?: { [key: string]: any };
      list?: { [key: string]: any };
    },
    level: string
  ): void {
    this.level = level;
    this.fieldName = fieldName;
    this.fieldDescription = jsonPayloadData.description;
    this.memo = jsonPayloadData.memo;

    if (jsonPayloadData.value) {
      this.type = 'String';
    } else if (jsonPayloadData.data) {
      this.type = 'Object';
    } else if (jsonPayloadData.list) {
      this.type = 'Object[Array]';
    }

    // TODO
    this.isRequired;
  }
}

export const jsonString2 = {
  taskId: 'CACTX503_95',
  name: '外幣付款預約註銷 - 退件 (待放行)',
  serviceType: 'Fcy',

  resBodyConfig: {
    cancelFlowDocId: {
      description: '註銷案件編號',
      memo: '',
      value: '2302230000003',
    },
    payerInfo: {
      description: '付款人資訊',
      memo: '',
      data: {
        payerCompanyName: {
          description: '付款人名稱',
          memo: '',
          value: '16313302 網際威信股份有限公司',
        },

        test123: {
          description: '666',
          memo: '',
          data: {
            payerCompanyName: {
              description: '付款人名稱',
              memo: '',
              value: '16313302 網際威信股份有限公司',
            },
          },
        },
      },
    },
    resultList: {
      description: '查詢結果清單',
      memo: '',
      list: {
        sn: {
          description: '序號',
          memo: '',
          value: '1',
        },
        taskId: {
          description: '交易功能',
          memo: '',
          value: 'CACTX501',
        },
        totalAmtList: {
          description: '總交易金額',
          memo: '',
          list: {
            amt: {
              description: '金額',
              memo: '',
              value: '5,000',
            },
            ccy: {
              description: '幣別',
              memo: '',
              value: 'USD',
            },
          },
        },
      },
    },
    test123: {
      description: 'hihi',
      memo: '',
      value: '是02',
    },
  },
};