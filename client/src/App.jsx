import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function App() {

  const [items, setItems] = useState([])
  useEffect(() => {
    axios.get('/get-items')
      .then((json) => setItems(json.data.items))
      .catch(err => console.log(err))
  }, [])
  return (
    <div>{items.map((val, key) => <h1 key={key}> {val.name}</h1>)}</div>
  )
}
