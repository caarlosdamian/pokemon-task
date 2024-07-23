import { capitalize } from '../../utils';

interface Props {
  label: string;
  value: string | number;
  className?: string;
  testid?: string;
}

export const DetailItem = ({ label, value, className, testid }: Props) => {
  return (
    <div className={className}>
      <span data-testid={`${testid}-label`}>{label}</span>
      <span data-testid={`${testid}-value`}>
        {typeof value === 'string' ? capitalize(value) : value}
      </span>
    </div>
  );
};
