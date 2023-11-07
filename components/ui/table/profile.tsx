
type Props = {
  fullName: string;
  email: string;
  avatarUrl: string;
};
const Profile = ({ fullName, email, avatarUrl }: Props) => {
  return (
    <div className='grid auto-cols-min grid-flow-col  items-center gap-4'>
      <img
        height={48}
        width={48}
        className='w-[48px] max-w-none rounded-full object-cover'
        src={avatarUrl}
        alt=''
      />
      <div>
        <div className='whitespace-nowrap text-sm font-semibold text-gray-800'>
          {fullName}
        </div>
        <div className='whitespace-nowrap text-xs text-gray-600'>{email}</div>
      </div>
    </div>
  );
};

export default Profile;
