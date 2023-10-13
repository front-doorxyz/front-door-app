import { convert } from '@/lib/utils';

type StatsProps = {
  stats: Stat[];
};

type Stat = { name: string; value: number };

const Stats = (props: StatsProps) => {
  return (
    <div className='flex flex-row items-center justify-center'>
      <div className='stats stats-vertical shadow md:stats-horizontal'>
        {props.stats.map((stat) => (
          <div key={stat.name} className='stat place-items-center'>
            <div className='stat-title'>{stat.name}</div>
            <div className='stat-value'>{convert(stat.value)}</div>
            <div className='stat-desc'>From January 1st to February 1st</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
