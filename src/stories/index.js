import React from 'react';

import { storiesOf } from '@storybook/react';
import Search from '../components/Search';

import SearchResults from '../components/SearchResults';
import SongRow from '../components/SongRow';
import songObject from '../components/models/song';

// Lukas
storiesOf('Searchbar', module)
  .add('default', () => (
    <Search submit={() => console.log("")} />
  ))

// Lukas
storiesOf('Search Table', module)
  .add('default', () => (
    <SearchResults />
  ))

// Lukas
storiesOf('Song Row', module)
  .add('unselected', () => (
    <SongRow selected={false} type="create" song={songObject("key", "title", "artist", "3:46", 174, "C Major", "//:0")}/>
  ))
  .add('selected', () => (
    <SongRow selected={true} type="dropdown" song={songObject("key", "title", "artist", "3:46", 174, "C Major", "//:0")}/>
  ))
  .add('inPlaylist', () => (
    <SongRow selected={false} type="dropdown" song={songObject("key", "title", "artist", "3:46", 174, "C Major", "//:0")}/>
  ))
  .add('transition', () => (
    <SongRow selected={false} type="add" song={songObject("key", "title", "artist", "3:46", 174, "C Major", "//:0")}/>
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
