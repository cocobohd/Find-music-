import "../styles/track-item.css"
import React from "react"
import { useDispatch } from "react-redux/es/exports"
import { setCurrentSong, setPlayNow } from "../store/actions"

export default function TrackItem(props) {
  const dispatch = useDispatch()

  const currentSong = () => {
    dispatch(setCurrentSong(props.trackObj))
    dispatch(setPlayNow(true))
  }
  
  return(
    <div className="track--item" onClick={currentSong}>
      <div className="track">
        <img src={props.imgUrl} alt="ss" className="tracklogo"/>
        <div className="trackinfo">
          <h4>
            {props.title}
          </h4>
          <p>
            {props.artistName}
          </p>
        </div>
      </div>
        <p className="track--duration">
          {props.time}
        </p>
    </div>
  )
}