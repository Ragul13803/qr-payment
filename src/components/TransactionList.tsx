import React from 'react'
import TransactionItem from './TransactionItem'


export default function TransactionList({ items }: { items: any[] }) {
if (!items || items.length === 0) {
return <div className="text-center text-gray-500 py-6">No transactions found.</div>
}


return (
<div className="grid gap-3">
{items.map((t, i) => (
<TransactionItem key={t.transactionId ?? t.id ?? t._id ?? i} tx={t} />
))}
</div>
)
}