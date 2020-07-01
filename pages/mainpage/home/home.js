export default {
	data() {
		return {
			percent: 0,
			optionData: [],
			list: [{
					title: '热门1'
				},
				{
					title: '热门2'
				},
				{
					title: '热门3'
				},
				{
					title: '热门4'
				},
			],
		};
	},
	onLoad() {},
	onShow() {
		this.getStatisticalData()
		this.getUserInformation()
	},
	methods: {
		//获取统计
		async getStatisticalData(a) {
			let res;
			if (a) {
				let param = {
					projectId: a
				}
				res = await this.$api.POST_getAppStatisticalDto(param)
			} else {
				res = await this.$api.POST_getAppStatisticalDto()
			}
			if (res.httpStatus == 200) {
				let {
					totalTasks,
					finishTasks,
					primaryFinishABTasks,
					primaryNonFinishABTasks,
					secondaryFinishCTasks,
					secondaryNonFinishCTasks
				} = res.result.result.evaluationStatisticalDto.totalCompletionProbabilityDto
				// console.log(totalTasks, finishTasks)
				if (totalTasks <= 0) {
					this.percent = 0;
				} else {
				this.percent = 	Math.floor(
						finishTasks / totalTasks * 100
					);
				}
				this.optionData = [{
						label: '待验收',
						value: ''
					},
					{
						label: '主控项：',
						value: primaryNonFinishABTasks
					},
					{
						label: '一般项：',
						value: secondaryNonFinishCTasks
					}, {
						label: '已验收',
						value: ''
					},
					{
						label: '主控项：',
						value: primaryFinishABTasks
					},
					{
						label: '一般项：',
						value: secondaryFinishCTasks
					}
					// {lable:'待验收',value:totalTasks-finishTasks},
				]
			}
			// let {}
		},
		//获取用户详情
		async getUserInformation() {
			let _this = this
			let res = await this.$api.POST_getUserInfo()
			if (res.httpStatus == 200) {
				// console.log(res.result.appToken)
				uni.setStorageSync('loginInfo', res.result.appToken)
				uni.setStorage({
					key: 'userInfo',
					data: res.result,
				})
				let param = {
					userId: res.result.userId
				}
				//获取项目
				let res1 = await this.$api.POST_getProjectsByUser(param)
				if (res1.httpStatus == 200) {
					// console.log(res1)
					this.list = res1.result.map(item=>{
						return{
							label:item.projectName,
							value:item.projectId
						}
					})
					
				}
			}

		},
		check(value){
			console.log(value)
			this.getStatisticalData(value)
		}

	}

}
