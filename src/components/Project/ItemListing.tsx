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

const columnHelper = createColumnHelper<Project | File>()

const ItemListing = ({
    tableData,
    navigationBaseURL,
    handleItemDeletion,
    columnHeaders
}: any) => {
    const [globalFilter, setGlobalFilter] = React.useState('')
    const router = useRouter();

    const columns = columnHeaders.map((header:string) => {
        if (header === 'Path') {
            return columnHelper.accessor((row: any) => row?.slug, {
                id: 'Path',
                cell: info => info.getValue(),
                header: () => <span>Path</span>,
            })
        }

        if (header === 'Actions') {
            return columnHelper.accessor((row: Project | File) => row.name, {
                id: 'Actions',
                cell: (info: any) => <div>
                    <button onClick={() => console.log('row', info)} className='mr-2'>⚙️</button>
                    <button onClick={() => handleEntryDeletion(info)}>🗑️</button>
                </div>,
                header: () => <span>Actions</span>,
            })
        }

        if (header === 'Domain') {
            return columnHelper.accessor((row: any) => row.projectHostingAlias, {
                id: 'projectHostingAlias',
                cell: info => info.getValue(),
                header: () => <span>Domain</span>,
            })
        }

        if (header === 'Name') {
            return columnHelper.accessor('name', {
                cell: info => info.getValue(),
                header: () => <span>Name</span>
            })
        }
    })

    async function handleEntryDeletion(info: CellContext<Project | File, string>) {
        try {
            const cellId = info?.row?.original?.['_id']
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

    function handleTableCellClick(cell: Cell<Project | File, unknown>) {
        const cellId = cell?.row?.original?.["_id"]
        const isActionsColumn = cell?.column?.id === 'Actions'
        if (cellId && !isActionsColumn) {
            router.push(`${navigationBaseURL}/${cellId}`)

        }
    }

    return (
        <div className="p-2 bg-white text-black rounded mt-8 w-3/4 min-h-475 flex flex-col justify-between">
            <div>
                <div className='flex'>
                    <input
                        value={globalFilter ?? ''}
                        onChange={e => setGlobalFilter(String(e.target.value))}
                        className="p-2 font-lg shadow border-2 border-gray-200 border-block text-black ml-auto rounded"
                        placeholder="Search all columns..."
                    />
                </div>
                <div className="h-2" />
                <table className='w-full text-black border border-gray-300'>
                    <thead className='border border-gray-300 h-16 bg-rgb-249-250-251'>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th key={header.id} className='border border-gray-300 text-xl'>
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
                                        <td key={cell.id} className='text-center cursor-pointer' onClick={() => handleTableCellClick(cell)}>
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