export default {
	data() {
		return {
			accordion: [{
					id: 0,
					title: '标题文字555',
					content: '手风琴效果',
					animation: true
				},
				{
					id: 1,
					title: '标题文字的方式',
					content: '手风琴效果',
					animation: true
				},
				{
					id: 2,
					title: '标题文字fgj',
					content: '手风琴效果',
					animation: true
				}
			],
			projectList:[],
			show:false
		}
	},
	onLoad(){
		this.getProjects()
	},
	methods: {
		change(e) {},
		
		async getList(id){ //请求数据
			let param = {
				projectId: id
			}
			let res = await this.$api.POST_getDocumentByProjectId(param)
			if (res.httpStatus == 200) {
				console.log(res)
				}
		},
		assess() {
			uni.navigateTo({
			    url: `/pages/Record/Record`
			});
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
							console.log(res1)
							return {
								label: item.projectName,
								value: item.projectId + '*' + item.acContentId + '*' + item.standardId
		
							}
						})
		
					}
				}
			})
		
		},
		//选中项目
		confirm(e) {
			console.log(e);
			let projectId = this.splitStr(e[0].valut)[0]
			// let contentId = this.splitStr(e[0].valut)[1]
			// let standardId = this.splitStr(e[0].valut)[2]
			// this.getProjectInformation(projectId)
			// this.getAccept(contentId)
			// this.getFacilities(projectId, standardId)
			this.getList(projectId)
		
		},
		//切割字符串
		splitStr(str) {
			let s = '';
			s = str.split('*')
			return s
		},
	}
}