import React from 'react';
import './social.style.css';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Social = () => {
    return (
        <div className='social'>
            <div className='content'>
                <h3>Follow us on Instagram <br /> for more updates</h3>
                <p className='link-shop' style={{ paddingTop: '1rem' }}> <a href='/shop'>Follow us
                    &#10142;</a></p>
            </div>

            <div className='box'>
                <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </div>
        </div>

    )
}

export default Social

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1604136172276-0f0a615e7fae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: 'shoe1',
    },
    {
        img: 'https://images.unsplash.com/photo-1604136172384-b2e9c43271ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: 'shoe2',
    },
    {
        img: 'https://images.unsplash.com/photo-1551489186-ccb95a1ea6a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        title: 'shoe3',
    },
    {
        img: 'https://images.unsplash.com/photo-1624005340976-020c39cbdbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=438&q=80',
        title: 'shoe4',
    },
    {
        img: 'https://images.unsplash.com/photo-1624005340061-74f4968aacbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=846&q=80',
        title: 'shoe5',
    },
    {
        img: 'https://images.unsplash.com/photo-1457647239067-15a2a76c724e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'shoe6',
    },
    {
        img: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'shoe7',
    },
    {
        img: 'https://images.unsplash.com/photo-1600880291319-1a7499c191e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: 'shoe8',
    },
    {
        img: 'https://images.unsplash.com/photo-1609259886986-a642e7e1dbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: 'shoe9',
    },
    {
        img: 'https://images.unsplash.com/photo-1542838776-096d877b5aa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'shoe10',
    },
    {
        img: 'https://images.unsplash.com/photo-1542838686-36a2befff6d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: 'shoe11',
    },
    {
        img: 'https://images.unsplash.com/photo-1615979474401-8a6a344de5bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80',
        title: 'shoe12',
    },
];