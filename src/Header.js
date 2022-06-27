import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function Header() {
  return (
    <div className='header'>
    
    <IconButton>
        <PersonIcon fontSize='large' className='header_icon'/>
    </IconButton>

    <img
        className='header_logo'
        src='https://i.pinimg.com/736x/ec/16/40/ec1640c224a723afb4c210d282e4d603.jpg'
        alt=''
    />

    <IconButton>
        <ChatBubbleIcon fontSize='large' className='header_icon'/>
    </IconButton>
    </div>
  );
}

export default Header;