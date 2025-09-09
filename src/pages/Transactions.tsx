import { useTransactions } from "../context/TransactionContext";
import Loading from "../components/Loading";
import Error from "../components/Error";
import TransactionList from "../components/TransactionList";
import Pagination from "../components/Pagination";

export default function Transactions() {
  const { transactions, loading, error, fetchTransactions, page, totalPages } =
    useTransactions();

  const handlePageChange = (newPage: number) => {
    fetchTransactions(newPage);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Transaction History</h2>

      {loading && <Loading />}
      {error && <Error message={error} />}

      {!loading && !error && (
        <>
          <TransactionList items={transactions} />
          <Pagination
            page={page}
            totalPages={totalPages}
            onChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}
