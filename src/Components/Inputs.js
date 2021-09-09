import { useRef } from "react";
import styled from "styled-components";
import useFetch from "../Hooks/useFetch";
import Btns from "./Btns";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center ;
`;

const Input = styled.input`
  width: 30%;
  border-radius: 4px;
  border-color: transparent;
  line-height: 1.5;
`;

const Button = styled.button`
  margin-left: -10px;
  width: 5%;
  font-size: 14px;
`;

const ContainerList = styled.div`
  margin-top: 30px;
  display : flex;
  justify-content: center;
`;

const Ul = styled.ul`
  max-height: 500px;
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


export default function Inputs(){
  const inputFocus = useRef()
  const inputValue = useRef(null)

  const data = useFetch("http://localhost:3001/list")

  const onCreate = () => {
    const inputValues = inputValue.current.value
    if(inputValues !== ""){
      fetch("http://localhost:3001/list", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
        },
        body:JSON.stringify({
          view : inputValues
        }),
      }).then(res => {
          if (res.ok){
            alert("꼭 해내시길 바랍니다!")
          }
        }
      ).catch(error => console.error('Error:', error));
      
      inputFocus.current.focus();
    }else{
      alert("해야 할 일을 입력 해주세요!")
    }
  }
  return(
    <>
      <Form>
        <Input ref={inputValue} placeholder="해야 할 일을 입력해주세요"/>
        <Button onClick={onCreate} ref={inputFocus}>등록</Button>
      </Form>
      <ContainerList>
        <Ul>
          {data.length > 0 ? data.map(datas => 
          <Li key={datas.id}>{datas.view}
            <Btns data={data} />
          </Li>)
          :
          <Li>
            <h2>목록을 작성해주세요!</h2>
          </Li>
          }
        </Ul>
      </ContainerList>
    </>
  )
}