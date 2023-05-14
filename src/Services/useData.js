import { useState, useEffect, useDeferredValue } from 'react'
import { rtdb as db, ref, onValue } from '../firebase'
import { calcCP } from './calcCp'

const postId = '-NQVAkSX7VP9BOACVhM2'
const starCountRef = ref(db, `weather/${postId}`)
const rotorRadius = [270, 260, 200, 220]
const P = 1.225
const calcA = (D) => {
  return 0.5 * Math.PI * Math.pow(D, 2)
}

export function useData() {

  // let data = null
  const [data, setData] = useState({
    swell_direction: [],
    swell_height: [],
    wave_height: [],
    wind_direction: [],
    wind_speed: []
  })

  const [energy, setEnergy] = useState({
    semi_submersible_1: [],
    semi_submersible_2: [],
    tension_leg: [],
    mono_pile: []
  })

  const reset = () => {
    setData({
      swell_direction: [],
      swell_height: [],
      wave_height: [],
      wind_direction: [],
      wind_speed: []
    })
  }

  // const calcCurrentPower = (A, ws, Cp) => {
  //   const watts = 0.5 * P * A * Math.pow(ws, 3) * Cp;
  //   // return watts
  //   // console.log('watts', watts)
  //   return watts / 1e6;
  // }

  const calcCurrentPower = (A, ws, Cp) => {
    const watts = 0.5 * A * ws * ws * ws * Cp;
    return watts / 3e6;
  }

  const jsonShifter = (state) => {
    const json = state;

    console.log('Data length', data.swell_direction.length);
    if(data.swell_direction.length < 10 ) return json
    
    // shift every array in json
    for(let key of Object.keys(json)) {
      json[key].shift()
    }

    return json

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

      console.log(calcCP(P, rotorRadius[0], newData.wind_speed))

      setEnergy((prevEnergy) => ({
        semi_submersible_1: [...prevEnergy.semi_submersible_1, calcCurrentPower(calcA(rotorRadius[0]), newData.wind_speed, calcCP(P, rotorRadius[0], newData.wind_speed))],
        semi_submersible_2: [...prevEnergy.semi_submersible_2, calcCurrentPower(calcA(rotorRadius[1]), newData.wind_speed, calcCP(P, rotorRadius[1], newData.wind_speed))],
        tension_leg: [...prevEnergy.tension_leg, calcCurrentPower(calcA(rotorRadius[2]), newData.wind_speed, calcCP(P, rotorRadius[2], newData.wind_speed))],
        mono_pile: [...prevEnergy.mono_pile, calcCurrentPower(calcA(rotorRadius[3]), newData.wind_speed, calcCP(P, rotorRadius[3], newData.wind_speed))],
      }))

    })

  }, [])

  useEffect(() => {
    setData(jsonShifter(data));
  }, [data])

  // useEffect(() => {
  //   setEnergy(jsonShifter(energy));
  // }, [energy])

  return { data, energy, reset }
}
