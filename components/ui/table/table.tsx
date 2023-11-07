import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export type RowData = {
  id: string;
};

export type Primitive = string | number | boolean;
export type Selector<D> = (row: D, rowIndex?: number) => any;

type TableColumn<D> = {
  headerName: string;
  headerComponent?: any;
  selector?: Selector<D>;
  child?: any;
};

export type ExtraOptionsItem = {
  label: string;
  action: (rowId: string) => any;
};

export type ExtraOptions = {
  items: ExtraOptionsItem[];
};

export type TableConfig<D> = {
  columns: TableColumn<D>[];
  rows: D[];
  extraOptions?: ExtraOptions;
};

export type TableProps<D> = {
  config: TableConfig<D>;
  loading: boolean;
};

const Table = ({ config, loading }: TableProps<RowData & any>) => {
  return (
    <div className='w-full overflow-x-auto rounded-lg border border-gray-300 @container/table'>
      <table className='w-full border-collapse text-base'>
        <thead>
          <tr>
            {config.columns.map((column, index) => (
              <th
                key={column.headerName}
                scope='col'
                className={
                  'hidden border-b border-gray-300 bg-gray-100 p-3 text-start text-base font-semibold text-gray-700 @lg/table:table-cell' +
                  ' ' +
                  (index === 0 || index === 6
                    ? `@lg/table:sticky @lg/table:left-0 ${
                        index === 6 ? '@lg/table:right-0' : ''
                      }`
                    : '')
                }
              >
                {column.headerComponent
                  ? column.headerComponent
                  : column.headerName}
              </th>
            ))}
            {config.extraOptions?.items.length ?? 0 > 0 ? (
              <th
                className={
                  'hidden border-b border-gray-300 bg-gray-100 p-3 text-start text-base font-semibold text-gray-700 @lg/table:sticky @lg/table:left-0 @lg/table:right-0 @lg/table:table-cell'
                }
              ></th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {loading || loading === undefined ? (
            <tr>
              <td className='p-6 text-start text-base font-semibold text-gray-700'>
                Loading...
              </td>
            </tr>
          ) : (
            <>
              {config.rows.map((row) => (
                <tr key={row.id}>
                  {config.columns.map((column, index) => (
                    <td
                      key={row.id + column.headerName}
                      scope={index === 0 ? 'row' : 'none'}
                      data-label={column.headerName}
                      className={`flex items-center justify-between border-b-0 border-gray-300  ${
                        index === 0
                          ? 'z-10 bg-gray-100 @lg/table:bg-gray-50 '
                          : 'bg-white '
                      } px-4 py-3 text-gray-800 @lg/table:sticky @lg/table:left-0 @lg/table:table-cell @lg/table:border-b  ${
                        index !== 0
                          ? 'before:font-semibold before:text-gray-700 before:content-[attr(data-label)]  @lg/table:before:content-[]'
                          : ''
                      }`}
                    >
                      {column.child
                        ? column.child(column.selector?.(row))
                        : column.selector?.(row)}
                    </td>
                  ))}
                  {config.extraOptions?.items.length ?? 0 > 0 ? (
                    <td className='sticky-col-right sticky right-0 flex items-center justify-between border-b-0 border-gray-300 bg-white px-4 py-3 text-center align-middle before:content-[attr(data-label)] @lg/table:table-cell @lg/table:border-b @lg/table:before:content-[]'>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='h-6 w-6'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                            />
                          </svg>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {config.extraOptions?.items.map((item) => (
                            <DropdownMenuItem
                              onClick={() => item.action(row.id)}
                              key={item.label}
                            >
                              {item.label}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  ) : null}
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
