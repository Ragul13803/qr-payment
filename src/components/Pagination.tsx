import React from 'react'


export default function Pagination({ page, onChange, totalPages = 1 }: { page: number, onChange: (newPage: number) => void, totalPages?: number }) {
const prev = () => onChange(Math.max(0, page - 1))
const next = () => onChange(Math.min(totalPages - 1, page + 1))


return (
<div className="flex items-center justify-between mt-4">
<button onClick={prev} disabled={page <= 0} className="px-3 py-2 bg-white border rounded disabled:opacity-50">Prev</button>
<div className="text-sm text-gray-600">Page {page + 1} of {totalPages}</div>
<button onClick={next} disabled={page >= totalPages - 1} className="px-3 py-2 bg-white border rounded disabled:opacity-50">Next</button>
</div>
)
}