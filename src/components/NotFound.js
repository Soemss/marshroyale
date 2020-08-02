import React from 'react';
import { Typography, Divider } from '@material-ui/core';

export default function NotFound(props) {
    return(
        <div>
            <Typography style={{textAlign: 'center', marginTop: 5}} variant='h2'>
                <a 
                    href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404' 
                    style={{color: 'black'}}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Error 404
                </a>
            </Typography>
            <Divider style={{margin: 10}} />
            <Typography style={{textAlign: 'center', color: 'grey'}} variant='h4'>
                Too lazy to do this, so theres nothing here ¯\_(ツ)_/¯
            </Typography>
        </div>
    )
}