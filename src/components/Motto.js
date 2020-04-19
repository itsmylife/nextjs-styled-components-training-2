import React from 'react';
import styled from 'styled-components';

const MottoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: ${({theme}) => theme.colors.neutral.GrayishBlue};
  font-weight: 200;
  margin-bottom: 0;
`;

const StrongTitle = styled.h1`
  color: ${({theme}) => theme.colors.neutral.VeryDarkBlue};
  font-weight: 600;
  margin-top: 0;
`;

const Description = styled.p`
  color: ${({theme}) => theme.colors.neutral.GrayishBlue};
  font-weight: 400;
  text-align: center;
`;

const Motto = () => {
  return (
    <MottoContainer>
      <Title>Reliable, efficient delivery</Title>
      <StrongTitle>Powered by Technology</StrongTitle>
      <Description>
        Our Artificial Intelligence powered tools use millions of project data points
        to ensure that your project is successful
      </Description>
    </MottoContainer>
  );
};

export default Motto;
