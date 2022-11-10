import React from 'react'

export default function ProfilePage(props) {
    console.log(props) ; 
  return (
    <div>
       <h1>{props.match.params.id}</h1>
       <h1>{props.match.path}</h1>
       <h1>{props.match.url}</h1>
    </div>
  )
}
