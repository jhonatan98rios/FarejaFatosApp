import React, { useState, useEffect } from "react";
import { Container } from './style'
import { CardList } from '../../Components/CardList'
import { Loader } from '../../Components/Loader'
import axios from "axios";

const HotNews = () => {

  const [news, setNews] = useState(null)

  useEffect(() => {
    
    axios({
      url: 'https://fareja-fatos-api.herokuapp.com/hot-news',
      method: "get",
      config: {
        headers: { 'Content-Type': 'application/json' }
      }
    })
      .then((response) => {
        console.log(response.data)
        setNews(response.data)
      }) 
      .catch((err) => console.log(err) )  
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