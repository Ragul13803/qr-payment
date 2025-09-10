import { useEffect, useState } from "react";
import axios from "axios";

const TransactionHistory = () => {
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactionHistory = async () => {
      const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWI..."; // Replace with the full token
      const url = "http://64.227.189.27/wallet/api/v1/transaction_history";
      const params = {
        service_id: "111",
        page: "0",
      };

      try {
        const response = await axios.get(url, {
          params, // Send the parameters as a query string
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        setTransactionHistory(response.data); // Assuming the response is JSON
        setLoading(false);
      } catch (err) {
        // setError(err.message);
        setLoading(false);
      }
    };

    fetchTransactionHistory();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactionHistory.map((transaction, index) => (
          <li key={index}>{JSON.stringify(transaction)}</li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
