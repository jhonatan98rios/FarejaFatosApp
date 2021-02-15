import {Text, TouchableOpacity, Linking, View } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { Container, Card, CardImage, TitleNews } from './style'
import { ScrollView } from "react-native-gesture-handler";
//import { Actions } from 'react-native-router-flux';

const HotNews = () => {

  const news = [
    {
      src: '',
      title: 'Primeira notícia',
      url: ''
    },
    {
      src: '',
      title: ' Segunda Noticia',
      url: ''
    },
    {
      src: '',
      title: 'Terceira Noticia',
      url: ''
    }
  ]

  function openURL(url){
    Linking.openURL(url).catch((err)=> Alert.alert('Erro ao abrir a página', err))
  }

  return(
    <Container>
      <ScrollView style={{ width: '90%' }}>
        { news && news.map((item, index) => (
          <Card key={index} onPress={ ()=>{ openURL(item.link) }}>
            <CardImage />
            <TitleNews> { item.title } </TitleNews>
          </Card>
        ))}
      </ScrollView>
    </Container>
  )
}

export default HotNews