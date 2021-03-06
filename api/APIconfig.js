export default {
	get: {
		GET_TEST:'api/b/bid/drugs/getPageList', 
		// GET_TEST:'api/b/bid/login/_login', 
	},
	post: {
		// POST_TEST:'api/b/bid/drugs/getBidDrugList', 
		POST_login:'s_login',  //登录
		POST_getUserInfo:'getLoginAccountInfo',  //获取当前用户详情
		POST_getAppStatisticalDto:'app/home/getAppStatisticalDto',  //首页统计
		POST_getProjectsByUser:'app/project/getProjects',  //获取当前用户项目列表
		POST_getProjectInfo:'app/project/get',  //获取项目信息
		POST_getAcceptContent:'ac/get',  //验收内容 -> 获取6大类
		POST_buildType:'dictionary/getAc_1_jie_gou_type',  //验收内容 -> 获取结构类型
		POST_refractoryLevelId:'dictionary/getAc_1_nai_huo_level',  //验收内容 -> 获取耐火等级
		POST_getMenus:'ac/getMenus',  //验收内容 -> 获取消防设施一级菜单
		POST_getDocumentByProjectId:'app/task/getDocumentByProjectId',  //根据项目获取现场评定 + 资料审查内容
		POST_getQuestionByCheckListId:'app/record/getQuestionByCheckListId', //根据checklistId查询一批常见问题
		POST_submitRecode:'app/record/replace' ,//统一提交（现场评定 + 资料审查)
		POST_addUpload:'app/record/upload/add' ,//添加上传验收文件地址信息
		POST_getRecordByChecklistId:'app/record/getRecordByCheckListId' ,//获取填写的现场评定记录 - 包含附件
		POST_updatePwd:'user/updateUser',//修改密码
	}
}
