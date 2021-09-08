import { useRef, useState } from "react";
import styled from "styled-components";
import Data from "./data/Data";

const Form = styled.div`
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


export default function Inputs(){
  const [ inputs, setInputs ] = useState("")
  const inputFocus = useRef()
  const nextId = useRef(0)

  const { data, setData } = useState(
  [
    {
      id: 1,
      view : "뭐하락 뭐할까 뭐할까"
    },
    {
      id: 2,
      view : "다이어트하자 제발"
    }
  ])

  const text = (e) => {
    setInputs(e.target.value)
  }

  const onCreate = () => {
    const inputText = {
      id : nextId.current,
      view : inputs
    }
    console.log(inputText)

    setData([ ...data, inputText ])

    setInputs("");
    inputFocus.current.focus();

    nextId.current += 1
  }

  return(
    <>
      <Form>
        <Input onChange={text} value={inputs} ref={inputFocus} placeholder="해야 할 일을 입력해주세요"/>
        <Button onClick={onCreate}>등록</Button>
      </Form>
    </>
  )
}