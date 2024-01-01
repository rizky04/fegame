import React from 'react'
interface RowProps{
    title: string;
    value: string;
    className?: string;
}

export default function Row(propps: Partial<RowProps>) {
    const {title, value, className} = propps
  return (
    <>
     <p className="text-lg color-palette-1 mb-20">
        {title}
        <span className={`purchase-details ${className}`}>
            {value}
        </span>
    </p>
    </>
  )
}
