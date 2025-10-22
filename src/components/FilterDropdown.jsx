function FilterDropdown({ onFilter }) {
  const handleChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className="relative inline-block">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Filter by Status
      </label>
      <select
        onChange={handleChange}
        className="appearance-none w-full min-w-[200px] px-4 py-3 pr-10 bg-white border-2 border-gray-200 rounded-lg text-gray-700 font-medium hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 cursor-pointer shadow-sm"
      >
        <option value="">All Statuses</option>
        <option value="Pending">⏳ Pending</option>
        <option value="Completed">✓ Completed</option>
        <option value="Failed">✗ Failed</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 mt-8">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

export default FilterDropdown;