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

  render() {
    const { zoom } = this.state.viewport;
    const pinHeight = (zoom * 2).toString() + 'px';
    return (
      <ReactMapGL
        height={'100%'}
        width={'100%'}
        {...this.state.viewport}
        onViewportChange={(viewport: ViewportState) => this.setState({ viewport })}
        mapboxApiAccessToken={
          'pk.eyJ1Ijoic2ZvcnRzb24iLCJhIjoiY2pvZzJwMnp6MGFyczN2cGphbjBrNGV3NCJ9.X6EVSy5ipogfXTf9DxxjmQ'
        }
      >
        <Marker latitude={53.428594} longitude={-9.319193}>
          <div style={{ fontSize: '12px' }}>Day 1</div>
          <img src={MapPin} style={{ height: pinHeight }} alt={'Map Pin'} />
        </Marker>
        <Marker latitude={53.455881} longitude={-9.540736}>
          <div style={{ fontSize: '12px' }}>Day 2</div>
          <img src={MapPin} style={{ height: pinHeight }} alt={'Map Pin'} />
        </Marker>
        <Marker latitude={53.520828} longitude={-9.74239}>
          <div style={{ fontSize: '12px' }}>Day 3</div>
          <img src={MapPin} style={{ height: pinHeight }} alt={'Map Pin'} />
        </Marker>
        <Marker latitude={53.595843} longitude={-9.694259}>
          <div style={{ fontSize: '12px' }}>Day 4</div>
          <img src={MapPin} style={{ height: pinHeight }} alt={'Map Pin'} />
        </Marker>
        <Marker latitude={53.696062} longitude={-9.616408}>
          <div style={{ fontSize: '12px' }}>Day 5</div>
          <img src={MapPin} style={{ height: pinHeight }} alt={'Map Pin'} />
        </Marker>
        <Marker latitude={53.801132} longitude={-9.522257}>
          <div style={{ fontSize: '12px' }}>Day 6</div>
          <img src={MapPin} style={{ height: pinHeight }} alt={'Map Pin'} />
        </Marker>
      </ReactMapGL>
    );
  }
}
