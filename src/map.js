// @flow

import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import MapPin from './static/images/map_pin.png';

type ViewportState = {
  height: string,
  width: string,
  latitude: number,
  longitude: number,
  zoom: number
};

type State = { viewport: ViewportState };

export default class Map extends Component<{}, State> {
  constructor() {
    super();
    this.state = {
      viewport: {
        height: '100%',
        width: '100%',
        latitude: 53.428594,
        longitude: -9.319193,
        zoom: 8
      }
    };
  }

  renderMarkers = () => {
    const { zoom } = this.state.viewport;
    const pinHeight = (zoom * 2).toString() + 'px';
    const leftOffset = -(parseInt(pinHeight) / 2);
    const topOffset = -parseInt(pinHeight) - 12;
    if (zoom > 6) {
      return (
        <div>
          <Marker latitude={53.428594} longitude={-9.319193} offsetLeft={leftOffset} offsetTop={topOffset}>
            <div style={{ fontSize: '12px' }}>Day 1</div>
            <img src={MapPin} style={{ height: pinHeight }} alt={'Map Pin'} />
          </Marker>
          <Marker latitude={53.455881} longitude={-9.540736} offsetLeft={leftOffset} offsetTop={topOffset}>
            <div style={{ fontSize: '12px' }}>Day 2</div>
            <img src={MapPin} style={{ height: pinHeight }} alt={'Map Pin'} />
          </Marker>
          <Marker latitude={53.520828} longitude={-9.74239} offsetLeft={leftOffset} offsetTop={topOffset}>
            <div style={{ fontSize: '12px' }}>Day 3</div>
            <img src={MapPin} style={{ height: pinHeight }} alt={'Map Pin'} />
          </Marker>
          <Marker latitude={53.595843} longitude={-9.694259} offsetLeft={leftOffset} offsetTop={topOffset}>
            <div style={{ fontSize: '12px' }}>Day 4</div>
            <img src={MapPin} style={{ height: pinHeight }} alt={'Map Pin'} />
          </Marker>
          <Marker latitude={53.696062} longitude={-9.616408} offsetLeft={leftOffset} offsetTop={topOffset}>
            <div style={{ fontSize: '12px' }}>Day 5</div>
            <img src={MapPin} style={{ height: pinHeight }} alt={'Map Pin'} />
          </Marker>
          <Marker latitude={53.801132} longitude={-9.522257} offsetLeft={leftOffset} offsetTop={topOffset}>
            <div style={{ fontSize: '12px' }}>Day 6</div>
            <img src={MapPin} style={{ height: pinHeight }} alt={'Map Pin'} />
          </Marker>
        </div>
      );
    }
    return <div />;
  };

  render() {
    return (
      <ReactMapGL
        height={'100%'}
        width={'100%'}
        {...this.state.viewport}
        onViewportChange={(viewport: ViewportState) => this.setState({ viewport })}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
      >
        {this.renderMarkers()}
      </ReactMapGL>
    );
  }
}
