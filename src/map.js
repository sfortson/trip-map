// @flow

import React, { Component } from 'react';
import ReactMapGL, { NavigationControl } from 'react-map-gl';

import MapPin from './map-pin';
import { PinList } from './pins';

const navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
};

type Props = {
  onClick: (filePath: string, drawerTitle: string) => mixed
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

  render() {
    const { zoom } = this.state.viewport;
    const pinHeight = (zoom * 2).toString() + 'px';
    const leftOffset = -(parseInt(pinHeight) / 2);
    const topOffset = -parseInt(pinHeight) - 12;
    let mapPins = <div />;
    if (zoom > 6) {
      mapPins = PinList.map((pin, index) => {
        return (
          <MapPin
            key={index}
            latitude={pin.latitude}
            longitude={pin.longitude}
            offsetLeft={leftOffset}
            offsetTop={topOffset}
            pinHeight={pinHeight}
            name={pin.name}
            markdownPath={pin.markdownPath}
            onClick={this.props.onClick}
          />
        );
      });
    }

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
          {mapPins}
          <div className="nav" style={navStyle}>
            <NavigationControl onViewportChange={(viewport: ViewportState) => this.setState({ viewport })} />
          </div>
        </ReactMapGL>
      </div>
    );
  }
}
