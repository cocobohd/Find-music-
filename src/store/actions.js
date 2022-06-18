import { ALLSONGSPUSH, CURRENTSONG, PLAYNOW, FILTERSONG } from "./types"

export function setCurrentSong (song) {
  return {
    type: CURRENTSONG,
    song
  }
}
export function setPlayNow (play) {
  return {
    type: PLAYNOW,
    play
  }
}
export function setAllSongs (allsongs) {
  return {
    type: ALLSONGSPUSH,
    allsongs
  }
}
export function setFilter (filter) {
  return {
    type: FILTERSONG,
    filter
  }
}