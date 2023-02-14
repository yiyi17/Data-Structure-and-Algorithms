export enum AuditType {
  ISubmitted,
  IDealWith,
}

export const AuditTypeNameMap = new Map([
  [AuditType.ISubmitted, '我提交的'],
  [AuditType.IDealWith, '我处理的'],
]);

export enum DemandStatus {
  Designing,
  FirstAuditing,
  SecondAuditing,
  Testing,
  Passed,
}

export const DemandStatusNameMap = new Map([
  [DemandStatus.Designing, '设计中'],
  [DemandStatus.FirstAuditing, '一级审核中'],
  [DemandStatus.SecondAuditing, '二级审核中'],
  [DemandStatus.Testing, '测试中'],
  [DemandStatus.Passed, '已通过'],
]);
