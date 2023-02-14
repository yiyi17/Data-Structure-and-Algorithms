export type contentTypes = {
  id?: string;
  contentType: string;
  contentName: string;
  urlType: number;
  semanticsType: number;
  remark: string;
  creator?: string;
  updater?: string;
  createTime?: number;
  updateTime?: number;
};

export enum DRAWER_OPEN_TYPE {
  EDIT,
  CREATE,
}

export enum ID_TOKEN {
  both,
  id,
  token,
}
