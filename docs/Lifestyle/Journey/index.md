---
title: My Journey
date: 2015-4-30
sidebar_position: 1
hide_table_of_contents: true
---

import { WorldMap, TreeChart, Timeline } from '@patternize/components';
import BrowserOnly from '@docusaurus/BrowserOnly';

## Timeline

<BrowserOnly>
{() => (
<Timeline events={[
  { year: 1994, title: 'Birthday', detail: 'Beijing, China' },
  {
    year: 2007,
    title: 'High School',
    detail: 'Calgary, Alberta'
  },
  {
    year: 2013,
    title: 'McGill University',
    detail: 'Montreal, Quebec'
  },
  {
    year: 2015,
    title: 'Metanautix',
    detail: 'Palo Alto, California'
  },
  {
    year: 2018,
    title: 'Tableau',
    detail: 'Seattle, Washington'
  },
  {
    year: 2020,
    title: 'Airbnb',
    detail: 'Beijing, China'
  },
  {
    year: 2022,
    title: 'Presence',
    detail: 'Bay Area, California'
  },
  {
    year: 2025,
    title: 'Stanford University',
    detail: 'Stanford, California'
  }
]}/>)
}
</BrowserOnly>

export const Backtracking = () => {
  const tree = {
    name: '👨🏻‍💻',
    children: [
      {
        name: 'Tech Stack',
        children: [
          {
            name: 'Client',
            children: [{ name: 'iOS' }, { name: 'Unity' }, { name: 'React' }]
          },
          {
            name: 'Backend',
            children: [
              { name: 'Java' },
              { name: 'Docker' },
              { name: 'Kafka' },
              { name: 'Kubernetes' }
            ]
          }
        ]
      },
      {
        name: 'Product',
        children: [{ name: 'Growth' }, { name: 'AI-Native' }]
      },
      {
        name: 'Hobby',
        children: [
          {
            name: 'Workout',
            children: [
              { name: 'Soccer ⚽️' },
              { name: 'Running 🏃🏻‍♀️' },
              { name: 'Gym 😅' }
            ]
          },
          {
            name: 'Music',
            children: [
              { name: 'Guitar 🎸' },
              { name: 'Piano 🎹' },
              { name: 'Music Tech 🎧' }
            ]
          }
        ]
      }
    ]
  };
  return <>{typeof window !== 'undefined' && <TreeChart data={tree}/>}</>
}

## Hobbies

<BrowserOnly>
{() => <Backtracking />}
</BrowserOnly>

## Visited Countries


<BrowserOnly>
{() => <WorldMap daysSpent={[
  { CHN: 6935 },
  { CAN: 3600 },
  { USA: 150 },
  { CZE: 4 },
  { DEU: 1 },
  { AUT: 10 },
  { THA: 15 },
  { JPN: 20 },
  { ITA: 10 },
  { HUN: 3 },
  { PRK: 3 },
  { AUS: 10 }
]} />}
</BrowserOnly>
