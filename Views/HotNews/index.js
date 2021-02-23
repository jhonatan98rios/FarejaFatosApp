import React, { useState, useEffect } from "react";
import { Container } from './style'
import { CardList } from '../../Components/CardList'
import { Loader } from '../../Components/Loader'
//import {news} from './fake'
import axios from "axios";

const HotNews = () => {

  const [news, setNews] = useState(null)

  useEffect(() => {
    
    axios.get('https://fareja-fatos-api.herokuapp.com/')
      .then((response) => {
        setNews(response.data)
      })
      .catch((err) => {
        console.log(err)
      })  
    
  }, [])

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