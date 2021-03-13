import React, { useState, useEffect, useCallback } from "react";
import {Text, TouchableOpacity, Linking } from "react-native";
import { Container, Button, RoundedIcon } from './style'
import { Actions } from 'react-native-router-flux';
import ShareMenu, { ShareMenuReactView } from "react-native-share-menu";

const Home = () => {
  const [error, setError] = useState(null)

  const handleShare = useCallback((item) => {
    if (!item) return
    const { data } = item;
    Actions.search({ sample: data })

  }, []);

  useEffect(() => ShareMenu.getInitialShare(handleShare) , []);

  useEffect(() => {
    const listener = ShareMenu.addNewShareListener(handleShare);
    return () => listener.remove();
  }, []);

  function openURL(){
    Linking.openURL('https://fareja-fatos-web.herokuapp.com/').catch((err)=> Alert.alert('Erro ao abrir a página', err))
  }

  return(
    <Container style={{ backgroundColor: '#d0dddd' }} >

      <RoundedIcon source={require('../../Assets/dog_rounded.png')} />

      <Button onPress={Actions.search}>
        <Text style={{ color: '#ffffff' }} > Verificar notícia </Text> 
      </Button>

      <TouchableOpacity onPress={Actions.hotNews}> 
        <Text> Notícias populares </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={openURL}
        style={{ position: 'absolute', bottom: 32 }}
      > 
        <Text> Acesse nosso site </Text>
      </TouchableOpacity>

    </Container>
  )
}

export default Home