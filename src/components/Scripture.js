import React, { Component } from 'react';
import axios from 'axios'

class Scripture extends Component{
    constructor(props){
        super(props)

        this.state = {
            data: {},
            title: '',
            fast: ''
        }
    }

    getScripture = () => {
        axios.get('https://orthocal.info/api/oca/')
            .then(res => {
                this.setState({ data: res.data, title: res.data.titles[0]});
                console.log(res.data.readings)
            })
            .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getScripture();
    }

    render(){
        const { data, title } = this.state;
        console.log(data);
        if (data.readings === undefined){
            return (
                <h3>Loading</h3>
            )
        } else {

            return (
                <>
                    <h4>{title}</h4>
                    {data.readings.map((verse, i) => {
                        return (<>
                            <h5 key={i}>{verse.source}: {verse.display}</h5>
                            {verse.passage.map((text, i) => {
                                return (
                                    <>
                                        <p key ={i}>{text.content}</p>
                                    </>
                                )
                            })}
                            </>)
                        
                    })}
                </>
            )
        }
    }
}

export default Scripture