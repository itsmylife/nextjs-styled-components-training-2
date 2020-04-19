import React from 'react';
import styled from 'styled-components';

const CardBody = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 5px 20px -3px rgba(0,0,0,0.39);
  display: flex;
  flex-direction: column;
  height: 253px;
  width: 350px;
`;

const CardContent = styled.div`
  padding: 30px;
`;

const TopLine = styled.div`
  background-color: ${({borderColor, theme}) => theme.colors.primary[borderColor]};
  width: 100%;
  height: 3px;
`;

const Title = styled.h2`
  color: ${({theme}) => theme.colors.neutral.VeryDarkBlue};
  font-weight: 600;
`;

const SubTitle = styled.p`
  color: ${({theme}) => theme.colors.neutral.GrayishBlue};
  font-weight: 200;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 40px;
`;

const Card = ({
                title,
                subtitle,
                icon,
                borderColor,
              }) => {
  return (
    <CardBody>
      <TopLine borderColor={borderColor} />
      <CardContent>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <IconContainer>
          {icon}
        </IconContainer>
      </CardContent>
    </CardBody>
  );
};

export default Card;
