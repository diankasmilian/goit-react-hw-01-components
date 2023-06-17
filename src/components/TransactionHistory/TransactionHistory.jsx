import PropTypes from 'prop-types';
import { Table } from './TransactionHistory.styled';
export const TransactionHistory = ({items}) => {
  const number = 5;
return <Table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
{items.map(({id, type, amount, currency}) =>
(  <tr key={id}>
     <td>{type}</td>
     <td>{amount}</td>
     <td>{currency}</td>
   </tr>
   ))}
    </tbody>
   </Table>
}

TransactionHistory.propTypes = {
   items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
         type: PropTypes.string.isRequired,
         amount: PropTypes.string.isRequired,
         currency: PropTypes.string.isRequired,
      })
   )
  
}

