/* global Anymod */
import React from 'react';

export default class Photos extends React.Component{
    componentDidMount(){
        Anymod.render()
    }
    render(){
        return(
            <div>
                <div id="anymod-anrbm"></div>
            </div>
        );
    }
}