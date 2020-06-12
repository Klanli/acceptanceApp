export default {
	data() {
		return {
			itemStyle: {
				backgroundColor: '#b3b3b3',
				borderBottom: '1px solid #343440',
			},
			baseInfo:[
				{label:'工程名称：',value:''},
				{label:'工程地址：',value:'死而复生如火如荼后台和肉体和挺好二二杠Earhart二哥啊我个人啊'},
				{label:'建设单位：',value:''},
				{label:'联系人：',value:''},
				{label:'联系电话：',value:''},
				{label:'工程类别：',value:''},
				{label:'使用性质：',value:''},
				{label:'火灾危险性：',value:''},
				{label:'总建筑面积：',value:''},
				{label:'凭证文号：',value:''},
				{label:'申请日期：',value:''},
			],
			basetabInfo:[
				{label:'建筑名称：',value:''},
				{label:'结构类型：',value:'死而复生如火如荼后台和肉'},
				{label:'耐火等级：',value:''},
				{label:'地上层数：',value:''},
				{label:'地下层数：',value:''},
				{label:'建筑高度：',value:''},
				{label:'建筑长度：',value:''},
				{label:'占地面积：',value:''},
				{label:'地上建筑面积：',value:''},
				{label:'地下建筑面积：',value:''},
			],
			list: [{
				name: '单位建筑'
			}, {
				name: '储罐'
			}, {
				name: '堆场'
			}, {
				name: '建筑保温'
			}],
			checkboxlist: [
				{
					name: '火灾自动报警系统',
					checked: false,
				},
				{
					name: '自动喷水灭火系统',
					checked: true,
				},
				{
					name: '消火栓系统',
					checked: false,
				},
				{
					name: '防烟排烟及通风，空调系统',
					checked: false,
				},
				{
					name: '消防电气',
					checked: false,
				},
				{
					name: '建筑灭火器',
					checked: false,
				},
				{
					name: '泡沫灭火系统',
					checked: false,
				},
				{
					name: '气体灭火系统',
					checked: false,
				},
				{
					name: '消防电梯',
					checked: false,
				},
			],
			current: 0
		};
	},
	onLoad(option) {
		uni.setNavigationBarTitle({
		    title: option.param
		});
	},
	methods: {
		changetab(index) {
			this.current = index
			this.basetabInfo = this.basetabInfo.map(item => {
				return {
					label:item.label,
					value: index
				}
			})
		}
	}
};