import PropTypes from 'prop-types';
import { Table } from './TransactionHistory.styled';
export const TransactionHistory = ({items}) => {
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
   type: PropTypes.string.isRequired,
   amount: PropTypes.number.isRequired,
   currency: PropTypes.string.isRequired,
}