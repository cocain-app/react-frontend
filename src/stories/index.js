import React from "react"

import { storiesOf } from "@storybook/react"
import StoryRouter from "storybook-react-router"

import { AppProvider } from "../context"

import Search from "../components/Search"
import SongTable from "../components/SongTable"
import SongRow from "../components/SongRow"
import ReccomendedSong from "../components/ReccomendedSong"
import Reccomendations from "../components/Reccomendations"
import PlaylistHead from "../components/PlaylistHead"
import Dropdown, { DropdownItem, DropdownGroup } from "../components/Dropdown"

// Lukas
storiesOf("Searchbar", module)
  .addDecorator(StoryRouter())
  .add("default", () => (
    <AppProvider>
      <Search />
    </AppProvider>
  ))

// Lukas
storiesOf("Song Table", module)
  .addDecorator(StoryRouter())
  .add("default", () => (
    <SongTable headers={["Track", "Length", "BPM", "Key"]}>
      <SongRow
        selected={false}
        type="add"
        id=""
        artist="Camo & Krooked"
        bpm="174"
        musicalKey="C Minor"
        duration={3123}
        title="Witchdoctor" />
      <SongRow
        selected={false}
        type="add"
        id=""
        artist="Camo & Krooked"
        bpm="174"
        musicalKey="C Minor"
        duration={3123}
        title="Witchdoctor" />
    </SongTable>
  ))

// Lukas
storiesOf("Song Row", module)
  .addDecorator(StoryRouter())
  .add("unselected", () => (
    <SongRow
      selected={false}
      type="add"
      id=""
      artist="Camo & Krooked"
      bpm="174"
      musicalKey="C Minor"
      duration={3123}
      title="Witchdoctor" />
  ))
  .add("selected", () => (
    <SongRow
      selected={true}
      type="add"
      id=""
      artist="Camo & Krooked"
      bpm="174"
      musicalKey="C Minor"
      duration={3123}
      title="Witchdoctor" />
  ))
  .add("dropdown", () => (
    <SongRow
      selected={true}
      type="dropdown"
      id=""
      artist="Camo & Krooked"
      bpm="174"
      musicalKey="C Minor"
      duration={3123}
      title="Witchdoctor" />
  ))
  .add("add", () => (
    <SongRow
      selected={true}
      type="add"
      id=""
      artist="Camo & Krooked"
      bpm="174"
      musicalKey="C Minor"
      duration={3123}
      title="Witchdoctor" />
  ))

// Ben
storiesOf("Playlist Head", module)
  .add("default", () => (
    <PlaylistHead
      title="Test Playlist"
      description="Description"
      numberOfSongs={5}
      duration={20001}
      coverUrl="https://i.scdn.co/image/2e9f7dcf75d85b94b2de0756fbfa10f8c8692880" />
  ))

// Ben
storiesOf("Recomendations", module)
  .add("default", () => (
    <Reccomendations base="If I Could - Camo & Krooked">
      <ReccomendedSong title="True Romance" artist="dBridge & Vegas" bpm="174" musicalKey="A# Major" previewUrl="https://p.scdn.co/mp3-preview/1ef229fc359e6844919f4a3be0f3153e7eac974c?cid=774b29d4f13844c495f206cafdad9c86" coverUrl="https://i.scdn.co/image/8e74d0392b762e929afc2ffeb90c47d550693bd2"/>
      <ReccomendedSong title="Stratos" artist="Champion (DnB)" bpm="174" musicalKey="C# Minor" previewUrl="https://p.scdn.co/mp3-preview/3cf98206d740d73b619366f48a2d3bfae81d8e69?cid=774b29d4f13844c495f206cafdad9c86" coverUrl="https://i.scdn.co/image/1378aab6c96b1b97335254e665c8c422651aadfa"/>
      <ReccomendedSong title="Loving You Is Easy (S.P.Y Remix)" artist="Camo & Krooked" bpm="172" musicalKey="A# Major" previewUrl="https://p.scdn.co/mp3-preview/22a0e2be86c7bc3b1a08ac156eba912dc10aae34?cid=774b29d4f13844c495f206cafdad9c86" coverUrl="https://i.scdn.co/image/2e9f7dcf75d85b94b2de0756fbfa10f8c8692880"/>
    </Reccomendations>
  ))

// Ben
storiesOf("Reccomendation", module)
  .add("default", () => (
    <ReccomendedSong title="Stinger" artist="Misanthrop & Synergy" bpm="172" musicalKey="C# Minor" previewUrl="https://p.scdn.co/mp3-preview/1f9fe7f744ff2f12464113197a037dc4a4248b9c?cid=774b29d4f13844c495f206cafdad9c86" coverUrl="https://i.scdn.co/image/a73b128cd1acb5769c435a2fcca961df2753bdc1"/>
  ))

// Ben
storiesOf("Dropdown", module)
  .add("default", () => (
    <Dropdown>
      <span>Test</span>
      <DropdownItem>Option A</DropdownItem>
      <DropdownItem>Option B</DropdownItem>
      <DropdownItem>Option C</DropdownItem>
    </Dropdown>
  ))
  .add("on Image", () => (
    <Dropdown>
      <img src="https://i.scdn.co/image/2e9f7dcf75d85b94b2de0756fbfa10f8c8692880" />
      <DropdownItem>Option A</DropdownItem>
      <DropdownItem>Option B</DropdownItem>
      <DropdownItem>Option C</DropdownItem>
    </Dropdown>
  ))
  .add("on Image (grouped)", () => (
    <Dropdown>
      <img src="https://i.scdn.co/image/2e9f7dcf75d85b94b2de0756fbfa10f8c8692880" />
      <DropdownGroup>Group 1</DropdownGroup>
      <DropdownItem>Option A</DropdownItem>
      <DropdownItem>Option B</DropdownItem>
      <DropdownItem>Option C</DropdownItem>
      <DropdownGroup>Group 2</DropdownGroup>
      <DropdownItem>Option A</DropdownItem>
      <DropdownItem>Option B</DropdownItem>
      <DropdownItem>Option C</DropdownItem>
    </Dropdown>
  ))
  .add("on Image (start)", () => (
    <Dropdown start>
      <img src="https://i.scdn.co/image/2e9f7dcf75d85b94b2de0756fbfa10f8c8692880" />
      <DropdownItem>Option A</DropdownItem>
      <DropdownItem>Option B</DropdownItem>
      <DropdownItem>Option C</DropdownItem>
    </Dropdown>
  ))
  .add("on Image (end)", () => (
    <Dropdown end>
      <img src="https://i.scdn.co/image/2e9f7dcf75d85b94b2de0756fbfa10f8c8692880" />
      <DropdownItem>Option A</DropdownItem>
      <DropdownItem>Option B</DropdownItem>
      <DropdownItem>Option C</DropdownItem>
    </Dropdown>
  ))
