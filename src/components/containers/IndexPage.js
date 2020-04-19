import React from 'react';
import styled from 'styled-components';
import Card from '../cards/Card';
import Motto from '../Motto';
import {VerticalBox} from '../Box';
import {IconCalculator, IconKarma, IconSupervisor, IconTeamBuilder} from '../icons';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > * {
    margin: 0 15px
  }
`;

const VerticalCardContainer = styled.div`
  & > * {
    margin: 30px 0
  }
`;

const IndexPage = () => {

  return (
    <VerticalBox>
      <Motto />
      <CardContainer>
        <Card
          borderColor={'Cyan'}
          title="Supervisor"
          subtitle="Monitors activity to identify project roadblocks"
          icon={<IconSupervisor />}
        />
        <VerticalCardContainer>
          <Card
            borderColor={'Red'}
            title="Team Builder"
            subtitle="Scans our talent network to create the optimal team for your project"
            icon={<IconTeamBuilder />}
          />
          <Card
            borderColor={'Orange'}
            title="Karma"
            subtitle="Regularly evaluates our talent to ensure quality"
            icon={<IconKarma />}
          />
        </VerticalCardContainer>
        <Card
          borderColor={'Blue'}
          title="Calculator"
          subtitle="Uses data from past projects to provide better delivery estimates"
          icon={<IconCalculator />} />
      </CardContainer>
    </VerticalBox>
  );
};

export default IndexPage;
