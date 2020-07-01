export default {
	data() {
		return {
			accordion: [],
			projectList: [],
			show: false,
			projectId: '', //当前选中的projectId
			projectName:'云南省深深独家试爱组建项目'
		}
	},
	onShow() {
		this.getProjects()
	},
	methods: {
		change(e) {},

		async getList(id) { //请求数据
			let param = {
				projectId: id
			}
			let res = await this.$api.POST_getDocumentByProjectId(param)
			if (res.httpStatus == 200) {
				let list1 = res.result.tasksWithEvaluation.primaryTitles.map(item => {
					// console.log(item)
					return {
						finishTasksNum: item.finishTasksNum,
						totalTasksNum: item.totalTasksNum,
						num: `${item.finishTasksNum}/${item.totalTasksNum}`,
						title: `${item.finishTasksNum}/${item.totalTasksNum}` + '---' + item.titleName,
						animation: true,
						id: item.standardPrimaryTitleId,
						children: item.secondaryTitles.map(i => {
							return {
								finishTasksNum: i.finishTasksNum,
								totalTasksNum: i.totalTasksNum,
								num: `${i.finishTasksNum}/${i.totalTasksNum}`,
								title: `${i.finishTasksNum}/${i.totalTasksNum}` + '---' + i.titleName,
								animation: true,
								id: i.standardSecondaryTitleId,
								children: i.checklistList.map(j => {
									console.log(j)
									return {
										standardId: j.standardId,
										title: j.content,
										id: j.standardChecklistId,
										checkContent: j.checkContent,
										standardId: j.standardId,
										technologyRequires: j.technologyRequires,
										rules: j.rules,
										remark: j.remark,
										samplingRequires: j.samplingRequires
									}

								})
							}
						})
					}
				})
				let list2 = res.result.tasksWithLiteratureReview.primaryTitles.map(item => {
					return {
						finishTasksNum: item.finishTasksNum,
						totalTasksNum: item.totalTasksNum,
						num: `${item.finishTasksNum}/${item.totalTasksNum}`,
						title: `${item.finishTasksNum}/${item.totalTasksNum}` + '---' + item.titleName,
						animation: true,
						id: item.standardPrimaryTitleId,
						children: item.secondaryTitles.map(i => {
							return {
								finishTasksNum: i.finishTasksNum,
								totalTasksNum: i.totalTasksNum,
								num: `${i.finishTasksNum}/${i.totalTasksNum}`,
								title: `${i.finishTasksNum}/${i.totalTasksNum}` + '---' + i.titleName,
								animation: true,
								id: i.standardSecondaryTitleId,
								children: i.checklistList.map(j => {
									return {
										standardId: j.standardId,
										title: j.content,
										id: j.standardChecklistId,
										checkContent: j.checkContent,
										standardId: j.standardId,
										technologyRequires: j.technologyRequires,
										rules: j.rules,
										remark: j.remark

									}

								})
							}
						})
					}
				})
				this.accordion = list1.concat(list2)
			}
		},
		assess(val) {
			console.log(val)
			uni.setStorage({
				key: 'checkContent',
				data: val,
				success: function() {
					uni.navigateTo({
						url: '/pages/Record/Record'
					});
				}
			})
		},
		onProjectList() {
			this.show = true
		},
		//请求项目列表
		getProjects() {
			let _this = this
			uni.getStorage({
				key: 'userInfo',
				success: async function(res) {
					console.log(res)
					let param = {
						userId: res.data.userId
					}
					//获取项目
					let res1 = await _this.$api.POST_getProjectsByUser(param)
					if (res1.httpStatus == 200) {
						_this.projectList = res1.result.map(item => {
							return {
								label: item.projectName,
								value: item.projectId + '*' + item.acContentId + '*' + item.standardId

							}
						})
						_this.projectId = _this.projectList[0].value
						_this.getList(_this.splitStr(_this.projectId)[0])
						_this.projectName = _this.projectList[0].label
						uni.setStorage({
							key: 'projectInfo',
							data: _this.projectId
						})
					}
				}
			})

		},
		//选中项目
		confirm(e) {
			// console.log(e);
			let projectId = ''
			if (e[0].value) {
				projectId = this.splitStr(e[0].value)[0]
				this.projectId = e[0].value
			} else {
				projectId = this.splitStr(e[0].valut)[0]
				this.projectId = e[0].valut
			}
			this.getList(projectId)
			this.projectName = e[0].label
			uni.setStorage({
				key: 'projectInfo',
				data: this.projectId
			})

		},
		//切割字符串
		splitStr(str) {
			let s = '';
			s = str.split('*')
			return s
		},
	}
}
