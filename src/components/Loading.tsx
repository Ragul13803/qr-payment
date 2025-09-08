import React from 'react'


export default function Loading() {
return (
<div className="flex items-center justify-center py-10">
<div className="animate-spin rounded-full h-10 w-10 border-b-2"></div>
<span className="ml-3 text-sm text-gray-600">Loading...</span>
</div>
)
}