import React from "react";
import { Alert, Linking, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import {Card, CardImage, CardTitle} from './style'

export function CardList({news}){

  function openURL(url){
    Linking.openURL(url).catch((err)=> Alert.alert('Erro ao abrir a página', err))
  }

  return(
    <ScrollView style={{ width: '100%' }}>
      { news.map((item, index) => (
        <TouchableOpacity key={index} onPress={ ()=>{ openURL(item.link) }}>
          <Card>
            { item.image && <CardImage source={{ uri: item.image }} /> }
            <CardTitle> { item.title } </CardTitle>
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}
