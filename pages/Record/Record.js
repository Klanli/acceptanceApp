export default {
	data() {
		return {
			value: '',
			content: '',
			// border: false,
			// height: 100,
			// autoHeight: true,
			checkList: '', //抽样回来的数据
			checkNum: '', //检查数量
			acceptRecode: '', //验收记录
			isNoDataReview: true,
		}
	},
	onLoad(option) {
		// let checkList = JSON.parse(option.checkList)
		let _this = this
		// console.log(option.checkList)
		if (option.checkList) {
			this.checkList += option.checkList
			// console.log(this.checkList)
		}
		

	},
	onShow() {
		// 取projectId
		let _this = this
		uni.getStorage({
			key: 'projectInfo',
			success: function(res) {
				console.log(res.data);
				_this.projectId = _this.splitStr(res.data[0].valut)[0]
				_this.getContent()
			}
		})
	},

	methods: {
		//页面内容回填
		getContent() {
			let _this = this
			uni.getStorage({
				key: 'checkContent',
				success: function(res) {
					console.log(res)
					_this.content = res.data.title,
						_this.checklistId = res.data.id
					if (res.data.standardId == 'standard_001') {
						console.log(1)
						_this.isNoDataReview = true
					} else {
						console.log(2)
						_this.isNoDataReview = false
					}
					_this.getData()
				}
			})
		},
		getrequire() {
			uni.navigateTo({
				url: `/pages/Require/Require`,
			});
		},
		toBuildInfo() {
			uni.navigateTo({
				url: `/pages/buildInfo/BuildInfo`,
			});
		},
		toProblem() {
			uni.navigateTo({
				url: `/pages/Problem/Problem`,
			});
		},
		toMethods() {
			uni.navigateTo({
				url: `/pages/acceptMethods/AcceptMethods`,
			});
		},
		toRules() {
			uni.navigateTo({
				url: `/pages/rules/Rule`,
			});
		},
		uploadFiles() {
			// console.log(type)
			uni.chooseImage({
				success: (chooseImageRes) => {
					const tempFilePaths = chooseImageRes.tempFilePaths;
					uni.uploadFile({
						url: 'http://39.104.90.111:2225/upload', //仅为示例，非真实的接口地址
						filePath: tempFilePaths[0],
						name: 'file',
						formData: {
							'user': 'test'
						},
						success: (uploadFileRes) => {
							let res = JSON.parse(uploadFileRes.data)
							if (res.httpStatus == 200) {
								this.saveFile(res.result)
							} else {
								this.$refs.uToast.show({
									title: '上传失败，请检查网络，文件大小，文件格式',
									type: 'error',
									duration: 3000
								})
							}
						},
						fail: (err) => {
							this.$refs.uToast.show({
								title: '上传失败，请检查网络，文件大小，文件格式',
								type: 'error',
								duration: 3000
							})
						}
					});
				}
			});
		},
		//切割字符串
		splitStr(str) {
			let s = '';
			s = str.split('*')
			return s
		},
		//切割字符串
		splitStrD(str) {
			let s = '';
			s = str.split('.')
			return s
		},
		// 提交
		async onSubmit() {
			let param = {};
			console.log(this.isNoDataReview)
			if (this.isNoDataReview) {
				param = {
					record: {
						checkNum: this.checkNum,
						checkPart: this.checkList,
						checklistId: this.checklistId,
						contentRecord: this.acceptRecode,
						isApp: 1,
						projectId: this.projectId,
						result: this.value
					}

				}
			} else {
				param = {
					reviewRecord: {
						checklistId: this.checklistId,
						nonconformityDetail: this.acceptRecode,
						projectId: this.projectId,
						result: this.value
					}

				}
			}
			param = JSON.stringify(param)
			let res = await this.$api.POST_submitRecode(param)
			if (res.httpStatus == 200) {
				this.$refs.uToast.show({
					title: '提交成功',
					type: 'success',
					duration: 2000
				})
			} else {
				this.$refs.uToast.show({
					title: '提交失败，请检查网络，填写项',
					type: 'error',
					duration: 3000
				})
			}
		},
		// 保存文件
		async saveFile(url) {
			let type = this.splitStrD(url)[0]
			let param = {
				checklistId: this.checklistId,
				projectId: this.projectId,
				type,
				uploadName: url,
				uploadUrl: url
			}
			let res = await this.$api.POST_addUpload(param)
			if (res.httpStatus == 200) {
				this.$refs.uToast.show({
					title: '上传成功',
					type: 'success',
					duration: 2000
				})
			} else {
				this.$refs.uToast.show({
					title: '上传失败，请检查网络，文件格式',
					type: 'error',
					duration: 3000
				})
			}
		},
		// 数据回填
		async getData() {
			console.log(this.checklistId)
			console.log(this.projectId)
			let param = {
				checklistId: this.checklistId,
				projectId: this.projectId,
			}
			let res = await this.$api.POST_getRecordByChecklistId(param)
			console.log(res)
			if (res.httpStatus == 200) {
            if(this.isNoDataReview){
				this.checkList = res.result.result.checkPart
				this.checkNum = res.result.result.checkNum
				this.acceptRecode = res.result.result.contentRecord
				this.value = res.result.result.result
			}else{
				this.acceptRecode = res.result.result.contentRecord
				this.value = res.result.result.result
			}
			}
		}
	}
}
