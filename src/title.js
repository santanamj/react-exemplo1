'use strict'

import React from 'react'
const createReactClass = require('create-react-class')
const Title = ({name, lastname}) => (
  <h1>Olá {`${name} ${lastname}`} </h1>
)
Title.defaultProps = {
  name: 'Desconhecido',
  lastname: 'MSantana'
}
// createReactClass({
//   // getDefaultProps: function (params) {
//   //   return {
//   //     name: 'Msantana'
//   //   } 
//   // },  
//   // render: function () {
//   //   return (
//   //     <h1>Olá {this.props.name}</h1>
//   //   )
//   // }
// })
export default Title
