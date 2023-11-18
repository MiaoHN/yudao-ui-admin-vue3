import CrmTeam from './CrmTeamList.vue'

enum CrmBizTypeEnum {
  CRM_LEADS = 1, // 线索
  CRM_CUSTOMER = 2, // 客户
  CRM_CONTACTS = 3, // 联系人
  CRM_BUSINESS = 5, // 商机
  CRM_CONTRACT = 6 // 合同
}

enum CrmPermissionLevelEnum {
  OWNER = 1, // 负责人
  READ = 2, // 读
  WRITE = 3 // 写
}

export { CrmTeam, CrmBizTypeEnum, CrmPermissionLevelEnum }
