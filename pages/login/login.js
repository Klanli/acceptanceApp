export default {
	data() {
		return {
			form: {
				name: '',
				pasd: '',
				phone: '',
				code: ''
			},
			list: [{name: '账户密码登录'}],
			current: 0,
			codeText: '',
			autologin: false
		};
	},
	onLoad() {
		// uni.clearStorage()
	},
	methods: {
		async login() {
			let param = {
				phone: this.form.name,
				password: this.form.pasd,
				system: '1'
			}
			let res = await this.$api.POST_login(param)
			if (res.httpStatus == 200) {
				// console.log(res)
				uni.setStorage({
					key: 'sid',
					data: res.result,
					success: function() {
						uni.switchTab({
							url: '/pages/mainpage/home/home'
						});
					}
				})
			}else{
				this.$refs.uToast.show({
					title: '账号或密码错误',
					type: 'error',
					duration: 2000
				})
			}

		},
		
		change(index) {
			this.current = index;
		},

		codeChange(text) {
			this.codeText = text;
		},
		getCode() {
			if (this.$refs.uCode.canGetCode) {
				// 模拟向后端请求验证码
				uni.showLoading({
					title: '正在获取验证码'
				})
				setTimeout(() => {
					uni.hideLoading();
					// 通知验证码组件内部开始倒计时
					this.$refs.uCode.start();
				}, 1000);
			} else {
				this.$u.toast('倒计时结束后再发送');
			}
		}
	}
};
