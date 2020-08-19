import React, { Component } from 'react';
import PageHeader from '../template/pageHeader'
import axios from 'axios'
import JobList from '../jobs/jobList'

export default class Jobs extends Component {

    constructor(props) {
        super(props)
        this.state = { list: []}

        this.refresh = this.refresh.bind(this)
        
        this.refresh()
    }

    async refresh() {
       await axios.get('http://localhost:5000/api/v1/batch/jobs')
            .then(resp => this.setState({...this.state, list: resp.data}));
    }

    render() {
        return (
            <div> 
                <PageHeader name='Jobs' small='Executions'/> 
                <JobList list={this.state.list} detalharJob={this.detalharJob} />
            </div>
        )
    }
}