import "../styles/player.css"
import React from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
import { setPlayNow } from "../store/actions"
import { setCurrentSong } from "../store/actions"

export default function Player() {
  const dispatch = useDispatch()
  const currentSong = useSelector(state => state.currentSong)
  const playNow = useSelector(state => state.playNow)
  const stateArr = useSelector(state => state.allSongs)
  const audRef = React.createRef()
  const rangeRef = React.createRef()
  const rangeTimeRef = React.createRef()

  const playPause = () => {
    if (playNow === false){
      audRef.current.play()
      dispatch(setPlayNow(true))
    } else {
      audRef.current.pause()
      dispatch(setPlayNow(false))
    }
  }

  const nextSong = () => {
    let nextSongIndex = stateArr.indexOf(currentSong, 0) + 1
    if (nextSongIndex >= stateArr.length) {
      nextSongIndex = 0
    }
    dispatch(setCurrentSong(stateArr[nextSongIndex]))
    dispatch(setPlayNow(true))
    rangeTimeRef.current.value = 0
  }

  const prevSong = () => {
    let prevSongIndex = stateArr.indexOf(currentSong, 0) - 1
    if (prevSongIndex < 0) {
      prevSongIndex = 19
    }
    dispatch(setCurrentSong(stateArr[prevSongIndex]))
    dispatch(setPlayNow(true))
    rangeTimeRef.current.value = 0
  }

  function changevolume (amount) {
    audRef.current.volume = amount;
  }

  function changeTime (amount) {
    audRef.current.currentTime = amount
  }

  const time = () => {
    rangeTimeRef.current.value = audRef.current.currentTime
  }

  return (
    <div className="player">
      <input className="range--time" defaultValue="0" ref={rangeTimeRef} step="0.01" min="0" max={currentSong.timeinSec} type="range" onChange={() => changeTime(rangeTimeRef.current.value)}/>
      <div className="player--container">
        <div className="player--navigation">
          <button className="control--back" onClick={prevSong}>
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 7.33317L11 0.982318L11 13.684L2 7.33317Z" fill="#C4C4C4"></path>
              <rect x="2" y="13.6665" width="2" height="13" transform="rotate(-180 2 13.6665)" fill="#C4C4C4"></rect>
            </svg>
          </button>
          <button className="control--play" onClick={playPause}>
            <svg className={playNow ? "hide" : "active"} xmlns="http://www.w3.org/2000/svg" width="13" height="17" fill="none">
              <path d="M12.354 8.883L.895 16.97V.797l11.459 8.086z" fill="#151515"/>
              <path xmlns="http://www.w3.org/2000/svg" d="M12.354 8.883L.895 16.97V.797l11.459 8.086z" fill="#151515"/>
            </svg>
            <svg className={playNow ? "active" : "hide"} xmlns="http://www.w3.org/2000/svg" width="8" height="10" fill="none">
              <path d="M3 0H0v10h3V0zm5 0H5v10h3V0z" fill="#151515"/>
              <path xmlns="http://www.w3.org/2000/svg" d="M3 0H0v10h3V0zm5 0H5v10h3V0z" fill="#151515"/>
            </svg>
          </button>
          <button className="control--forward" onClick={nextSong}>
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 7.33333L3 13.6842L3 0.98248L12 7.33333Z" fill="#C4C4C4"></path>
              <rect x="12" y="1" width="2" height="13" fill="#C4C4C4"></rect>
            </svg>
          </button>
        </div>
        <div className="player--trackinfo">
          <div className="tracktitlepic">
            <img src={currentSong.imgUrl ? currentSong.imgUrl : stateArr[0].imgUrl} alt="ss" className="tracklogo"/>
            <div className="trackinfo">
              <h4>
                {currentSong.title ? currentSong.title : stateArr[0].title}
              </h4>
              <p>
                {currentSong.artistName? currentSong.artistName : stateArr[0].artistName}
              </p>
            </div>
          </div>
          
          
          <input className="range" ref={rangeRef} type="range" max="1" min="0" step="0.01" onChange={() => changevolume(rangeRef.current.value)}/>
        </div>
        <audio
          autoPlay
          ref={audRef}
          volume="0.4"
          onTimeUpdate={time}
          src={currentSong.src ? currentSong.src : stateArr[0].src}>
              Your browser does not support the
              <code>audio</code> element.
        </audio>
      </div>
    </div>
  )
}