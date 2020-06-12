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
				{title:'热门1'},
				{title:'热门2'},
				{title:'热门3'},
				{title:'热门4'},
			]
		};
	},
	onLoad() {

	},
	methods: {
		check(val) {
			uni.navigateTo({
			    url: `/pages/ProjectInfo/ProjectInfo?param=${val.title}`
			});
		},
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
