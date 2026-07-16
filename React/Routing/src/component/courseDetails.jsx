import React from 'react'
import { useParams } from 'react-router-dom';

export default function CourseDetails() {
    const params = useParams();
    console.log(params)
  return (
    <div>
      <p>I am the course details page</p>
      <p>I am the course details page</p>
      <p>I am the course details page</p>
      <p>I am the course details page</p>
    </div>
  )
}
