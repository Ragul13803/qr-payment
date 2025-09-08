import React from 'react'


export default function TransactionItem({ tx }: { tx: any }) {
// tx shape can vary; guard against missing fields
const id = tx.transactionId ?? tx.id ?? tx.txnId ?? tx._id
const desc = tx.description ?? tx.note ?? tx.type ?? tx.narration ?? 'Transaction'
const amount = tx.amount ?? tx.value ?? tx.transaction_amount ?? tx.txAmount
const date = tx.date ?? tx.timestamp ?? tx.createdAt ?? tx.transaction_date


return (
<div className="flex items-center justify-between p-4 bg-white rounded shadow-sm">
<div>
<div className="text-sm font-medium">{desc}</div>
<div className="text-xs text-gray-500 mt-1">ID: {id ?? '—'}</div>
</div>
<div className="text-right">
<div className="font-semibold">{amount ?? '—'}</div>
<div className="text-xs text-gray-500">{date ?? '—'}</div>
</div>
</div>
)
}