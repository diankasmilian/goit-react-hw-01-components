import styled from "@emotion/styled";

export const Table = styled.table`
text-align: center;
border-collapse: collapse;
border-spacing: 5px;
background: #E1E3E0;
table-layout: fixed;
width: 500px;
border: 3px solid purple;

thead{
   font-weight: 500;
font-size: 30px;
line-height: 1.2;
}

tr {
   font-weight: 400;
font-size: 25px;
line-height: 1.2;
border: 3px solid purple;
}

td {
   padding: 20px;
   border: 3px solid purple;
}
`