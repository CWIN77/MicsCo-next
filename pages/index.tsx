import type { NextPage } from 'next'
import styled from 'styled-components'
import TopBar from '../components/topBar'

const Home: NextPage = () => {
  return (
    <Container>
      <TopBar/>
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
  font-size:18px;
  font-weight: 600;
` 

export default Home