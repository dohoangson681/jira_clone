import React from 'react'
import { Button } from 'antd';
import { TOKEN_JIRA } from '../../ulti/setting';
import { Redirect } from 'react-router-dom';
export default function HomePage(props) {
    console.log('props' , props) ; 
    if(!localStorage.getItem(TOKEN_JIRA)){
      // alert('redieact') ;   
       return <Redirect to='/login' />
    }
  return (
    <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </>
  )
}
