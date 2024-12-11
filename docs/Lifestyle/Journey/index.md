---
title: My Journey
date: 2015-4-30
sidebar_position: 1
hide_table_of_contents: true
---

import { WorldMap, TreeChart, Timeline } from '@patternize/components';

## Timeline

<Timeline />

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

<Backtracking />

## Visited Countries

export const MyWorldMap = () => {
return <>{typeof window !== 'undefined' && <WorldMap />}</>
}

<MyWorldMap />
