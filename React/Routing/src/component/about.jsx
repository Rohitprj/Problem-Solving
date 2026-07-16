import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function About() {
  let navigate = useNavigate();
  // function goBack() {
  //   navigate("/");
  // }
  return (
    <div>
      <button className='bg-red-200 cursor-pointer' onClick={() => navigate(-1)}>
        Go Back
      </button>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
      <p>Welcome to the About Page</p>
    </div>
  )
}
