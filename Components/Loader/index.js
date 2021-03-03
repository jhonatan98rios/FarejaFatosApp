import React from "react";
import { View } from 'react-native';
import { CardImage, Title, Subtitle, Disclaimer } from './style'

export function Loader({ title, subtitle, disclaimer }){
  return (
    <View>
      <CardImage source={require('../../Assets/loading.gif')}/>

      { title && (
        <Title> 
          {title} 
        </Title>
      )}

      { subtitle && (
        <Subtitle > 
          {subtitle} 
        </Subtitle>
      )}
      
      {disclaimer && (
        <Disclaimer > 
          {disclaimer} 
        </Disclaimer>
      )}

    </View>
  )
}