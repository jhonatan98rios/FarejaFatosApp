import React from "react";
import { Container } from './style'
import { CardList } from '../../Components/CardList'
import { Loader } from '../../Components/Loader'
import {news} from './fake'

const HotNews = () => {

  return(
    <Container>

      {!news && (
        <Loader 
          title={'Aguarde alguns instantes'}
        />
      )}

      {news && (
        <CardList 
          news={news}
        />
      )}
    </Container>
  )
}

export default HotNews