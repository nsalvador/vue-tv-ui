<template>
	<v-container fluid>
		<v-app-bar>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>
			<app-search />
		</v-app-bar>
	</v-container>
</template>

<script>
import appSearch from '../components/Search/Search.vue';

export default {
	components: {
		appSearch
	}
};
</script>
