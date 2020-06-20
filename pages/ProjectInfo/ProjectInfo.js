export default {
	data() {
		return {
			itemStyle: {
				backgroundColor: '#b3b3b3',
				color: '#fff',
				borderBottom: '1px solid #eee',
			},
			headsty: {
				color: '#fff'
			},
			baseInfo: [{
					label: '工程名称：',
					value: ''
				},
				{
					label: '工程地址：',
					value: ''
				},
				{
					label: '建设单位：',
					value: ''
				},
				{
					label: '联系人：',
					value: ''
				},
				{
					label: '联系电话：',
					value: ''
				},
				{
					label: '工程类别：',
					value: ''
				},
				{
					label: '使用性质：',
					value: ''
				},
				{
					label: '火灾危险性：',
					value: ''
				},
				{
					label: '总建筑面积：',
					value: ''
				},
				{
					label: '凭证文号：',
					value: ''
				},
				{
					label: '申请日期：',
					value: ''
				},
			],
			basetabInfo: [
				[{
						label: '建筑名称：',
						value: ''
					},
					{
						label: '结构类型：',
						value: ''
					},
					{
						label: '耐火等级：',
						value: ''
					},
					{
						label: '地上层数：',
						value: ''
					},
					{
						label: '地下层数：',
						value: ''
					},
					{
						label: '建筑高度：',
						value: ''
					},
					{
						label: '建筑长度：',
						value: ''
					},
					{
						label: '占地面积：',
						value: ''
					},
					{
						label: '地上建筑面积：',
						value: ''
					},
					{
						label: '地下建筑面积：',
						value: ''
					}
				],
				[{
						label: '建筑名称：',
						value: ''
					},
					{
						label: '结构类型：',
						value: ''
					},
					{
						label: '耐火等级：',
						value: ''
					},
					{
						label: '地上层数：',
						value: ''
					},
					{
						label: '地下层数：',
						value: ''
					},
					{
						label: '建筑高度：',
						value: ''
					},
					{
						label: '建筑长度：',
						value: ''
					},
					{
						label: '占地面积：',
						value: ''
					},
					{
						label: '地上建筑面积：',
						value: ''
					},
					{
						label: '地下建筑面积：',
						value: ''
					}
				]
			],
			list: [{
				name: '单位建筑'
			}, {
				name: '储罐'
			}, {
				name: '堆场'
			}, {
				name: '建筑保温'
			}],
			checkboxlist: [
					
			],
			current: 0,
			projectList: [],
			show: false,
			acceptContent: { //验收内容
				ac1Builds: [],
				ac2StoragesTanks: [],
				ac3Yards: [],
				ac4BuildingInsulations: [],
				ac5Decorations: [],
				ac6Usages: []
			},
			buildTypeList: [], //结构类型
			refractoryLevelList: [], //耐火等级
		};
	},
	// onLoad(option) {
	// 	uni.setNavigationBarTitle({
	// 		title:'工程项目,'
	// 	});
	// },
	onLoad() {
		uni.setNavigationBarTitle({
			title: '工程项目,'
		});
		this.getOptions()
		this.getProjects()
	},
	methods: {
		//打开折叠面板
		OnBuild(activeNames){
			console.log(activeNames)
			switch(activeNames){
				case 0 :
				this.getProjectInformation(this.splitStr(this.projectList[0].value)[0])
				break;
				case 1:
				this.getAccept(this.splitStr(this.projectList[0].value)[1])
				// _this.changetab(1)
				_this.changetab(0)
				break;
				default:
				console.log(this.splitStr(this.projectList[0].value)[0])
				console.log(this.splitStr(this.projectList[0].value)[1])
				this.getFacilities(this.splitStr(this.projectList[0].value)[0],this.splitStr(this.projectList[0].value)[2])
			}
			
		},
		//打开项目列表
		onProjectList() {
			this.show = true
		},
		//请求项目列表
		getProjects() {
			let _this = this
			uni.getStorage({
				key: 'userInfo',
				success: async function(res) {
					let param = {
						userId: res.data.userId
					}
					//获取项目
					let res1 = await _this.$api.POST_getProjectsByUser(param)
					if (res1.httpStatus == 200) {
						_this.projectList = res1.result.map(item => {
							console.log(res1)
							return {
								label: item.projectName,
								value: item.projectId + '*' + item.acContentId + '*' + item.standardId
								// extra:item.acContentId
								// _this.getList(_this.splitStr(_this.projectList[0].value)[0])
							}
						})
						// _this.getProjectInformation(_this.splitStr(_this.projectList[0].value)[0])
						// _this.getAccept(_this.splitStr(_this.projectList[0].value)[1])
						// console.log(_this.splitStr(_this.projectList[0].value)[1])
						// _this.changetab(1)
						// _this.changetab(0)

					}
				}
			})

		},
		//选中项目
		confirm(e) {
			// console.log(e);
			let projectId = this.splitStr(e[0].valut)[0]
			let contentId = this.splitStr(e[0].valut)[1]
			let standardId = this.splitStr(e[0].valut)[2]
			this.getProjectInformation(projectId)
			this.getAccept(contentId)
			this.getFacilities(projectId, standardId)

		},
		//获取项目基本信息
		async getProjectInformation(a) {
			let param = {
				projectId: a
			}
			let res = await this.$api.POST_getProjectInfo(param)
			if (res.httpStatus == 200) {
				this.baseInfo = [{
						label: '工程名称：',
						value: res.result.project.projectName
					},
					{
						label: '工程地址：',
						value: res.result.projectInfo.regionName
					},
					{
						label: '建设单位：',
						value: res.result.projectInfo.factoryName
					},
					{
						label: '联系人：',
						value: res.result.projectInfo.contactUser
					},
					{
						label: '联系电话：',
						value: res.result.projectInfo.contactPhone
					},
					{
						label: '工程类别：',
						value: res.result.projectInfo.typeName
					},
					{
						label: '使用性质：',
						value: res.result.projectInfoUsages[0].usageName
					},
					{
						label: '火灾危险性：',
						value: res.result.projectInfo.dangerousLevelName
					},
					{
						label: '总建筑面积：',
						value: res.result.projectInfo.constructionArea
					},
					{
						label: '凭证文号：',
						value: res.result.projectInfo.certificateNumber
					},
					{
						label: '申请日期：',
						value: this.getTime(res.result.projectInfo.time)
					},
				]
			}


		},
		//日期处理
		getTime(time) {
			let str = ''
			let date = new Date(time)
			let year = date.getFullYear()
			let month = date.getMonth() + 1
			let day = date.getDate()
			str = `${year}-${month}-${day}`
			return str
		},
		//切割字符串
		splitStr(str) {
			let s = '';
			s = str.split('*')
			return s
		},
		//获取验收内容6项
		changetab(index) {
			this.current = index
			switch (index) {
				case 1:
					console.log(1)
					break;
				case 2:
					console.log(2)
					break;
				case 3:
					console.log(3)
					break;
				case 4:
					console.log(4)
					break;
				case 5:
					console.log(5)
					break;
				default:
// console.log(111)
					this.basetabInfo = this.acceptContent.ac1Builds.map(item => {
						let buildTypeId = '';
						this.buildTypeList.forEach(i => {
							if (i.dictionaryId == item.buildTypeId) {
								buildTypeId = i.name
							}
						})
						let refractoryLevelId = '';
						this.refractoryLevelList.forEach(i => {
							if (i.dictionaryId == item.refractoryLevelId) {
								refractoryLevelId = i.name
							}
						})
						return [{
								label: '建筑名称：',
								value: item.buildName
							},
							{
								label: '结构类型：',
								value: buildTypeId
							},
							{
								label: '耐火等级：',
								value: item.refractoryLevelId
							},
							{
								label: '地上层数：',
								value: item.inTheUpperNumber + '层'
							},
							{
								label: '地下层数：',
								value: item.numberOfUnderground + '层'
							},
							{
								label: '建筑高度：',
								value: item.buildHeight + 'm'
							},
							{
								label: '建筑长度：',
								value: item.buildLen + 'm'
							},
							{
								label: '占地面积：',
								value: item.coversArea + 'm²'
							},
							{
								label: '地上建筑面积：',
								value: item.aboveGroundFloorArea + 'm²'
							},
							{
								label: '地下建筑面积：',
								value: item.undergroundFloorSpace + 'm²'
							}
						]


					})
					console.log(this.basetabInfo)

			}
		},

		async getAccept(contentId) {
			let param = {
				contentId: contentId
			}
			//获取项目
			let res1 = await this.$api.POST_getAcceptContent(param)
			if (res1.httpStatus == 200) {
				this.acceptContent = res1.result
				console.log(this.acceptContent)
			}

		},
		//获取下拉框数据
		async getOptions() {
			//获取项目
			let res1 = await this.$api.POST_buildType()
			if (res1.httpStatus == 200) {
				this.buildTypeList = res1.result
			}
			let res2 = await this.$api.POST_refractoryLevelId()
			if (res2.httpStatus == 200) {
				this.refractoryLevelList = res1.result
			}
		},
		//获取消防设施
		async getFacilities(projectId, standardId) {
			//获取项目
			let param = {
				projectId,
				standardId
			}
			let res1 = await this.$api.POST_getMenus(param)
			if (res1.httpStatus == 200) {
				// this.buildTypeList = res1.result
				console.log(res1)
				this.checkboxlist = res1.result.primaryTitles.map(item => {
					return {
						name: item.titleName,
						checked: item.selected,
						disabled: true
					}
				})
			}

		},
	}
}
