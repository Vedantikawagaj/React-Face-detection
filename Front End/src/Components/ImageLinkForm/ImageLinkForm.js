import React from 'react'
import './ImageLinkForm.css'
const ImageLinkForm = ({onInputChanged, onSubmitPressed}) =>{
    return (
        <div>
            <h1 style={{fontWeight: 'bold',marginTop: 40}}>This is my face recognition app.Give it a try!</h1> 
            <div className='pa2 center'>
                <div className='form pa2 w-50 shadow-5'>
                <input className='pa2 f3 w-70' type='text' onChange={onInputChanged}/>
                <button className='f3 b link w-30 grow ph3 pv2 dib bg-light-purple' onClick={onSubmitPressed} >Detect</button>
                </div>
            </div>
            
        </div>
    )
}

export default ImageLinkForm
