// @flow

import Day1 from './itinerary/day1.md';
import Day2 from './itinerary/day2.md';

type Pin = {
  name: string,
  markdownPath: string,
  latitude: number,
  longitude: number
};

type Pins = Array<Pin>;

export const PinList: Pins = [
  { name: 'Day 1', latitude: 53.428594, longitude: -9.319193, markdownPath: Day1 },
  { name: 'Day 2', latitude: 53.455881, longitude: -9.540736, markdownPath: Day2 },
  { name: 'Day 3', latitude: 53.520828, longitude: -9.74239, markdownPath: Day1 },
  { name: 'Day 4', latitude: 53.595843, longitude: -9.694259, markdownPath: Day1 },
  { name: 'Day 5', latitude: 53.696062, longitude: -9.616408, markdownPath: Day1 },
  { name: 'Day 6', latitude: 53.801132, longitude: -9.522257, markdownPath: Day1 }
];
