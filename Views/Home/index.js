import React, { useState, useEffect, useCallback, Component } from "react";
import { AppRegistry, Text, View, Image } from "react-native";
import { Container, Button, Input, RoundedIcon } from './style'
import { Actions } from 'react-native-router-flux';
import ShareMenu, { ShareMenuReactView } from "react-native-share-menu";

const Home = () => {
  const [sample, setSample] = useState(null)
  const [sharedMimeType, setSharedMimeType] = useState(null);

  const handleShare = useCallback((item) => {
    if (!item) return
    const { mimeType, data } = item;
    /* setSharedData(data); */
    setSharedMimeType(mimeType);
    setSample(data)
  }, []);

  useEffect(() => ShareMenu.getInitialShare(handleShare) , []);

  useEffect(() => {
    const listener = ShareMenu.addNewShareListener(handleShare);
    return () => listener.remove();
  }, []);

  return(
    <Container style={{ backgroundColor: '#d0dddd' }} >
      <RoundedIcon source={require('../../Assets/dog_rounded.png')} />
      <Input
        value={sample}
        onChangeText={ value => setSample(value)}
        placeholder="Cole sua notícia aqui para verificar"
        placeholderTextColor="grey"
        multiline={true}
        numberOfLines={16}
      />
      <Button
        onPress={()=> Actions.result({ sample })}
      >
        <Text style={{ color: '#000000' }} > Verificar notícia </Text> 
      </Button>
    </Container>
  )
}

export default Home