import React, {useRef} from 'react';
import styled from "styled-components";

import { Portal } from '../Portal';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;
    opacity: 1;
`;

const Content = styled.div`
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  min-height: 50px;
  min-width: 50px;
  max-height: 80%;
  max-width: 80%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  border-radius: 2px;
  transform: translateY(0);
  opacity: 1;
`;

export const Modal = ({open, onClose, children}) => {
    const backdrop = useRef(null);
    if (!open) {
        return null;
    };

    const onClick = (e) => {
        if (backdrop.current === e.target) {
            onClose();
        }
    }

    return (
        <Portal>
            <Backdrop ref={backdrop} onClick={onClick}>
                <Content>
                    {children}
                </Content>
            </Backdrop>
        </Portal>
    )
}