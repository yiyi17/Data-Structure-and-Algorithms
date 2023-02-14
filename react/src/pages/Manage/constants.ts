export enum Type {
  'Add', // 增加
  'Update', // 更新
}

export enum Levels {
  'P0',
  'P1',
  'P2',
}

export enum AuditStatus {
  Waiting,
  Auditing,
  Reject,
  Passed,
  Revoke,
  Offline,
}

export enum SemanticsAuditStatusName {
  Waiting,
  FirstAuditing,
  FirstAudited,
  SecondAuditing,
  SecondAudited,
  Testing,
  Passed,
}

export enum SemanticsTemplateNames {
  BuriedPoint,
  PageExposure,
  CardExposure,
  JumpBehavior,
  ClickInteractionBehavior,
  OtherExposure,
  NonBusinessBehavior,
  MonitorBuriedPoint,
  AudioVideoPlayBack,
  Module,
}

export const SemanticsAuditStatus = new Map([
  [SemanticsAuditStatusName.Waiting, '待审核'],
  [SemanticsAuditStatusName.FirstAuditing, '一级审核中'],
  [SemanticsAuditStatusName.FirstAudited, '一级审核通过'],
  [SemanticsAuditStatusName.SecondAuditing, '二级审核中'],
  [SemanticsAuditStatusName.SecondAudited, '二级审核通过'],
  [SemanticsAuditStatusName.Testing, '测试中'],
  [SemanticsAuditStatusName.Passed, '已发布'],
]);

export const SemanticsTemplate = new Map([
  [SemanticsTemplateNames.PageExposure, '页面曝光'],
  [SemanticsTemplateNames.CardExposure, '卡片曝光'],
  [SemanticsTemplateNames.JumpBehavior, '跳转类行为'],
  [SemanticsTemplateNames.ClickInteractionBehavior, '点击交互类行为'],
  [SemanticsTemplateNames.OtherExposure, '其他类型曝光'],
  [SemanticsTemplateNames.NonBusinessBehavior, '非业务行为'],
  [SemanticsTemplateNames.MonitorBuriedPoint, 'Monitor 埋点'],
  [SemanticsTemplateNames.AudioVideoPlayBack, '音视频播放行为'],
]);
export const AuditStatusColor = new Map([
  [AuditStatus.Passed, 'green'],
  [AuditStatus.Offline, 'red'],
]);
export const AuditStatusNames = new Map([
  [AuditStatus.Passed, '已发布'],
  [AuditStatus.Offline, '已下线'],
]);

export const PageLevelNames = new Map([
  [0, '--'],
  [1, '1 级'],
  [2, '2 级'],
  [3, '3 级'],
  [4, '4 级'],
  [5, '5 级'],
  [6, '6 级'],
]);

export const SemanticsLevels = new Map([
  [0, 'P0'],
  [1, 'P1'],
  [2, '其他'],
]);

export const TypeNames = new Map([[0, '新增/更新埋点']]);

export const LevelNames = new Map([
  [0, 'P0'],
  [1, 'P1'],
  [2, '其他'],
]);

export enum RecordType {
  Page = 1,
  Semantic,
  Field,
  Template,
  Demand,
  Module,
}

export enum DemandStatus {
  Designing,
  FirstAuditing,
  SecondAuditing,
  Testing,
  Passed,
}

export const DemandStatusNames = new Map([
  [DemandStatus.Designing, '设计中'],
  [DemandStatus.FirstAuditing, '一级审核中'],
  [DemandStatus.SecondAuditing, '二级审核中'],
  [DemandStatus.Testing, '测试中'],
  [DemandStatus.Passed, '已发布'],
]);

export const PageAuditStatus = new Map([
  [0, '待审核'],
  [1, '审核中'],
  [2, '测试中'],
  [3, '已发布'],
  [4, '审核已撤销'],
  [5, '已下线'],
]);

// 埋点相关的初始化参数

export const ManageListPageId = '11306';
export const ManageListPageLevel = 1;
export const DetailPageId = '11307';
export const DetailPageLevel = 2;
export const TestDetailPageId = '11308';
export const TestDetailPageLevel = 2;

export const QuickTestPageId = '11309';
export const QuickTestPageLevel = 2;

export const CONTENT_NAME = 'detail.view.element_location.content.type';
export const CONTENT_ID_NAME = 'detail.view.element_location.content.id';
export const CONTENT_TOKEN_NAME = 'detail.view.element_location.content.token';
export const CONTENT_CN = '实体Type';
export const CONTENT_TYPE = {
  0: 'detail.view.element_location.content.type.id detail.view.element_location.content.type.token',
  1: 'detail.view.element_location.content.type.id',
  2: 'detail.view.element_location.content.type.token',
};

export const CONTENT_ITEMS = [
  'detail.view.element_location.content.type',
  'detail.view.element_location.content.id',
  'detail.view.element_location.content.token',
];
