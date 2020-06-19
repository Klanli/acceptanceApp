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
		},
		toBuildInfo(){
			uni.navigateTo({
			    url: `/pages/buildInfo/BuildInfo`,
			});
		},
		toProblem(){
			uni.navigateTo({
			    url: `/pages/Problem/Problem`,
			});
		},
	}
}