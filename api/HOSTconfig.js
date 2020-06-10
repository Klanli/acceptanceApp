const ONLINEHOST = 'http://mc.xlkyy.com.cn:8000/' //正式线上环境

const QAHOST = 'http://mctest.xlkyy.com.cn:18000/'  //测试线上环境

const ISONLINE = false //是否为正式环境：true为正式环境，false为测试环境，

const CURRENT = ISONLINE ? ONLINEHOST : QAHOST

const LOCALHOST = 'http://mc.xlkyy.com.cn:8000/' //本地开发环境

export const BASEURL = process.env.NODE_ENV === 'development' ? LOCALHOST : CURRENT
