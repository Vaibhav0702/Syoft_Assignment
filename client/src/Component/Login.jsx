

import React from 'react'

const Login = () => {


const handleSubmit ={



}




  return (
    <div>

        <form onSubmit={handleSubmit} >

            <input type="text" placeholder='Enter Email' />

            <input type="text" placeholder='Enter password' />

            <input type="submit" />



        </form>






    </div>
  )
}

export default Login