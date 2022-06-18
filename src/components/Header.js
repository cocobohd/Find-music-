import "../styles/header.css"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setFilter } from "../store/actions"

export default function Header() {
  const dispatch = useDispatch()
  const inputRef = React.createRef()
  const arr = useSelector(state => state.allSongs)

  const filter = () => {
    const newArr = arr.filter(el => {
      return el.title.toLowerCase() === inputRef.current.value.toLowerCase() || 
      el.artistName.toLowerCase() === inputRef.current.value.toLowerCase()
    })
    dispatch(setFilter(newArr))
  }
   
  return (
    <header className="header">
      <img className="logo" src="https://i.fbcd.co/products/original/6d01f85c5d858fcf1b328f81d8734fe39f85a4f68940b4c9621dc924d5f4b8c0.jpg" alt="11"/>
      <input className="search" ref={inputRef} placeholder="write name of song" onChange={filter}/>
    </header>
  )
}