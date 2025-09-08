import React from 'react'


export default function Error({ message }: { message: string }) {
return (
<div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded">
<strong className="block">Error</strong>
<div className="text-sm">{message}</div>
</div>
)
}