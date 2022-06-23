import type { NextPage } from 'next'
import styled from 'styled-components'
import TopBar from '../components/topBar'
import Comic from '../components/comic'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>CWIN App</title>
        <meta name="description" content="cwin website" />
        <meta name="keywords" content="react web app service" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CWIN App" />
        <meta property="og:site_name" content="CWIN App" />
        <meta property="og:description" content="react web app service" />
        <meta property="og:image" content="https://i.ibb.co/YLxBsFd/site.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:url" content="" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:title" content="CWIN App" />
        <meta name="twitter:description" content="react web app service" />
        <meta name="twitter:image" content="https://i.ibb.co/YLxBsFd/site.png" />
        <link rel="canonical" href="" />
      </Head>
      <TopBar/>
      <Comic/>
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