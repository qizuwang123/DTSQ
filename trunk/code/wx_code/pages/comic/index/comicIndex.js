var urlUtil = require('../../../utils/urlUtil.js')
var BANNER_PATH = "c=MainRecommend&a=get_main_advertise"

Page({
	data:{
		bannars : [],
		loading_count : 1
	},

	onLoad () {
    //调用应用实例的方法获取全局数据
	    urlUtil.fetchApi(BANNER_PATH, (err, data) => {
	    	// console.log(err);
			// console.log(data);
	    	if (!err) {
	    		
	    		--this.data.loading_count;
	    		this.setData({bannars: data.data, loading_count: this.data.loading_count })
	    		console.log(this.data.bannars);
	    		console.log(this.data.loading_count)
	    	}
			
	    },
	    {userid:0 , ui:0, ui_id:0, type:0}
	    )
  }
})

