<template>
	<div>	

		<nav class='navbar navbar-inverse navbar-fixed-top'>
			<div class='container'>
				<ul class="nav navbar-nav">
					<li><a v-link="'home'">Home</a></li>
					<li><a v-link="'login'" v-if="!user.authenticated">Login</a></li>
					<li><a v-link="'signup'" v-if="!user.authenticated">Signup</a></li>
					<li><a v-link="'secretquote'" v-if="user.authenticated">Secret Quote</a></li>
					<li><a v-link="'loging'" v-if="user.authenticated" v-on:click="logout">Logout</a></li>
				</ul>
			</div>
		</nav>

		<div class='container'>
			<div class="row">
				<router-view></router-view>
			</div>
		</div>

	</div>
</template>

<script>
	import auth from '../auth/';

	export default{
		data(){
			return {
				user: auth.user
			}
		},
		methods: {
			logout(){
				auth.logout()
			}
		}
	}
</script>