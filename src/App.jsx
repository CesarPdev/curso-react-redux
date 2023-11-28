import React, { useEffect } from 'react'
import { Col, Spin } from 'antd'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList'
import { fetchPokemonsWithDetails } from './slices/dataSlice'
import logo from './statics/logo.svg'
import './App.css'

function App() {

  const pokemons = useSelector((state) => state.data.filteredPokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);
  
  return (
    <>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={16} offset={4}>
        <Searcher />
      </Col>
      {loading ? <Spin spinning='true' size='large'>
        <PokemonList pokemons={pokemons}/>
      </Spin> : <PokemonList pokemons={pokemons}/>}
    </>
  )
}

export default App;
