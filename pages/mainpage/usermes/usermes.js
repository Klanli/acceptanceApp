export default {
	data() {
		return {
			src: 'http://img2.imgtn.bdimg.com/it/u=2669898717,1590930959&fm=26&gp=0.jpg',
			checked: true,
			show: false,
			pwd: '',
			border: true,
			maskCloseAble: true,
			showCancelButton: true
		};
	},
	onLoad() {
		let _this = this
		uni.getStorage({
			key: 'userInfo',
			success: function(res) {
				_this.userId = res.data.userId
			}
		})
	},
	methods: {
		login() {
			uni.navigateTo({
				url: '/pages/login/login'
			});
		},
		open() {
			this.show = true;
		},
		async confirm() {
			console.log(this.pwd)
			let param = {
				password: this.pwd,
				userId: this.userId
			}
			let res = await this.$api.POST_updatePwd(param)
			console.log(res)
			if(res.httpStatus==200){
				this.$refs.uToast.show({
					title: '修改成功',
					type: 'success',
					duration: 1000
				})
			}else{
				this.$refs.uToast.show({
					title: '网络请求失败',
					type: 'warning',
					duration: 1000
				})
			}
		}
	}
};
