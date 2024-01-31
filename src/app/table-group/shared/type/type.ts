/* json type */
export type JsonConfig = {
  infoConfig: InfoConfig;
  reqBodyConfig: ApiConfig;
  resBodyConfig: ApiConfig;
};

/* reqConfig | resConfig */
export type ApiConfig = {
  [key: string]: ApiConfigItem;
};

export type ApiConfigKey = keyof ApiConfigItem;

export type ApiConfigItem = {
  description: string;
  memo: string;
  value?: string;
  data?: ApiConfig;
  list?: ApiConfig;
  [key: string]: any;
};

/* infoConfig */
export type InfoConfig = {
  taskId: string;
  name: string;
  serviceType: string;

  taskIdText?: string;
};
