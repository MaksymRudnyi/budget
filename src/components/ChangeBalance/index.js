import React, {useState} from 'react';
import styled from "styled-components";
import { Modal } from '../Modal';
import Form from '../Form';

const Button = styled.button`
  position: fixed;
  right: 50px;
  bottom: 50px;
    width: 50px;
    height: 50px;
    font-size: 42px;
    color: lightgrey;
outline: none;
  background-color: #fff;
  border-radius: 25px;
  border: 2px solid lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
    opacity: 1;

    &:hover {
        cursor: pointer;
    }
`;

export const ChangeBalance = ({onChange}) => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <Button onClick={() => setOpenModal(true)}>+</Button>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Form onChange={onChange} onCloseFormModal={() => setOpenModal(false)}/>
            </Modal>
        </>
    )
}