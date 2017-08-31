import axios from 'axios'
class API {
	getList (param) {
		config.data.Method = "get";
		config.data.CustData.Data = param;
		return axios.post('/topics',{},config);
	}
	getCurrency (param) {
		console.log(config);
		var commonData = Object.create(config);
		
		config.data.Method="get";
		config.data.CustData.Data = param;
		return axios.post('/Router',{},config);
	}
}

export default API;
