import { useRef } from 'react'
import styled from 'styled-components'
import SVG_search from "../public/svgs/search.svg"

const Comic = () => {
  const svgProps = {width:20,height:20,fill:"#1A1A1A",style:{padding:4,marginLeft:12}}
  return (
    <Container>
      <ComicImg src="https://manatoki142.net/data/file/comic/62a2f888e3a67_8DXqy5HM_d8b16836d3f7ca722e18dfc82b91222596c208da.jpg" />
    </Container>
  )
}

const Container = styled.div`
  background-color: white;
  display:flex;
  padding:0.75rem;
  margin: 1rem 0px;
`
const ComicImg = styled.img`
  border-radius: 6px;
  width:calc(((100vw - 1.5rem) * 0.384) + 1px);   // 1px 여유 공간
  height:calc((100vw - 1.5rem) * 0.384 / 7 * 10); // 7:10 비율
`

export default Comic
