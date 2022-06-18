import trackList from "../trackList"
import TrackItem from "./TrackItem"
import "../styles/tracklist.css"
import React from "react"
import Player from "./Player"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux/es/exports"
import { setAllSongs } from "../store/actions"

export default function TrackList() {
  const dispatch = useDispatch()
  const arrState = useSelector(state => state.allSongs)
  const filterSong = useSelector(state => state.filterSong)
  const renderTracks = (filterSong.length > 0 ? filterSong : arrState).map(track => {
    return <TrackItem 
            key = {track.id}
            imgUrl = {track.imgUrl}
            title = {track.title}
            src = {track.src}
            artistName = {track.artistName}
            time = {track.time}
            trackObj = {track}
          />
  })
  const pushSongs = () => {
    dispatch(setAllSongs(trackList))
  } 
  pushSongs()
  
  return (
    <div className="tracklist">
      {renderTracks}
      <Player />
    </div>
  )
}