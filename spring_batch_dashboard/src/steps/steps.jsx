import React, { Component } from 'react';
import PageHeader from '../template/pageHeader'
import axios from 'axios'
import StepList from '../steps/stepList'

export default class Steps extends Component {
    constructor(props) {
        super(props)
        this.state = { list: []}
        
        this.consultarStepsPorJob = this.consultarStepsPorJob.bind(this)
    }
    
    async consultarStepsPorJob(jobId) {
        await axios.get('http://localhost:5000/api/v1/batch/steps?id=' + jobId )
            .then(resp => this.setState({...this.state, list: resp.data}));
    }
    
    async componentDidMount() {
        const { params: { id }} = this.props.match;
        console.log(id)
        this.consultarStepsPorJob(id);

      }
    
    render() {
        return (
            <div> 
                <PageHeader name='Step' small='Execution'/>
                <StepList list={this.state.list} />
            </div>
        )
    }
}