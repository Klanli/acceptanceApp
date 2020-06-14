export default {
	data() {
		return {
			src: 'http://img2.imgtn.bdimg.com/it/u=2669898717,1590930959&fm=26&gp=0.jpg',
			checked: true
		};
	},
	onLoad() {
		
	},
	methods: {
		login() {
			uni.navigateTo({
			    url: '/pages/login/login'
			});
		}
	}
};