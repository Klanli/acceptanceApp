export default {
	data() {
		return {
			form: {
				name: '',
				pasd: '',
				phone:'',
				code:''
			},
			list: [{
				name: '账户密码登录'
			}, {
				name: '手机号登录'
			}],
			current: 0,
			codeText: '',
			autologin: false
		};
	},
	onLoad() {

	},
	methods: {
		login() {
			uni.switchTab({
			    url: '/pages/mainpage/home/home'
			});
		},
		change(index) {
			this.current = index;
		},
		
		codeChange(text) {
			this.codeText = text;
		},
		getCode() {
			if(this.$refs.uCode.canGetCode) {
				// 模拟向后端请求验证码
				uni.showLoading({
					title: '正在获取验证码'
				})
				setTimeout(() => {
					uni.hideLoading();
					// 通知验证码组件内部开始倒计时
					this.$refs.uCode.start();
				}, 1000);
			}else {
				this.$u.toast('倒计时结束后再发送');
			}
		}
	}
};