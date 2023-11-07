import { Status } from '@/pages/api/companies/[companyId]/applications';

type Props = { status: Status };

const statusColor: Record<Status, string> = {
  pending:
    'before:bg-orange-800 border-orange-800 bg-orange-100 text-orange-800',
  hired: 'before:bg-green-800 border-green-800 bg-green-100 text-green-800',
  rejected: 'before:bg-red-800 border-red-800 bg-red-100 text-red-800',
} as const;

const StatusBadge = ({ status }: Props) => {
  return (
    <div
      className={
        `flex w-max items-center gap-2 space-x-2 rounded-md border px-2 py-1 text-sm font-medium capitalize before:h-[4px] before:w-[4px] before:rounded-md before:content-[""]` +
        ' ' +
        statusColor[status]
      }
    >
      {status}
    </div>
  );
};

export default StatusBadge;
