export default {
	data() {
		return {
			form: {
				name: '',
				intro: '',
				sex: ''
			}
		};
	},
	onLoad() {

	},
	methods: {
		login() {
			uni.switchTab({
			    url: '/pages/mainpage/home/home'
			});
		}
	}
};