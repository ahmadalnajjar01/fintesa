import { useParams } from 'react-router-dom';
import { mockTransactions } from '../data/mockTransactions';
import BackButton from '../components/BackButton';

function TransactionDetails() {
  const { id } = useParams();
  const transaction = mockTransactions.find((txn) => txn.id === id);

  if (!transaction) {
    return <div className="text-center text-red-500">Transaction not found</div>;
  }

  const { customerName, amount, currency, date, status, description } = transaction;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Transaction Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="font-semibold">Transaction ID:</div>
        <div>{id}</div>
        <div className="font-semibold">Customer Name:</div>
        <div>{customerName}</div>
        <div className="font-semibold">Amount:</div>
        <div>{amount.toFixed(2)} {currency}</div>
        <div className="font-semibold">Date:</div>
        <div>{date}</div>
        <div className="font-semibold">Status:</div>
        <div>{status}</div>
        <div className="font-semibold">Description:</div>
        <div>{description}</div>
      </div>
      <div className="mt-6">
        <BackButton />
      </div>
    </div>
  );
}

export default TransactionDetails;