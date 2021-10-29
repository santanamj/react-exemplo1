'use strict'

import React from "react"
import Button from "./button"

const SearchButton = () => (
    <Button handleClick={()=> alert('Busca de botão')}>
        Buscar
    </Button>
)

export default SearchButton
