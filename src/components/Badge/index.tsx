import React from 'react'

import './badge.scss'
import {BadgeProps} from './interfaces.d'

const index = (props: BadgeProps) => {
    const { status } = props
    return (
        <div className={`badge ${status}`}>          
        </div>
    )
}

export default index
