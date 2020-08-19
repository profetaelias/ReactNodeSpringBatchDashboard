import React from 'react'
import IconButton from '../template/iconButton'
import { Link } from "react-router-dom";

export default props => {
    const renderRows = () => {

        let stylesSucesso = {
          margin: "20px",
          width: "20px",
          height: "20px",
          color: "green",
        };

        let stylesFracasso = {
          margin: "20px",
          width: "20px",
          height: "20px",
          color: "red",
        };

        const list = props.list || []
        return list.map(job => (
            <tr key={job.job_execution_id}>
                <td>
                     <Link to={'/steps/' + job.job_execution_id}>
                        {job.job_execution_id}
                     </Link>
                </td>
                <td >{job.create_time}</td>
                <td>{job.start_time}</td>
                <td>{job.end_time}</td>
                
                <td style={job.status == 'COMPLETED' ? stylesSucesso : stylesFracasso}>
                    <strong>Status: </strong>{job.status}</td>
                <td style={job.exit_code == 'COMPLETED' ? stylesSucesso : stylesFracasso}>
                    <strong>Status: </strong>{job.exit_code}</td>

                <td>{job.exit_message}</td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Hora criacão
                    </th>
                    <th>
                        Início
                    </th>
                    <th>
                        Fim
                    </th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}