import styled from "@emotion/styled";

export const Statistic = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 50px;
`

export const Title = styled.h2`
font-weight: 500;
font-size: 20px;
line-height: 1.2;
margin: 0;
padding-bottom: 20px;
`

export const StatList = styled.ul`
list-style: none;
display: flex;
justify-content: center;
align-itens: center;
margin: 0;
padding: 0;
`
const getRandomHexColor = () => {
   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
 };

export const Item = styled.li`
display: flex;
flex-direction: column;
width: 50px;
height: 50px;
justify-content: center;
align-itens: center;
background-color: ${getRandomHexColor};
color: #fff;
`

export const Label = styled.span`
font-weight: 400;
font-size: 15px;
line-height: 1.2;
margin: 0;
text-align: center;
`

export const Percentage = styled.span`
font-weight: 500;
font-size: 17px;
line-height: 1.2;
margin: 0;
text-align: center;
`