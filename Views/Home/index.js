import React, { useState, useEffect, useCallback, Component } from "react";
import { AppRegistry, Text, View, Image, TouchableOpacity } from "react-native";
import { Container, Button, Input, RoundedIcon } from './style'
import { Actions } from 'react-native-router-flux';
import ShareMenu, { ShareMenuReactView } from "react-native-share-menu";

const Home = () => {
  const [sample, setSample] = useState(null)
  const [sharedMimeType, setSharedMimeType] = useState(null);
  const [error, setError] = useState(null)

  function handleClick(string){

    if (string?.length > 24){
      Actions.result({ sample: string })
    }else {
      setError('O texto informado é muito curto. Tente um texto maior')
    }
  };

  function clearAll(){
    setSample(null)
    setError(null)
  }

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

      <Button onPress={()=> handleClick(sample)}>
        <Text style={{ color: '#000000' }} > Verificar notícia </Text> 
      </Button>

      { error && <Text style={{ color: '#ff0000', marginBottom: 16 }}> { error } </Text> }

      <TouchableOpacity onPress={clearAll}> 
        <Text> Limpar </Text>
      </TouchableOpacity>

      <Text style={{ textAlign: 'center', color: '#ff0000', width: 320, marginTop: 20, fontSize: 12 }}> Nunca informe dados pessoais. As noticias informadas serão armazenadas e reutilizadas no treino do modelo. </Text>
    </Container>
  )
}

export default Home