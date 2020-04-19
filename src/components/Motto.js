import React from 'react';
import styled from 'styled-components';

const MottoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  @media only screen and (min-width: 1100px) {
    width: 500px;
  }
  
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  color: ${({theme}) => theme.colors.neutral.GrayishBlue};
  font-weight: 200;
  margin-bottom: 0;
  text-align: center;
`;

const StrongTitle = styled.h1`
  color: ${({theme}) => theme.colors.neutral.VeryDarkBlue};
  font-weight: 600;
  margin-top: 0;
  text-align: center;
`;

const Description = styled.p`
  color: ${({theme}) => theme.colors.neutral.GrayishBlue};
  font-weight: 400;
  text-align: center;
  
  @media only screen and (max-width: 1100px) {
    width: 60%;
  }
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
