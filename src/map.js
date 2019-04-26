// @flow

import React, { Component } from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';

import MapPin from './static/images/map_pin.png';

const navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
};

type Props = {
  onClick: () => mixed
};

type ViewportState = {
  height: string,
  width: string,
  latitude: number,
  longitude: number,
  zoom: number
};

type State = { viewport: ViewportState };

export default class Map extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
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
            <img src={MapPin} style={{ height: pinHeight }} alt={'Map Pin'} onClick={this.props.onClick} />
          </Marker>
          <Marker latitude={53.455881} longitude={-9.540736} offsetLeft={leftOffset} offsetTop={topOffset}>
            <div style={{ fontSize: '12px' }}>Day 2</div>
            <img
              src={MapPin}
              style={{ height: pinHeight }}
              alt={'Map Pin'}
              onClick={() => {
                console.log('hi');
              }}
            />
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
      <div style={{ height: '100%', width: '100%', textAlign: 'left' }}>
        <ReactMapGL
          height={'100%'}
          width={'100%'}
          {...this.state.viewport}
          onViewportChange={(viewport: ViewportState) => this.setState({ viewport })}
          mapOptions={{ style: 'mapbox://styles/mapbox/outdoors-v10' }}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
          responsive
        >
          {this.renderMarkers()}
          <div className="nav" style={navStyle}>
            <NavigationControl onViewportChange={(viewport: ViewportState) => this.setState({ viewport })} />
          </div>
        </ReactMapGL>
      </div>
    );
  }
}
