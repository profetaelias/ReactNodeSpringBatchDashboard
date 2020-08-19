import React from 'react'
import { Link } from "react-router-dom";
import './jobList.css'
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default props => {
    const renderRows = () => {

        let stylesSucesso = {
          color: "green"
        };

        let stylesAlerta = {
            color: "orange",
        };

        let stylesError = {
          color: "red",
        };

        let styleAccordion = {
            padding: '5px'
        }

        const list = props.list || []
        return list.map(job => (
            <div key={job.job_execution_id} style={styleAccordion}>
                <Accordion key={job.job_execution_id}>
                    <AccordionSummary key={job.job_execution_id}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <div className='container'>
                            <div className="row">
                                <div className="col-md-12">
                                    <Link to={'/steps/' + job.job_execution_id}>
                                        ID: {job.job_execution_id} 
                                        <strong> {job.BatchJobInstance.job_name}</strong>
                                    </Link> 
                                </div>
                            </div><br />

                            <div className="row">                              
                                <div className="col-lg-3">
                                    <strong> Execucão: </strong>{job.create_time}
                                </div>
                                <div className="col-lg-3"><strong> Início: </strong>{job.start_time}</div>
                                <div className="col-lg-3"><strong> Fim: </strong>{job.end_time}</div>
                                <br />
                                <div className="col-lg-3">
                                    <div style={job.status === 'COMPLETED' ? stylesSucesso : 
                                        job.status === 'STARTED' ? stylesAlerta : stylesError}>
                                            <strong>Status: </strong>{job.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails >
                        <div className="container">
                            <div className="row">
                                <div style={job.exit_code === 'COMPLETED' ? stylesSucesso : 
                                     job.exit_code === 'STARTED' ? stylesAlerta : stylesError}
                                    className="col-lg-12"><strong> Exit code: </strong>{job.exit_code}</div>
                            </div>
                            <div hidden={!job.exit_message} className="row">
                                <div className="col-lg-12"><strong> Message: </strong>{job.exit_message}</div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
          </div>
        ))
    }

    return (
        <div>
            {renderRows()}
        </div>
        
    )
}