import React, { useEffect} from 'react';
import ReactDOM from 'react-dom';

const parent = document.getElementById('modal')

export const Portal = ({children}) => {

  const el = React.useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    parent.appendChild(el);
    
    return () => {
      parent.removeChild(el);
    };
  }, [])

    return ReactDOM.createPortal(
        children,
        el
      );
}