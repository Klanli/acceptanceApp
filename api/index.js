import apilist from './APIconfig.js'
import { BASEURL } from './HOSTconfig.js'


let Token = 'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1OTE4ODkxMjksInN1YmplY3QiOiIxMSIsInRhcmdldCI6IlNZU1RFTSIsImV4cCI6MTU5MTg5OTkyOX0.JR0ppLZfk2ung3mcsTv-JKWhVcTYE5bwXumOebPOCMWkp30wOsEzkB6Vxuh89wGaKA7jIU5H61fZJRc_CGYQrw'

const api = (() => {
    let apiobj = {}
    Object.keys(apilist.get).forEach(curr => {
        apiobj[curr] = data => {
            return uni.request({
                url: BASEURL + apilist.get[curr],
                method: 'GET',
                data:{...data}
            }).then(res => {
				if (res[1].statusCode !== 200) {
					uni.showToast({
					    title: '数据请求异常，请重试',
						image:'/static/warning.png',
					    duration: 1000,
						mask: true
					});
					return Promise.reject(res[0]);
				}
				return res[1]  //自己根据后端返回数据结构习惯，抛出需要的数据
			})
			return result
        }
    })
	Object.keys(apilist.post).forEach(cur => {
        apiobj[cur] = data => {
			uni.showLoading({
				title: '加载中'
			});
            return uni.request({
				header:{
					'content-type': 'application/json',
					'Accept':'application/json, */*',
					'Access-Token': Token
				},
                url: BASEURL + apilist.post[cur],
                method: 'POST',
                data:{...data}
            }).then(res => {
				if (res[1].statusCode !== 200) {
					uni.hideLoading();
					uni.showToast({
					    title: '数据请求异常，请重试',
						image:'/static/warning.png',
					    duration: 1000,
						mask: true
					});
					return Promise.reject(res[0]);
				}
				uni.hideLoading();
				return res[1] //自己根据后端返回数据结构习惯，抛出需要的数据
			})
        }
    })
    return apiobj
  })()
  
  export default api
