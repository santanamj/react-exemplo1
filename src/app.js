'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import Button from './button'
import LikeButton from './like-button'
import SearchButton from './searchButton'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'
import Starred from './components/starred'



const App = () => (
  <div className='app'>
    <Search />
    <UserInfo />
    <Actions />
    <Repos
      className='repos'
      title='Repositórios:'
      repos={[{
        name: 'Nome do repositório',
        link: '#'
      }]}
    />
     <Repos
      className='starred'
      title='Favoritos:'
      repos={[{
        name: 'Nome do repositório',
        link: '#'
      }]}
    />
  </div>
)


export default App
