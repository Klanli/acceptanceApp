export default {
	data() {
		return {
			form: {
				name: '',
				pasd: '',
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