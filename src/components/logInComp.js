import React, { useState } from 'react'

import { Button } from 'antd'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import BusinessAppComp from './businessAppComp';
import AcctComp from './acctoverviewComp';
import TableComp from './tableComp';
import history from '../history';

export default function LogInComp() {
    const [clicked, setClicked] = useState(false)

    const isClicked = () => {
        setClicked(true)
        console.log('hi')
    }
    return (
        <>
            <h1>LogIn Page</h1>
            <Button
                type='primary'
                onClick = {() => history.push('/AcctComp')} 
                >
                    LogIn
            </Button>
        </>
    );
}