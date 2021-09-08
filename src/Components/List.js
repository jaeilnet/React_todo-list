import styled from "styled-components"
import Data from "./data/Data"

const ContainerList = styled.div`
  margin-top: 30px;
  display : flex;
  justify-content: center;
`;

const Ul = styled.ul`
  width: 40%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
`;

const Li = styled.li`
  line-height: 2.2;
  font-size: 14px;
  margin-left: 8px;
  display: flex;
  position: relative;
`;

const BtnGroup = styled.div`
  position:absolute;
  right: 3px;
`;

const DelBtn = styled.button`
  margin-left: 3px;
`;

const UpdataBtn = styled.button`
`;

export default function List(){
  return(
    <ContainerList>
      <Ul>
        {Data.length > 0 ? Data.map(Data => 
        <Li key={Data.id}>{Data.view}
          <BtnGroup>
            <UpdataBtn>수정</UpdataBtn>
            <DelBtn>삭제</DelBtn>
          </BtnGroup>
        </Li>)
        :
        <Li>
          <h2>목록을 작성해주세요!</h2>
        </Li>
        }
      </Ul>
    </ContainerList>
  )
}