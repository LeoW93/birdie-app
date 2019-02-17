import React from 'react';
import styled from 'styled-components';
import Text from './ui-components/Text';
import {withFetchColumnInfo} from '../controllers/withFetchColumnInfo';
import Grid from './Grid';

const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`;

const NoInfo = () => <Text weight={600} color="#6e6e6e">Choose a category above</Text>;

const MainContent = ({selectedColumnData, name, loading}) => (
  <Content>
    {!name && <NoInfo/>}
    {name && <Grid data={selectedColumnData} name={name} loading={loading} />}
  </Content>
);

export default withFetchColumnInfo()(MainContent);
