import {router} from '../index';

const API_URL = 'http://localhost:3001';

export default{
	user:{
		authenticated: false
	},
	login(context, creds, redirect){
		var url = API_URL + '/sessions/create'

		context.$http.post(url, creds).then((res)=> {
			localStorage.setItem('id_token', res.data.id_token);
			this.user.authenticated = true;
			console.log('Login successfully', res.data.id_token);
			if(redirect){
				router.go(redirect);
			}
		}).catch((err)=>{
			context.error = err.data;
		});
	},
	signup(context, creds, redirect){
		var url = API_URL + '/users'

		context.$http.post(url, creds).then((res)=> {
			localStorage.setItem('id_token', res.data.id_token);
			this.user.authenticated = true;

			if(redirect){
				router.go(redirect);
			}
		}).catch((err)=>{
			context.error = err.data;
		});
	},
	logout(){
		localStorage.removeItem('id_token');
		this.user.authenticated = false;
	},
	check(){
		var jwt = localStorage.getItem('id_token');
		if(jwt){
			this.user.authenticated = true;
		}else{
			this.user.authenticated = false;
		}
	},
	getAuthHeader(){
		console.log("Authorization");
		return{
			'Authorization': 'Bearer ' + localStorage.getItem('id_token')
		}
	}
}