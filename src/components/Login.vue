<template>
	<div class='col-sm-12'>
		<div class="text-center">
			<h2>登入</h2>
			<p>登入帳號取得更棒的名言</p>
			<div class='alert alert-danger' v-if='error'>{{ error }}</div>
		</div>
		
		<div class="form-horizontal">
			<div class='form-group'>
				<label for="username" class="col-sm-4 control-label">帳號</label>
				<div class="col-sm-6">
					<input id="username" name="username" type='text' class='form-control' placeholder="請輸入使用者帳號" v-model='credentials.username'>
				</div>
			</div>
			<div class='form-group'>
				<label for="password" class="col-sm-4 control-label">密碼</label>
				<div class="col-sm-6">
					<input id="password" name="password" type='password' class='form-control' placeholder="請輸入使用者密碼" v-model='credentials.password'>
				</div>
			</div>
			<div class='form-group'>
				<div class="col-sm-offset-4 col-sm-8">
					<button class='btn btn-primary' v-on:click='submit'>登入並存取</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import auth from '../auth';

	export default{
		data(){
			return{
				credentials:{
					username: '',
					password: ''
				},
				error: ''
			}
		},
		methods:{
			submit(){
				// var credentials = {
				// 	username: this.credentials.username,
				// 	password: this.credentials.password
				// }
				auth.login(this, this.credentials, 'secretquote');
			}
		}
	}
</script>