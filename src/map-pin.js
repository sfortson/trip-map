// @flow

import React, { Component } from 'react';
import { Marker } from 'react-map-gl';

import PinImage from './static/images/map_pin.png';

type Props = {
  latitude: number,
  longitude: number,
  offsetLeft: number,
  offsetTop: number,
  pinHeight: string,
  markdownPath: string,
  name: string,
  onClick: (filePath: string, drawerTitle: string) => mixed
};

class MapPin extends Component<Props> {
  render() {
    const { latitude, longitude, offsetLeft, offsetTop, pinHeight, name, markdownPath, onClick } = this.props;

    return (
      <Marker latitude={latitude} longitude={longitude} offsetLeft={offsetLeft} offsetTop={offsetTop}>
        <div style={{ fontSize: '12px' }}>{name}</div>
        <img src={PinImage} style={{ height: pinHeight }} alt={'Map Pin'} onClick={() => onClick(markdownPath, name)} />
      </Marker>
    );
  }
}

export default MapPin;
