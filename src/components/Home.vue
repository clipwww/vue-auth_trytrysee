<template>
	<div class="col-sm-6 col-sm-offset-3">
		<h1>取得不需授權的 Chunck Norris 名言</h1>
		<button class="btn btn-primary" v-on:click="getQuote">取得名言</button>
		<div class="quote-area" v-if="quote">
			<h2><blockquote>{{ quote }}</blockquote></h2>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				quote: ''
			}
		},
		methods:{
			getQuote(){
				this.$http.get('http://localhost:3001/api/random-quote').then((res) => {
					this.quote = res.data
				}).catch((err) => { console.log(err) })
			}
		}
	}
</script>