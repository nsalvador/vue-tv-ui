export default class Show {
	constructor(show) {
		this.id = show.id;
		this.seriesName = show.seriesName;
		this.posterKey = show.posterKey || '';
		this.posterUrl = show.posterUrl || '';
	}
}
