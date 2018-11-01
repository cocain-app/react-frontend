import React from 'react';

import { storiesOf } from '@storybook/react';

import ReccomendedSong from '../components/RecommendedSong';

// Lukas
storiesOf('Searchbar', module)
  .add('default', () => (
    <div></div>
  ))

// Lukas
storiesOf('Search Table', module)
  .add('default', () => (
    <div></div>
  ))

// Lukas
storiesOf('Song Row', module)
  .add('default', () => (
    <div></div>
  ))

// Ben
storiesOf('Playlist Head', module)
  .add('default', () => (
    <div></div>
  ))

// Ben
storiesOf('Playlist Table', module)
  .add('default', () => (
    <div></div>
  ))

// Ben
storiesOf('Recomendations', module)
  .add('default', () => (
    <div></div>
  ))

// Ben
storiesOf('Reccomendation', module)
  .add('default', () => (
    <ReccomendedSong title="Stinger" artist="Misanthrop & Synergy" bpm="172" musicalKey="C# Minor" previewUrl="https://p.scdn.co/mp3-preview/1f9fe7f744ff2f12464113197a037dc4a4248b9c?cid=774b29d4f13844c495f206cafdad9c86" coverUrl="https://i.scdn.co/image/a73b128cd1acb5769c435a2fcca961df2753bdc1"/>
  ))

// Ben
storiesOf('Dropdown', module)
  .add('default', () => (
    <div></div>
  ))
