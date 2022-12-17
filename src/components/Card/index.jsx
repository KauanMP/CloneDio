import { FiThumbsUp } from 'react-icons/fi'
import React from 'react'

import { CardContainer, ImageBackground, Content, 
         UserInfo, UserPicture, PostInfo, HasInfo,
} from './styles'

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://guiadeti.com.br/wp-content/uploads/2022/01/guia-cursos-dio.png"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/104518438?v=4"/>
         <div>
          <h4>Kauan Moreira</h4>
          <p>Há 10 minutos</p>
        </div> 
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS usando REACT</h4>
          <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp />15
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }