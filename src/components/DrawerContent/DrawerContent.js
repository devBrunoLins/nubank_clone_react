import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import close from '../../img/close.png';
import './DrawerContent.css';

function DrawerContent({content, toggleHandler, anchor}) {
    const [state, setState] = React.useState({
        isOpen: content ? true : false
    });

    React.useEffect(() => {
        content ? setState({isOpen: true}) : setState({isOpen: false})
    }, [content]);

    const toggleDrawer = () => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        toggleHandler(null);
      };
    return (
        <Drawer anchor={anchor} open={state.isOpen} onClose={toggleDrawer('bottom', false)}>
            <img src={close} className="close-icon" alt="close-icon" onClick={() => setState({isOpen: false})}/>
            {content}
        </Drawer>
        )
}

export default DrawerContent;