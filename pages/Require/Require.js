export default {
	
	data() {
		return {
			
			keyword:'',
			requiremess:'&emsp;涉及多个部分随便对付嘎斯的自尊<br/>心奶还打算年底不合格把谷歌'
		}
	},
	onLoad(){
		let _this = this
		uni.getStorage({
			key: 'checkContent',
			success: function(res) {
				_this.requiremess = res.data.technologyRequires
			}
		})
		
		let str = 'asdjanadnasndasdnasndasndsa'
		str = str.replace('as',`<span style='color:red'>as<span>`)
		console.log(str)
	},
	methods:{
		searchText(){
			var subStr = new RegExp(this.keyword,'g');
			     this.requiremess=this.requiremess.replace(subStr,"<span style='background-color:#808080'>"+this.keyword+"</span>")
		}
	}
}