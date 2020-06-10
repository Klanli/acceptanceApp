export default {
	data() {
		return {

		};
	},
	onLoad() {

	},
	methods: {
		async valChange() {
			let param = {
				'code': '9001',
				'flag': 'visite',
				'access': '18202825271',
				'data':{
					drugSpec: '',
					drugName: '',
					offset:0,
					limit:10
				}
			  }
			let res = await this.$api.POST_TEST(param)	
			
		}
	}
};
