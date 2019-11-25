<template>
	<v-container>
		<v-text-field
			append-icon="mdi-magnify"
			dense
			hide-details
			outlined
			placeholder="Search..."
			@keydown.enter="search"
			v-model="show"
			@click:append="search"
		></v-text-field>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			show: ''
		};
	},
	methods: {
		search() {
			if (this.show !== '') {
				this.$store.commit({
					type: 'search',
					show: this.show
				});
				const show = this.$store.getters.getShow;
				alert(`Searching for ${show}...`);
				this.show = '';
			}
		}
	}
};
</script>
