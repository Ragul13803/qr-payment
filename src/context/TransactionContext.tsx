import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../api";

const TransactionContext = createContext({
  transactions: [] as any[],
  fetchTransactions: (pageNumber: number) => {
    pageNumber;
  },
  page: 0,
  setPage: (page: number) => {
    page;
  },
  totalPages: 1,
  loading: false,
  error: null as string | null,
});

export function useTransactions() {
  return useContext(TransactionContext);
}

export function TransactionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTransactions = async (pageNumber: number = 0) => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.get(
        "https://64.227.189.27/wallet/api/v1/transaction_history?service_id=111&page=0",
        {
          params: { service_id: 111, page: pageNumber },
        }
      );

      const data = res.data;
      const list =
        data?.data || data?.transactions || data?.payload || data || [];

      if (Array.isArray(list)) {
        setTransactions(list);
        setTotalPages(1); // Adjust this logic to match how total pages are returned from the API
      } else if (Array.isArray(data?.data?.content)) {
        setTransactions(data.data.content);
        setTotalPages(data.data.totalPages ?? 1);
      } else if (Array.isArray(data?.transactions)) {
        setTransactions(data.transactions);
        setTotalPages(data.totalPages ?? 1);
      } else {
        setTransactions(Object.values(list));
      }
      setPage(pageNumber);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to fetch");
    } finally {
      setLoading(false);
    }
  };

  // Fetch transactions when page number changes
  useEffect(() => {
    fetchTransactions(page);
  }, [page]);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        fetchTransactions,
        page,
        setPage,
        totalPages,
        loading,
        error,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
