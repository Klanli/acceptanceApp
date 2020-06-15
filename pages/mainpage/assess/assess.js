export default {
	data() {
		return {
			accordion: [{
					id: 0,
					title: '标题文字213',
					content: '手风琴效果',
					animation: true
				},
				{
					id: 1,
					title: '标题文字的方式',
					content: '手风琴效果',
					animation: true
				},
				{
					id: 2,
					title: '标题文字fgj',
					content: '手风琴效果',
					animation: true
				}
			],
		}
	},
	methods: {
		change(e) {},
		assess() {
			uni.navigateTo({
			    url: `/pages/Record/Record`
			});
		}
	}
}