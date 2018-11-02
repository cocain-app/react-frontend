import React from 'react';

import { storiesOf } from '@storybook/react';
import Search from '../components/Search';
import CreatePlaylist from '../components/pages/CreatePlaylist';

// Lukas
storiesOf('Searchbar', module)
  .add('default', () => (
    <Search submit={() => console.log("")} />
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
    <div></div>
  ))

// Ben
storiesOf('Dropdown', module)
  .add('default', () => (
    <div></div>
  ))