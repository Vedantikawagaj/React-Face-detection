import React from 'react'

const Navigation = ({onRouteChange,isSignedIn}) => {
    if(isSignedIn===true){
        return (

            <nav style={{display: 'flex',justifyContent: 'flex-end',fontWeight:'bold'}}>
                <p onClick={()=>onRouteChange('signin')} className= 'ma2 dim f3 grow black underline pointer' >
                    Sign out
                </p>
            </nav>
           
        )
    }
    else{
        return (

            <nav style={{display: 'flex',justifyContent: 'flex-end',fontWeight:'bold'}}>
                <p onClick={()=>onRouteChange('signin')} className= 'ma2 dim f3 grow black underline pointer' >
                    Sign in
                </p>
                
                <p onClick={()=>onRouteChange('register')} className= 'ma2 dim f3 grow black underline pointer' >
                    Register
                </p>
            </nav>
           
        )
    }
    

}

export default Navigation

