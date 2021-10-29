'use strict'

import React from "react"
import Button from "./button"

const LikeButton = () => (
    <Button handleClick={()=> alert('like Button')}>
        Curtir
    </Button>
)

export default LikeButton
