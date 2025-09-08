import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
return (
<div className="py-12">
<h1 className="text-2xl font-semibold mb-2">Welcome</h1>
<p className="text-gray-600 mb-6">This project implements the React assessment UI and fetches transaction history from the provided API.</p>
<Link to="/transactions" className="inline-block px-4 py-2 bg-blue-600 text-white rounded">View Transactions</Link>
</div>
)
}