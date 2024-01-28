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
