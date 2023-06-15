import PropTypes from 'prop-types';
import { Statistic, Title, StatList, Item, Label, Percentage } from './Statistics.styled';

export const Statistics = ({title, stats}) => {
   return <Statistic>
   <Title>{title}</Title>
 
   <StatList>
      {stats.map(({id, label, percentage}) => (
         <Item key={id}>
       <Label>{label}</Label>
       <Percentage>{percentage}%</Percentage>
     </Item>
      ))}
   </StatList>
 </Statistic>
}

Statistics.propTypes = {
   title: PropTypes.string,
   label: PropTypes.string,
   percentage: PropTypes.string,
}