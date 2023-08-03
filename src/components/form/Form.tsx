import React, { useState } from 'react';
import Input from '../common/input/Input';
import ToDo from '../../interface/ToDo';
import * as S from './style';
import shortid from 'shortid';

interface FormProps {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const Form = ({ toDos, setToDos }: FormProps) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const disabled: boolean = title.length < 3 || content.length > 3;

  const clearInput = (): void => {
    setTitle('');
    setContent('');
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newToDo: ToDo = {
      id: shortid.generate(),
      title,
      content,
      isDone: false,
    };
    setToDos((): ToDo[] => [...toDos, newToDo]);
    clearInput();
  };

  return (
    <S.FormLayout onSubmit={onSubmitHandler}>
      <S.InputBox>
        <S.InputTitle>
          <label>제목</label>
          <Input
            value={title}
            onChange={({ target }) => {
              setTitle(target.value);
            }}
          />
        </S.InputTitle>
        <S.InputContents>
          <label>내용</label>
          <Input
            value={content}
            onChange={({ target }) => {
              setContent(target.value);
            }}
          />
        </S.InputContents>
      </S.InputBox>
    </S.FormLayout>
  );
};

export default Form;
