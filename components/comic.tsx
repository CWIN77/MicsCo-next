import { useRef } from 'react'
import styled from 'styled-components'
import SVG_star_full from "../public/svgs/star_full.svg"
import SVG_star_half from "../public/svgs/star_half.svg"
import SVG_star_void from "../public/svgs/star_void.svg"
import SVG_people from "../public/svgs/people.svg"
import SVG_tag from "../public/svgs/tag.svg"

const Comic = () => {
  const starIcon = {width:15,height:15,style:{padding:1.2}}
  const InformIcon = {width:16,height:16,fill:"#1A1A1A",style:{opacity:0.6,padding:2,marginRight:4}}
  return (
    <Container>
      <ComicImg src="https://manatoki142.net/data/file/comic/62a2f888e3a67_8DXqy5HM_d8b16836d3f7ca722e18dfc82b91222596c208da.jpg" />
      <ComicInform>
        <div>
          <Grade>
            <div style={{display:"flex"}}>
              <SVG_star_full {...starIcon} />
              <SVG_star_full {...starIcon} />
              <SVG_star_full {...starIcon} />
              <SVG_star_full {...starIcon} />
              <SVG_star_full {...starIcon} />
              <h2>(6)</h2>
            </div>
            <Publish>연재중</Publish>
          </Grade>
          <Title>루리 드래곤</Title>
          <Explane>
            작품에 대한 설명을 적어 넣을 부분ㅇㅇㅇ Sssdsdsasda
          </Explane>
        </div>
        <div>
          <InformWrapper>
            <SVG_people {...InformIcon} />
            <h2>작가 이름</h2>
          </InformWrapper>
          <InformWrapper>
            <SVG_tag {...InformIcon} />
            <h2>판타지</h2>
            <h2>드라마</h2>
          </InformWrapper>
        </div>
      </ComicInform>
    </Container>
  )
}

const Container = styled.div`
  background-color: white;
  display:flex;
  margin: 1rem 0px;
  padding:0.75rem;
`
const ComicInform = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px 0.9rem;
  padding-right:4px;
`
const ComicImg = styled.img`
  border-radius: 6px;
  width:calc(((100vw - 1.5rem) * 0.4) + 1px);   // 1px 여유 공간
  height:calc((100vw - 1.5rem) * 0.4 / 7 * 10); // 7:10 비율
`
const Title = styled.h1`
  font-size: 18px;
  margin-top: 6px;
  margin-bottom: 2px;
`
const Explane = styled.h2`
  font-size: 12px;
  opacity: 0.6;
`
const Grade = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  h2{
    font-size: 11px;
    opacity: 0.6;
    margin-left: 4px;
  }
` 
const Publish = styled.h1`
  font-size: 10px;
  padding:2px 7px;
  border-radius: 4px;
  color:white;
  background-color:#1264A3;
  font-weight: 400;
`
const InformWrapper = styled.div`
  display:flex;
  margin-top: 8px;
  h2{
    font-size: 12px;
    opacity: 0.6;
    margin: 0px 3px;
  }
`

export default Comic
