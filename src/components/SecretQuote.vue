<template>
	<div class='col-sm-12'>
		<h1>取得需要授權的名言</h1>
		<button class='btn btn-warning' v-on:click='getQuote()'>取得名言</button>
		<div class="quote-area" v-if="quote">
			<h2><blockquote>{{ quote }}</blockquote></h2>
		</div>
	</div>
</template>

<script>
	import auth from '../auth';

	export default{
		data(){
			return {
				quote: '',
				headers: auth.getAuthHeader()
			}
		},
		methods:{
			getQuote(){
				console.log(this.headers);
				this.$http.get('http://localhost:3001/api/protected/random-quote', {
					headers: this.headers
				}).then((res)=>{
					this.quote = res.data;
				}).catch((err)=>{
					console.log(err);
				})
			}
		},
		route:{
			canActivate(){
				return auth.user.authenticated
			}
		}
	}

</script>