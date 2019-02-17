import React from 'react';
import styled from 'styled-components';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Grid = ({data, name, loading}) => {
  let columns = [
    {
      Header: name,
      accessor: 'data',
      Cell: props => <Cell>{props.value}</Cell>
    },
    {
      Header: 'Number of people',
      accessor: 'count',
      Cell: props => <Cell>{props.value}</Cell>
    },
    {
      Header: 'Average age',
      accessor: 'average',
      Cell: props => <Cell>{props.value}</Cell>
    }
  ];

  return (
    <ReactTable 
      style={{height: '100%', width: '100%', margin: '0px 20px'}} 
      data={data}
      headerStyle={{fontWeight: 600}}
      columns={columns} 
      showPaginationBottom={false} 
      loading={loading}
      sortable={false}
      resizable={false}
      className="-striped -highlight -odd"
    />
  );
};

export default Grid;