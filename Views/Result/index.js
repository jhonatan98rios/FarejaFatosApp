import React, { useState, useEffect, useCallback, Component } from "react";
import { Text, Image, Alert, View, Linking, TouchableOpacity } from 'react-native';
import axios from 'axios'
import {Container, Label, ListItens} from './style'

const Result = (props) => {

  const [result, setResult] = useState(null)
  const [news, setNews] = useState([])
  const [ type, setType ] = useState(NaN)

  useEffect(()=>{

    axios.post('https://hackcovid-19-fakenews.herokuapp.com/news_validator', {
      sample: String(props.sample)
    }).then( res =>{
      
      let urls = res.data.news.url
      let titles = res.data.news.title
      let imageUrls = res.data.news.imageUrl
      let _type = res.data.type
      let _news = []

      let i = 0
      while(i < 3){
        _news[i] = {
          url: String( urls[i] ),
          title: String( titles[i] ),
          imageUrl: String( imageUrls[i] )
        }
        i++
      }

      setNews(_news)
      setResult(String(res.data.result))
      setType(_type)

    }).catch((err) => Alert.alert('Message Error', err))
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
            style={{width: 200, height: 200, opacity: 0.5 }}
          />
          <Text style={{color: '#777777', fontSize: 18, textAlign: "center"}} > Farejando </Text>
        </View>
      }

      {
        result && 
        <View>
          <Label> 
            <Text style={{ color: '#000000' }}> { result } </Text> 
          </Label>
          
          { news.map((item, index) => (
            <TouchableOpacity key={index} onPress={ ()=>{ openURL(item.url) }}>
              <ListItens>
                <Image 
                  source={{ uri: item.imageUrl }} 
                  style={{ 
                    width: 80, 
                    height: 90, 
                    borderBottomLeftRadius: 10, 
                    borderTopLeftRadius: 10 
                  }} 
                />
                <Text style={{ color: '#000000', width: 280, padding: 10 }}>
                  { item.title }
                </Text>
              </ListItens>
            </TouchableOpacity>
          ))}
        </View>
      }
      
    </Container>
  )


}

export default Result
