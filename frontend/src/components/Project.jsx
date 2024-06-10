import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Project() {
  let params = useParams()
  const [data, setData] = useState()

  console.log(params.name)
  useEffect(() => {
    fetch(`http://localhost:8000/api/project/${params.name}`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
  }, [])
  if (data != null) {
    return <div>{data.name}</div>
  } else {
    return <div></div>
  }
}
