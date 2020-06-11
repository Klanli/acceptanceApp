export default {
	data() {
		return {
			percent: 70,
			optionData: [
				{label:'待验收',value:'222'},
				{label:'待验收',value:'222'},
				{label:'待验收',value:'222'},
				{label:'待验收',value:'222'},
				{label:'待验收',value:'222'},
				{label:'待验收',value:'222'}
			],
			list: [
				{title:'热门'},
				{title:'热门'},
				{title:'热门'},
				{title:'热门'},
			]
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
