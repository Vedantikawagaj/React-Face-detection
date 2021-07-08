import React from 'react'
import './FaceRecognition.css'
const FaceRecognition = ({imgUrl,box}) => {
    return (
        <div className='ma center'>
            <div className='absolute mt2'>
                <img id='inputImg' alt='' src={imgUrl} width='auto' height='400px' />
                <div className='bounding-box' style={{ bottom: box.bottomRow, left: box.leftCol ,right: box.rightCol,top: box.topRow, }}></div>
            </div>
            
        </div>
    )
}

export default FaceRecognition
