import { ALLSONGSPUSH, CURRENTSONG, PLAYNOW, FILTERSONG } from "./types"

let defaultStore = {
  allSongs: [],
  filterSong: [],
  currentSong: {},
  playNow: false
}

export const reducer = (state = defaultStore, action) => {
  switch (action.type) {
    case CURRENTSONG: 
      return {
        ...state,
        currentSong: action.song
      }
    case PLAYNOW: 
      return {
        ...state,
        playNow: action.play
      }
    case ALLSONGSPUSH:
      return {
        ...state,
        allSongs: action.allsongs
      }
    case FILTERSONG:
      return {
        ...state,
        filterSong: action.filter
      }
    default:
      return state
  }
}