import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZ from 'ol/source/xyz';

/**
 * The map module.
 * @module Sol/map
 */
export class MapBuilder {
  constructor(target, center, zoom) {
    this.target = target || 'map';
    this.center = center || [0, 0];
    this.zoom = zoom || 0;
  }

  createMap() {
    let map = new Map({
      target: this.target,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: this.center,
        zoom: this.zoom
      })
    });

    return map;
  }
}

export default MapBuilder;
