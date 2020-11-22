import React, { useState, useEffect, useCallback } from "react";
import {Text, TouchableOpacity, Linking } from "react-native";
import { Container, Button, RoundedIcon } from './style'
import { Actions } from 'react-native-router-flux';
import ShareMenu, { ShareMenuReactView } from "react-native-share-menu";

const Home = () => {
  const [sharedMimeType, setSharedMimeType] = useState(null);
  const [error, setError] = useState(null)

  const handleShare = useCallback((item) => {
    if (!item) return
    const { mimeType, data } = item;
    /* setSharedData(data); */
    setSharedMimeType(mimeType);
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

      <TouchableOpacity onPress={openURL}> 
        <Text> Mais informações </Text>
      </TouchableOpacity>

    </Container>
  )
}

export default Home