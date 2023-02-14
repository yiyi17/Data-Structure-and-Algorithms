export type AuditItem = {
  allowAudit: boolean;
  allowTransfer: boolean;
  id: number;
  remark: string;
  auditId: string;
  name: string;
  demandStatus: number;
  type: number;
  submitTime: number;
  firstAuditPassTime: number;
  secondAuditPassTime: number;
  /**
   * 语义列表
   */
  semantics: {
    name: string;
    /**
     * 语义备注
     */
    remark: string;
    /**
     * 语义 id
     */
    id: number;
    /**
     * 审核状态
     */
    status: number;
  }[];
  submitter: {
    id: string;
    name: string;
    email: string;
  };
  isFinish: boolean;
  firstManagers: string[];
  secondManagers: string[];
  thirdManagers: string[];
  status: number;
  auditComment: string;
  auditDesc: string;
  creator: string;
  updater: string;
  createTime: string;
  updateTime: string;
  bpmLink: string;
};
