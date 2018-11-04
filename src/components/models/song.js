const songObject = (id, title, artist, dur, bpm, key, coverURL) => {
  let song = {
    id: id || "",
    title: title || "",
    artist: artist || "",
    dur: dur || "0:00",
    bpm: bpm || 0,
    key: key || "",
    coverURL: coverURL || "//:0"
  }
  return song
}

export default songObject