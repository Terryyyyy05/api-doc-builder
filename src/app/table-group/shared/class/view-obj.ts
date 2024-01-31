import { ApiConfig, ApiConfigKey, InfoConfig } from '../type/type';

export class ViewObj {
  infoData!: {
    // API 代號
    taskId: string;
    // 功能名稱
    name: string;
    // 服務分類
    serviceType: string;

    // taskId 名稱
    taskIdText?: string;
  };

  reqData!: {
    payloadList: PayloadData[];
    jsonData: {
      resHeader: '{...}';
      reqBody: {};
    };
  };

  resData!: {
    payloadList: PayloadData[];
    jsonData: {
      resHeader: '{...}';
      resBody: {};
    };
  };

  constructor() {
    this.infoData = {
      taskId: '未定義',
      name: '未設定',
      serviceType: '未定義',
    };

    this.reqData = {
      payloadList: [],
      jsonData: {
        resHeader: '{...}',
        reqBody: {},
      },
    };
    this.resData = {
      payloadList: [],
      jsonData: {
        resHeader: '{...}',
        resBody: {},
      },
    };
  }

  setPayloadData(apiConfig: ApiConfig, type: 'req' | 'res', level = '02') {
    if (!apiConfig) return;
    const keyList = Object.keys(apiConfig);
    const oriLevel = level;

    keyList.forEach((key, index) => {
      const tempItem = new PayloadData();
      tempItem.setData(key, apiConfig[key], level);
      if (type === 'req') {
        this.reqData.payloadList.push(tempItem);
      } else if (type === 'res') {
        this.resData.payloadList.push(tempItem);
      }

      // data & list(遞歸)
      if (apiConfig[key].data || apiConfig[key].list) {
        level = '0' + (+level + 1).toString();
        const dataOrList = apiConfig[key].data ?? apiConfig[key].list;
        if (dataOrList) this.setPayloadData(dataOrList, type, level);
        else console.error('不可能會進到的錯誤');
      }

      level = oriLevel;
    });
  }

  setJson(apiConfig: ApiConfig, type: 'req' | 'res') {
    const jsonString: Record<string, any> = {};
    if (apiConfig) {
      Object.keys(apiConfig).forEach((item) => {
        jsonString[item] = this.getJson(apiConfig[item]);
      });
    }

    if (type === 'req') {
      this.reqData.jsonData.reqBody = jsonString;
    } else if (type === 'res') {
      this.resData.jsonData.resBody = jsonString;
    }
  }

  setInfoTable(infoConfig: InfoConfig) {
    this.infoData.taskId = infoConfig.taskId;
    this.infoData.taskIdText = infoConfig.taskIdText;
    this.infoData.name = infoConfig.name;
    this.infoData.serviceType = infoConfig.serviceType;
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
