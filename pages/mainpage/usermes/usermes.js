export default {
	data() {
		return {
			
		};
	},
	onLoad() {
		
	},
	methods: {
		login() {
			uni.redirectTo({
			    url: '/pages/login/login'
			});
		}
	}
};