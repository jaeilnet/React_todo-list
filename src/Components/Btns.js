import { useState } from "react";
import styled from "styled-components";

const BtnGroup = styled.div`
  position:absolute;
  right: 3px;
`;

const UpdataBtn = styled.button`

`;

const Btn = styled.button`
  margin-left: 3px;
`;

export default function Btns(props){
  const [ value ] = props.data
  const { id } = value
  const [ ids, setids ] = useState(id)
  console.log("나는야 ids",ids, id)
  
  // console.log(data)
  
  function btnUpdate(){
    console.log("bt222ndel 입니다")
  }
  
  function btnDel(){
    if(window.confirm("삭제하시겠습니까?")){
      fetch(`http://localhost:3001/list/${id}`, {
        method : "DELETE",
      }).then(res => {
        if (res.ok){
          setids({
            ids:0
          })
          alert("삭제가 완료 되었습니다.")
        }
      }
    )
  }
}
  
  return(
    <BtnGroup>
      <UpdataBtn onClick={btnUpdate}>수정</UpdataBtn>
      <Btn onClick={btnDel}>삭제</Btn>
    </BtnGroup>
  )
}