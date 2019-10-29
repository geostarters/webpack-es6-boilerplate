import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function createMap() {
	const map = new mapboxgl.Map({
		container: "map",
		minZoom: 2,
		maxZoom: 18,
		hash: true,
		style: "https://geoserveis.icgc.cat/contextmaps/icgc.json",
		center: [1.88979, 41.69589],
		zoom: 13.61,
		attributionControl: false,
		preserveDrawingBuffer: true
	});
	
	map.addControl(new mapboxgl.NavigationControl());
	map.addControl(new mapboxgl.AttributionControl({
		compact: true
	}));

	return map;
}
