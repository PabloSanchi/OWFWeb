import { useState, useEffect } from 'react'
import { rtdb as db, ref, onValue } from '../firebase'

const postId = '-NQVAkSX7VP9BOACVhM2'
const starCountRef = ref(db, `weather/${postId}`)

export function useData() {

  // let data = null
  const [data, setData] = useState({
    swell_direction: [],
    swell_height: [],
    wave_height: [],
    wind_direction: [],
    wind_speed: []
  })
  // const [loading, setLoading] = useState(true)
  const reset = () => {
    setData({
      swell_direction: [],
      swell_height: [],
      wave_height: [],
      wind_direction: [],
      wind_speed: []
    })
  }

  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const newData = JSON.parse(JSON.stringify(snapshot.val()))
      console.log(newData)
      setData((prevData) => ({
        swell_direction: [...prevData.swell_direction, newData.swell_direction],
        swell_height: [...prevData.swell_height, newData.swell_height],
        wave_height: [...prevData.wave_height, newData.wave_height],
        wind_direction: [...prevData.wind_direction, newData.wind_direction],
        wind_speed: [...prevData.wind_speed, newData.wind_speed],
      }));
    })
  }, [])



  return { data, reset }
}
