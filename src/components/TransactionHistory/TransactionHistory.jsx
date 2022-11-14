import PropTypes from 'prop-types';
import { Container, Head, Cell } from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <Container>
      <thead>
        <tr>
          <Head>Type</Head>
          <Head>Amount</Head>
          <Head>Currency</Head>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <Cell>{type}</Cell>
            <Cell>{amount}</Cell>
            <Cell>{currency}</Cell>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
