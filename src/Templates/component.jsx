import React from 'react'

const Component = (props) => {
    return (
        <div className="m-5">
            <div className="border border-gray-500 rounded-xl p-4">
                <p><strong>Title: {props.title}</strong></p>
                <p><strong>Duration: {props.duration}</strong></p>
                <p><strong>Price: {props.price}</strong></p>
                <p><strong>image: {props.image}</strong></p>
                <p><strong>type: {props.type}</strong></p>
            </div>
        </div>
    )
}

export default Component