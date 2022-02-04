import React from 'react'

export default function CardDetails(props) {
    return (
        <div className='relative  top-2 flex h-4 mb-2'>
            <img src={props.img} />
            <h6 className='ml-1.5 text-xs '>{props.Content}</h6>
        </div>
    )
}
