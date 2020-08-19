import React from 'react'
import IconButton from '../template/iconButton'
import { Link } from "react-router-dom";

export default props => {
    const renderRows = () => {
        let styles = {
            margin: '20px',
            width: '20px',
            height: '20px',
          };
          
          let stylesSucesso = {
            margin: '20px',
            width: '20px',
            height: '20px',
            color: 'green',
          };

          let stylesFracasso = {
            margin: '20px',
            width: '20px',
            height: '20px',
            color: 'red',
          };

        const list = props.list || []
        return list.map(step => (
            <tr key={step.step_execution_id}>
                <td>
                     <Link to={'/jobs'}>
                        {step.step_execution_id}
                     </Link>
                </td>
                <td>
                    {step.step_name}<p />
                    <td style={styles}><strong>Commits</strong><br />
                        <center>{step.commit_count}</center>
                    </td>
                    <td style={styles}><strong>Reads</strong><br />
                        <center>{step.read_count}</center>
                    </td>
                    <td style={styles}><strong>Filtereds</strong><br />
                        <center>{step.filter_count}</center>
                    </td>
                    <td style={styles}><strong>Writes</strong><br />
                        <center>{step.write_count}</center>
                    </td>
                    <br />
                    <td style={styles}><strong>ReadSkip</strong><br />
                        <center>{step.read_skip_count}</center>
                    </td>
                    <td style={styles}><strong>WriteSkip</strong><br />
                        <center>{step.write_skip_count}</center>
                    </td>
                    <td style={styles}><strong>ProcessSkip</strong><br />
                        <center>{step.process_skip_count}</center>
                    </td>
                    <td style={styles}><strong>Rollback</strong><br />
                        <center>{step.rollback_count}</center>
                    </td>
                </td>
                <td>
                    <strong>Início: </strong> {step.start_time}<p />
                    <strong>Fim: </strong> {step.end_time}<p />
                    <strong>Última atualizacão: </strong> {step.last_updated}
                </td>
                
                <td style={step.status == 'COMPLETED' ? stylesSucesso : 
                    step.status == 'FAILED' ? stylesFracasso : ''}><strong>Status: </strong>{step.status}</td>
                <td style={step.exit_code == 'COMPLETED' ? stylesSucesso : 
                    step.exit_code == 'FAILED' ? stylesFracasso : ''}><strong>Exit Code: </strong>{step.exit_code}</td>
               
               <td>{step.exit_message}</td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>
                        Id do passo
                    </th>
                    <th>
                        Informacões gerais
                    </th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}