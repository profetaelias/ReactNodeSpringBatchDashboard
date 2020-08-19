import React, { Component } from 'react';
import PageHeader from '../template/pageHeader'
import axios from 'axios'
import JobList from '../jobs/jobList'
import Select from '../template/select'

export default class Jobs extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [], listNomesJobs: []}

        this.changeJob = this.changeJob.bind(this)
        this.consultarJobs = this.consultarJobs.bind(this)
        this.consultarListaJobs = this.consultarListaJobs.bind(this)
        this.consultarListaJobs()
    }

    componentDidMount() {
        const { params: { name }} = this.props.match;
        this.consultarJobs(name);
    }
    
    async changeJob(event) {
        event.preventDefault();
        const name = event.target.value;
        await this.consultarJobs(name);
    }

    async consultarJobs(name) {
        if (!name) {
            await axios.get('http://localhost:5000/api/v1/batch/jobs')
                .then(resp => this.setState({...this.state, list: resp.data}));
        } else {
            await axios.get('http://localhost:5000/api/v1/batch/jobselecionado/?jobname=' + name)
                .then(resp => this.setState({...this.state, list: resp.data}));
        }
    }
    async consultarListaJobs() {
        await axios.get('http://localhost:5000/api/v1/batch/nomesjobs')
            .then(resp => this.setState({...this.state, listNomesJobs: resp.data}));
    }

    render() {
        return (
            <div> 
                <PageHeader name='Jobs' small='Executions'/>
                <Select changeJob={this.changeJob} listaNomesJobs={this.state.listNomesJobs}/><br />
                <JobList list={this.state.list} detalharJob={this.detalharJob} />
            </div>
        )
    }
}