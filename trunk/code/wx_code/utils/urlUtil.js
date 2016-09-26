// 运行环境标志位，0:开发环境,1:生产环境
const ENV = 0 
//版本号
const version = "2.3.0"
//自定义的版本号，已废弃
const custom_version_code = 10
//渠道名
const CHANNEL_NAME = "kidstone"
//客户端类型
const app_model = "wxapp"




var HOST_INFO_DEV = {
	host : "http://djctestng.517w.com/",
		first_component : "dacu_app/app/?"
}

var HOST_INFO_DIST = {
	host : "http://dajiaochong.517w.com/",
	first_component : "dacu_app/app/?"
	
}
//请求头信息
function getUserAgent() {
  var infoRes = {}
  wx.getSystemInfo({
    success: function(res){
      infoRes = res
    }
  });
	
	var userAgent = "kidstone.cn" + "/"+ version + "/" + custom_version_code + "/" + infoRes.model + app_model + " " + infoRes.version;
	
	return userAgent; 
}

function getHost() {
	var host_info = ENV? HOST_INFO_DIST : HOST_INFO_DEV;
	return host_info.host + host_info.first_component;
}

// ========== 获取网络请求 ==========
function fetchApi(path, callback,param={}, host=getHost(), method="GET") {
  var url = host + path;
  var user_agent = getUserAgent();
  console.log(url);
  console.log(param);
  wx.request({
    url : url,
    data: param,
    method : method,
    header: { "Content-Type": "application/json",
    			// "User-Agent": user_agent
    			 },
    success (res) {
      callback(null, res.data)
    },
    fail (e) {
      callback(e)
    }
  })
}

module.exports = {
  getHost: getHost,
  getUserAgent : getUserAgent,
  fetchApi : fetchApi
}