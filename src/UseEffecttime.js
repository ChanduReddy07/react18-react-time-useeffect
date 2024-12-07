import {useEffect,useState} from 'react'

export default function UseEffecttime(){
  const [count, setCount] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{
        setCount((count)=>count+1)
    },1000)
  })
    return (
    <div>
      <h1>i have render {count} times!</h1>
    </div>
  )
}
