import { useNavigate } from 'react-router-dom';

function TransactionRow({ transaction }) {
  const navigate = useNavigate();
  const { id, customerName, amount, currency, date, status } = transaction;

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border border-green-300';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border border-yellow-300';
      case 'Failed':
        return 'bg-red-100 text-red-800 border border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-300';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return '✓';
      case 'Pending':
        return '⏳';
      case 'Failed':
        return '✗';
      default:
        return '';
    }
  };

  const handleClick = () => {
    navigate(`/transaction/${id}`);
  };

  return (
    <tr
      onClick={handleClick}
      className="cursor-pointer hover:bg-blue-50 transition-colors duration-150 border-b border-gray-200 group"
    >
      <td className="px-6 py-4">
        <span className="font-mono text-sm text-gray-700 group-hover:text-blue-700 font-semibold">
          {id}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {customerName.charAt(0).toUpperCase()}
          </div>
          <span className="font-medium text-gray-900">{customerName}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="font-bold text-gray-900">
          {amount.toFixed(2)} <span className="text-sm text-gray-600 font-medium">{currency}</span>
        </span>
      </td>
      <td className="px-6 py-4">
        <span className="text-gray-700">{date}</span>
      </td>
      <td className="px-6 py-4">
        <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold ${getStatusStyle(status)}`}>
          <span>{getStatusIcon(status)}</span>
          {status}
        </span>
      </td>
    </tr>
  );
}

export default TransactionRow;