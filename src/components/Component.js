import React, {useState} from 'react'
import '../styles/App.css';

function Component(props) {
    const [form,setForm] = useState(0);
    const tambah = () => {
        setForm (form + 1)
    }
    const kurang = () => {
        setForm (form - 1)
    }

  return (
    <div>
            <p>{props.judul}</p>
            <button onClick={kurang}>-</button>
            <button>{form}</button>
            <button onClick={tambah}>+</button>
    </div>
  )
}

// var CardComp = function (props) {  
//     var listData = props.arrydata.map(function (data) {  
//       return <div>{data.Judul}{data.Tambah}</div>  
//     });  
//     return (  
//       <div>  
//         { listData} 
//         {/* <header className='card-com'>  
//         <button className='com' onClick={kurang}>-</button>
//         <button>{form}</button>
//         <button onClick={tambah}>+</button>
//         </header>  */}
//       </div>  
//     );  
//   }

export default Component