import React from 'react';
import compose from 'recompose/compose';
import styled from 'styled-components';
import {withFetchColumnNames} from '../controllers/withFetchColumnNames';
import SingleSelect from './ui-components/SingleSelect';
import {withColumns} from '../controllers/withColumns';

const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color: #6e6e6e;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopBar = ({columns, setSelectedColumn, selectedColumn}) => (
  <Container>
    <SingleSelect placeholder="Choose a column..." options={columns} onChange={setSelectedColumn} value={selectedColumn} />
  </Container>
);

let controller = compose(withFetchColumnNames(), withColumns());

export default controller(TopBar);