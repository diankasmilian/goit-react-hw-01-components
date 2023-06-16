import styled from "@emotion/styled";

const colorOnline = ({isOnline}) => {
  return (isOnline) ? '#34eb3a' : '#eb3434';
}

export const Item = styled.li`
display: flex;
align-items: center;
gap: 15px;
width: 200px;
height: 80px;
padding-left: 5px;

svg {
   display: block;
   width: 10px;
color: ${colorOnline};
}
`

export const Name = styled.p`
font-weight: 400;
font-size: 15px;
line-height: 1.2;
margin: 0;
`