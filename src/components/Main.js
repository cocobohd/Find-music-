import "../styles/main.css"
import Header from "./Header"
import TrackList from "./TrackList"

export default function Main() {
  return(
    <main className="main">
      <Header />
      <TrackList />
    </main>
  )
}