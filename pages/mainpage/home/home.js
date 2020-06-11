export default {
	data() {
		return {
			show: true,
			mode: 'date'
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
					limit:10000
				}
			  }
			let res = await this.$api.POST_TEST(param)	
			
		}
	}
};
