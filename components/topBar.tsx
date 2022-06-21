import styled from 'styled-components'
import SVG_search from "../public/svgs/search.svg"
import SVG_menu from "../public/svgs/menu.svg"
import SVG_profile from "../public/svgs/profile.svg"

const TopBar = () => {
  const svgProps = {width:20,height:20,fill:"#1A1A1A",style:{padding:4,marginLeft:12}}
  return (
    <Container>
      <div style={{left:10}}>
        <SVG_profile style={{padding:4}}/>
      </div>
      <Title>MicsCo</Title>
      <div style={{right:10}}>
        <SVG_search {...svgProps} />
        <SVG_menu {...svgProps} />
      </div>
    </Container>
  )
}

const Container = styled.div`
  background-color: white;
  display:flex;
  align-items: center;
  justify-content: center;
  div{
    position: absolute;
    display:flex;
    align-items: center;
  }
`
const Title = styled.h1`
  font-size: 22px;
  padding:10px;
`

export default TopBar
