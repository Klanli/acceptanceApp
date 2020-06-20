export default {
	
	data() {
		return {
			ruleContent:''
		}
	},
	onLoad(){
		let _this = this
		uni.getStorage({
			key: 'checkContent',
			success: function(res) {
				console.log(res.data);
				_this.ruleContent = res.data.rules
			}
		})
	},
}