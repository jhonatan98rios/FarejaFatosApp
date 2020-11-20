import React, { useState, useEffect, useCallback, Component } from "react";
import { Text, Image, Alert, View, Linking, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios'
import {Container, Label, ListItens} from './style'

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

      if(res.data.type){
        setType(res.data.type)
      }

      if(res.data.result){
        setResult(res.data.result)
      }

      if(res.data.news.length > 0){
        setNews(res.data.news)
      }else{
        setError('Não foi possível encontrar notícias semelhantes')
      }
      
      if(!res.data.result || !res.data.news || !res.data.type) {
        setError('Ocorreu um erro. Verifique sua conexão ou tente mais tarde')
      }

    }).catch((err) => {
      setError('Ocorreu um erro. Verifique sua conexão ou tente mais tarde')
      console.log(err)
    }) 
  }, [])

  function openURL(url){
    Linking.openURL(url).catch((err)=> Alert.alert('Erro ao abrir a página', err))
  }

  return(
    <Container type={type}>

      {
        !result && 
        <View>
          <Image 
            source={require('../../Assets/loading.gif')}  
            style={{width: 320, height: 250, opacity: 0.5, margin: 0 }}
          />
          <Text style={{color: '#777777', fontSize: 20, textAlign: "center"}} > Farejando </Text>
          <Text style={{ textAlign: 'center', color: '#555555', width: 320, marginTop: 20 }}> 
            O aplicativo está em fase beta, por isso, pode apresentar baixa acurácia quando classificando notícias muito recentes ou de fontes desconhecidas.  
          </Text>
        </View>
      }

      {
        result && 
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Label> 
            <Text style={{ color: '#000000' }}> { result } </Text> 
          </Label>
        </View>
      }

      { news && news.map((item, index) => (
        <TouchableOpacity key={index} onPress={ ()=>{ openURL(item.link) }}>
          <ListItens>
            <Image 
              source={{ uri: item.img }} 
              style={{ 
                width: 80, 
                height: 90, 
                borderBottomLeftRadius: 10, 
                borderTopLeftRadius: 10 
              }} 
            />
            <Text style={{ color: '#000000', width: 270, padding: 10 }}>
              { item.title }
            </Text>
          </ListItens>
        </TouchableOpacity>
      ))}

      { error && <Text style={{ color: '#ffffff', marginBottom: 16, width: '50%', textAlign: 'center' }}> { error } </Text> }
      
    </Container>
  )
}

export default Result
