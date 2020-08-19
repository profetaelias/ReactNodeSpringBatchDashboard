import React from 'react'
import IconButton from '../template/iconButton'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default props => {
        const renderRows = () => {
        let stylesSucesso = {
          color: "green",
        };

        let stylesAlerta = {
          color: "orange",
        };

        let stylesError = {
          color: "red",
        };

        let styleAccordion = {
          padding: "5px",
        };

        const list = props.list || []
        return list.map(step => (
            <div key={step.step_execution_id} style={styleAccordion}>
                <Accordion expanded key={step.step_execution_id}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <div className='container'>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Link to={'/jobs/' + step.BatchJobExecution.BatchJobInstance.job_name}>
                                        ID: {step.step_execution_id} 
                                        <strong> {step.step_name}</strong>
                                    </Link> 
                                </div>
                            </div><br />    

                            <div className="row">                              
                                <div className="col-lg-3"><strong> Início: </strong>{step.start_time}</div>
                                <div className="col-lg-3"><strong> Fim: </strong>{step.end_time}</div>
                                <div className="col-lg-3"><strong> Última atualizacão: </strong>{step.last_updated}</div>
                                <div className="col-lg-3">
                                    <div style={step.status == 'COMPLETED' ? stylesSucesso : 
                                        step.status == 'STARTED' ? stylesAlerta : stylesError}>
                                            <strong>Status: </strong>{step.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3"><strong> Commits: </strong>{step.commit_count}</div>
                                <div className="col-lg-3"><strong> Reads: </strong>{step.read_count}</div>
                                <div className="col-lg-3"><strong> Filtereds: </strong>{step.filter_count}</div>
                                <div className="col-lg-3"><strong> Writes: </strong>{step.write_count}</div>
                                <div className="col-lg-3"><strong> ReadSkip: </strong>{step.read_skip_count}</div>
                                <div className="col-lg-3"><strong> WriteSkip: </strong>{step.write_skip_count}</div>
                                <div className="col-lg-3"><strong> ProcessSkip: </strong>{step.process_skip_count}</div>
                                <div className="col-lg-3"><strong> Rollback: </strong>{step.rollback_count}</div>
                            </div>
                                <br />
                            <div className="row">
                                <div style={step.exit_code == 'COMPLETED' ? stylesSucesso : 
                                     step.exit_code == 'STARTED' ? stylesAlerta : stylesError}
                                    className="col-lg-12"><strong> Exit code: </strong>{step.exit_code}</div>
                            </div>
                            <div hidden={!step.exit_message} className="row">
                                <div className="col-lg-12"><strong> Message: </strong>{step.exit_message}</div>
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