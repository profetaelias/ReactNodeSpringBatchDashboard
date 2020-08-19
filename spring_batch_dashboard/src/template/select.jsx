import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

export default props => {
  const renderListagemJob = () => {
    return (
        props.listaNomesJobs.map(data => (
          <><option key={data.job_name} value={data.job_name}>{data.job_name}</option></>
        )
      )
    )
  }

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="age-native-helper">Job</InputLabel>
        <NativeSelect 
          value={props.listNomesJobs}
          onChange={props.changeJob}          
        >
          <option aria-label="Todos" value="Todos">Todos</option>
          {renderListagemJob()}
        </NativeSelect>
        <FormHelperText>Escolha o Job</FormHelperText>
      </FormControl>
    </div>
  );
}
