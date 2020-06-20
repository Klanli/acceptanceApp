export default {
	
	data() {
		return {
			// actionstyle:{
			// 	color: '#fff',
			// },
			// keyword:'',
			methods:'&emsp;涉及多个部分随便对付嘎斯的自尊<br/>心奶还打算年底不合格把谷歌'
		}
	},
	onLoad(){
		let _this = this
		uni.getStorage({
			key: 'checkContent',
			success: function(res) {
				console.log(res.data);
				_this.methods = res.data.checkContent
			}
		})
	},
}