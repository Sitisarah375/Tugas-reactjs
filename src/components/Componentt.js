import React from 'react'
import Aritmatik from './Component'

function Componentt(props) {
    const daftarJudul = [
        // "Judul 1", "Judul 2"
        {Judul : 'Judul 1'},
        {Judul : 'Judul 2'},
        {Judul : 'Judul 3'},
        {Judul : 'Judul 4'},
    ]
  return (
    <div>
        <h3>{props.title}</h3>
        <h3>{props.subtitle}</h3>
        {/* <h3>{props.owner}</h3> */}
        {props.owner.map((row, index)=>
        <li key={index}>{row.nama}{row.kelas}</li>
        )}
        {daftarJudul.map((row, index)=>
        (<Aritmatik judul={row.Judul} key={index}/>
        ))}
    </div>
  )
}

export default Componentt