import React from 'react';
import styled from 'styled-components';
import Card from '../cards/Card';
import Motto from '../Motto';
import {Box, VerticalBox} from '../Box';
import {IconCalculator, IconKarma, IconSupervisor, IconTeamBuilder} from '../icons';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CustomVerticalBox = styled(VerticalBox)`
  width: 960px
`;

const IndexPage = () => {

  return (
    <Box>
      <CustomVerticalBox>
        <Motto />
        <CardContainer>
          <Card
            color={'green'}
            title="Supervisor"
            subtitle="Monitors activity to identify project roadblocks"
            icon={<IconSupervisor />}
          />
          <div>
            <Card
              color={'red'}
              title="Team Builder"
              subtitle="Scans our talent network to create the optimal team for your project"
              icon={<IconTeamBuilder />}
            />
            <Card
              color={'yellow'}
              title="Karma"
              subtitle="Regularly evaluates our talent to ensure quality"
              icon={<IconKarma />}
            />
          </div>
          <Card
            color={'blue'}
            title="Calculator"
            subtitle="Uses data from past projects to provide better delivery estimates"
            icon={<IconCalculator />} />
        </CardContainer>
      </CustomVerticalBox>
    </Box>
  );
};

export default IndexPage;
