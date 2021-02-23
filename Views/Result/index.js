import React, { useState, useEffect, useCallback, Component } from "react";
import { Text, View } from 'react-native';
import { CardList } from '../../Components/CardList'
import { Loader } from '../../Components/Loader'

import { Actions } from 'react-native-router-flux';
import axios from 'axios'
import {Container, Label } from './style'

const Result = (props) => {

  const [result, setResult] = useState(null)
  const [news, setNews] = useState(null)
  const [type, setType] = useState(NaN)
  const [error, setError] = useState(null)

  useEffect(()=>{

    if(!props.sample){
      Actions.home()
    }

    axios.post('https://hackcovid-19-fakenews.herokuapp.com/news_validator', {
      sample: props.sample
    }).then( res =>{

      /* Validations */
      if(res.data.type){
        setType(res.data.type)
      } if(res.data.result){
        setResult(res.data.result)
      } if(res.data.news.length > 0){
        setNews(res.data.news)
      }else{
        setError('Não foi possível encontrar notícias semelhantes')
      } if(!res.data.result || !res.data.news || !res.data.type) {
        setError('Ocorreu um erro. Verifique sua conexão ou tente mais tarde')
      }

      /* Second requisition to persist sample in database */
      axios.post('https://hackcovid-19-fakenews.herokuapp.com/save_news', {
        sample: props.sample
      }).then(res => {
        console.log('Salvo com sucesso')
      }).catch(err => {
        console.log('Erro ao salvar')
      })

    }).catch((err) => {
      setError('Ocorreu um erro. Verifique sua conexão ou tente mais tarde')
      console.log(err)
    }) 
  }, [])

  return(
    <Container type={type}>

      {!result && (
        <Loader 
          title={'Farejando'} 
          subtitle={'Estamos analisando a notícia. Aguarde alguns segundos'}
          disclaimer={'O aplicativo está em fase beta, por isso, pode apresentar baixa acurácia quando classificando notícias muito recentes ou de fontes desconhecidas.'}
        />
      )}

      {result && (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Label> 
            <Text style={{ color: '#000000' }}> { result } </Text> 
          </Label>
        </View>
      )}

      { news && <CardList news={news} /> }

      { error && <Text style={{ color: '#ffffff', marginBottom: 16, width: '50%', textAlign: 'center' }}> { error } </Text> }
      
    </Container>
  )
}

export default Result
