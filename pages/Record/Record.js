export default {
	data() {
		return {
			value:''
		}
	},
	methods: {
		getrequire() {
			uni.navigateTo({
			    url: `/pages/Require/Require`,
			});
		}
	}
}