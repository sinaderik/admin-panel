import axios from 'axios'
import React from 'react'

export default function Courses() {
  return (
    <h1>courses</h1>
  )
}

export async function coursesLoader() {
  const response = await axios.get("/Course/list")
  console.log(response.data)
  return response.data
}
