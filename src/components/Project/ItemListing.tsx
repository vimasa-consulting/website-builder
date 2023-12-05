import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
    createColumnHelper,
    Cell,
    CellContext,
} from '@tanstack/react-table'
import { Project } from '@/app/(authenticated-routes)/projects/page';
import { File } from '@/types/file';

const columnHelper = createColumnHelper<{email: string}>()

const ItemListing = ({
    tableData,
    handleItemDeletion,
    columnHeaders
}: any) => {
    const [globalFilter, setGlobalFilter] = React.useState('')
    const router = useRouter();

    const columns = columnHeaders.map((header:string) => {
        if (header === 'Invited emails') {
            return columnHelper.accessor((row: any) => row?.email, {
                id: 'Invited emails',
                cell: info => info.getValue(),
                header: () => <span>Invited emails</span>,
            })
        }

        if (header === 'Delete Invite') {
            return columnHelper.accessor((row: any) => row?.email, {
                id: 'Actions',
                cell: (info: any) => <div>
                    <button onClick={() => handleEntryDeletion(info)}>🗑️</button>
                </div>,
                header: () => <span>Actions</span>,
            })
        }
    })

    async function handleEntryDeletion(info: CellContext<{email: string}, string>) {
        try {
            const cellId = info?.row?.original?.email
            if (cellId) {
                await handleItemDeletion(info?.row?.original)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const table = useReactTable({
        data: tableData,
        columns,
        state: {
            globalFilter,
        },
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        debugTable: true,
        debugHeaders: true,
        debugColumns: false,
        initialState: {
            pagination: {
                pageSize: 5,
            },
        },
    })

    return (
        <div className="p-2 bg-white text-black rounded mt-8 w-full h-[427px] flex flex-col justify-between">
            <div>
                <div className="h-2" />
                <table className='w-full text-black border border-gray-300'>
                    <thead className='border border-gray-300 h-[44px] bg-rgb-249-250-251'>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th key={header.id} className='border border-gray-300 text-[18px]'>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.length ? table.getRowModel().rows.map(row => {
                            return (
                                <tr key={row.id} className='h-60 border-b border-gray-300'>
                                    {row.getVisibleCells().map((cell: any) => (
                                        <td key={cell.id} className='text-center cursor-pointer text-[16px]'>
                                            <p className='text-center min-w-100 inline-block'>{flexRender(cell.column.columnDef.cell, cell.getContext())}</p>
                                        </td>
                                    ))}
                                </tr>
                            )
                        }) :
                            <tr className='h-10'>
                                <td colSpan={3} className='text-center border border-gray-300'>No Data Found</td>
                            </tr>
                        }
                    </tbody>
                </table>
                <div className="h-2" />
            </div>
            <div className="flex items-center gap-2">
                <button
                    className="border rounded p-1 disabled:bg-gray-100"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<'}
                </button>
                <button
                    className="border rounded p-1 disabled:bg-gray-100"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {'>'}
                </button>
                <span className="flex items-center gap-1">
                    <div>Page</div>
                    <strong>
                        {table.getState().pagination.pageIndex + 1} of{' '}
                        {table.getPageCount()}
                    </strong>
                </span>
            </div>
        </div>
    )
}

export default ItemListing;