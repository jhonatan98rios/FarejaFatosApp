import {Linking } from "react-native";
import React from "react";
import { Container, Card, CardImage, TitleNews } from './style'
import { ScrollView } from "react-native-gesture-handler";
import {news} from './fake'
//import { Actions } from 'react-native-router-flux';

const HotNews = () => {

  const placeholderImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='

  function openURL(url){
    Linking.openURL(url).catch((err)=> Alert.alert('Erro ao abrir a página', err))
  }

  return(
    <Container>
      <ScrollView style={{ width: '90%' }}>
        { news && news.map((item, index) => (
          <Card key={index} onPress={ ()=>{ openURL(item.link) }}>
            <CardImage source={{uri: item.image || placeholderImage}} />
            <TitleNews> { item.title } </TitleNews>
          </Card>
        ))}
      </ScrollView>
    </Container>
  )
}

export default HotNews