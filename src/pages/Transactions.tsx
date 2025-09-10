import { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Box, Avatar, } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const TransactionHistory = () => {
  const [transactionHistory, setTransactionHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk";

  const fetchTransactionHistory = async () => {
    setLoading(true);
    const url = "https://dev.expressfintech.in/transaction_history/";
    const formData = new FormData();
    formData.append("service_id", "111");

    try {
      const response = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTransactionHistory(response.data?.data || []);
      setTotalPages(response.data?.totalPages || 5);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactionHistory();
  }, [page]);

  const formatDate = (dateString: string) => {
    if (!dateString) return "03 Sep, 2021";
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).replace(/ /g, ", ");
  };

  const formatAmount = (amount: any) =>
  `₹${Number(amount).toFixed(0).toLocaleString()}`;


  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "#EDB823";
      case "failed":
        return "#E87474";
      case "success":
        return "#61CE70";
      default:
        return "#aaa";
    }
  };

  if (loading) return <Typography>Loading...</Typography>;

    const maxPagesToShow = 5;
  let startPage = Math.max(0, page - 2);
  let endPage = Math.min(totalPages - 1, page + 2);

  // Adjust if less than 5 pages shown
  if (endPage - startPage < maxPagesToShow - 1) {
    if (startPage === 0) {
      endPage = Math.min(totalPages - 1, startPage + maxPagesToShow - 1);
    } else if (endPage === totalPages - 1) {
      startPage = Math.max(0, endPage - (maxPagesToShow - 1));
    }
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }


  return (
    <Box p={2}>
      <Typography variant="h6" gutterBottom>
        Settlement History
      </Typography>

      <TableContainer
        component={Paper}
        sx={{ maxHeight: 380, overflow: "auto", borderRadius: 2, width: '1080px' }}
      >
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow sx={{ height: 50 }}>
              <TableCell style={{ color: '#999999',fontSize: '12px'}}>NAME</TableCell>
              <TableCell style={{ color: '#999999',fontSize: '12px'}}>DATE & TIME</TableCell>
              <TableCell style={{ color: '#999999',fontSize: '12px'}}>ACCOUNT</TableCell>
              <TableCell style={{ color: '#999999',fontSize: '12px'}}>AMOUNT</TableCell>
              <TableCell style={{ color: '#999999',fontSize: '12px'}}>STATUS</TableCell>
              <TableCell style={{ color: '#999999',fontSize: '12px'}}>DETAILS</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
  {transactionHistory.length === 0 ? (
    <TableRow>
      <TableCell colSpan={6} align="center">
        No data available
      </TableCell>
    </TableRow>
  ) : (
    transactionHistory.map((transaction: any, index: number) => (
      <TableRow key={index} sx={{ height: 56 }}>
        <TableCell>{transaction.service_child_name || "N/A"}</TableCell>
        <TableCell style={{ fontFamily:"Gilroy-Bold, sans-serif" }}>{formatDate(transaction.updated_date)}</TableCell>
        <TableCell style={{ color: '#999999', display: 'flex', height: 56, alignItems: 'center', fontSize: '12px' }}>
          From{" "}
          <Avatar
            src={transaction.wallet?.image || "/default-icon.png"}
            sx={{ width: 20, height: 20, ml: 1 }}
          />
        </TableCell>
        <TableCell style={{ fontFamily:"Gilroy-Bold, sans-serif" }}>{formatAmount(transaction.amount || 0)}</TableCell>
        <TableCell>
          <Box
            component="span"
            sx={{
              color: getStatusColor(transaction.status),
              border: `1px solid ${getStatusColor(transaction.status)}`,
              borderRadius: 1,
              px: 1,
              py: 0.5,
              fontSize: 12,
              textTransform: "capitalize",
              fontWeight: 500,
            }}
          >
            {transaction.status}
          </Box>
        </TableCell>
        <TableCell>
          <Box
            component="a"
            sx={{
              color: "#42794A",
              fontWeight: 500,
              fontSize: "12px",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            View
          </Box>
        </TableCell>
      </TableRow>
    ))
  )}
</TableBody>

        </Table>
      </TableContainer>

      {/* Pagination */}
    <Box display="flex" justifyContent="center" alignItems="center" gap={1} mt={2}>
      {/* Previous Button */}
      <Button
        onClick={() => setPage(Math.max(page - 1, 0))}
        disabled={page === 0}
        sx={{
          minWidth: 36,
          height: 36,
          borderRadius: "50%",
          border: "1px solid #ccc",
          padding: 0,
          minHeight: "unset",
          color: "inherit",
          "&:disabled": { color: "#ccc", borderColor: "#eee" },
        }}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
      </Button>

      {/* First Page */}
      {startPage > 0 && (
        <>
          <Button
            onClick={() => setPage(0)}
            sx={{
              minWidth: 36,
              height: 36,
              borderRadius: "50%",
              border: "1px solid #ccc",
              padding: 0,
              minHeight: "unset",
              fontWeight: page === 0 ? "bold" : "normal",
              backgroundColor: page === 0 ? "#42794A" : "transparent",
              color: page === 0 ? "white" : "inherit",
              "&:hover": {
                backgroundColor: page === 0 ? "#3c6f43" : "#f0f0f0",
              },
            }}
          >
            1
          </Button>
          {startPage > 1 && (
            <Box sx={{ width: 24, textAlign: "center", userSelect: "none" }}>...</Box>
          )}
        </>
      )}

      {/* Page Numbers */}
      {pageNumbers.map((pageNum) => (
        <Button
          key={pageNum}
          onClick={() => setPage(pageNum)}
          sx={{
            minWidth: 36,
            height: 36,
            borderRadius: "50%",
            border: "1px solid #ccc",
            padding: 0,
            minHeight: "unset",
            fontWeight: page === pageNum ? "bold" : "normal",
            backgroundColor: page === pageNum ? "#42794A" : "transparent",
            color: page === pageNum ? "white" : "inherit",
            "&:hover": {
              backgroundColor: page === pageNum ? "#3c6f43" : "#f0f0f0",
            },
          }}
        >
          {pageNum + 1}
        </Button>
      ))}

      {/* Last Page */}
      {endPage < totalPages - 1 && (
        <>
          {endPage < totalPages - 2 && (
            <Box sx={{ width: 24, textAlign: "center", userSelect: "none" }}>...</Box>
          )}
          <Button
            onClick={() => setPage(totalPages - 1)}
            sx={{
              minWidth: 36,
              height: 36,
              borderRadius: "50%",
              border: "1px solid #ccc",
              padding: 0,
              minHeight: "unset",
              fontWeight: page === totalPages - 1 ? "bold" : "normal",
              backgroundColor: page === totalPages - 1 ? "#42794A" : "transparent",
              color: page === totalPages - 1 ? "white" : "inherit",
              "&:hover": {
                backgroundColor: page === totalPages - 1 ? "#3c6f43" : "#f0f0f0",
              },
            }}
          >
            {totalPages}
          </Button>
        </>
      )}

      {/* Next Button */}
      <Button
        onClick={() => setPage(Math.min(page + 1, totalPages - 1))}
        disabled={page === totalPages - 1}
        sx={{
          minWidth: 36,
          height: 36,
          borderRadius: "50%",
          border: "1px solid #ccc",
          padding: 0,
          minHeight: "unset",
          color: "inherit",
          "&:disabled": { color: "#ccc", borderColor: "#eee" },
        }}
      >
        <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
      </Button>
    </Box>
    </Box>
  );
};

export default TransactionHistory;
