import { capitalize } from '../../utils';

interface Props {
  label: string;
  value: string | number;
  className?: string;
}

export const DetailItem = ({
  label,
  value,
  className,
}: Props) => {
  return (
    <div className={className}>
      <span>{label}</span>
      <span>
        {typeof value === 'string' ? capitalize(value) : value}
      </span>
    </div>
  );
};
