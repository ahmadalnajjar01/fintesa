import { useState } from 'react';
import { mockTransactions } from '../data/mockTransactions';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import TransactionTable from '../components/TransactionTable';

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const filteredTransactions = mockTransactions.filter((txn) => {
    const matchesSearch =
      txn.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus ? txn.status === filterStatus : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <SearchBar onSearch={setSearchQuery} />
        <FilterDropdown onFilter={setFilterStatus} />
      </div>
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default Dashboard;