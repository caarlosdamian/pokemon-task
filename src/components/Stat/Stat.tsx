import { capitalize } from '../../utils';
import './Stat.css';

interface Props {
  name: string;
  value: number;
  testid?: string;
}
export const Stat = ({ name, value, testid }: Props) => {
  return (
    <div className="stat">
      <span>{capitalize(name)}</span>
      <div className="stat_value">
        <span className="grapic_value" data-testid={`${testid}-value`}>
          {value}
        </span>
        <div className="grapic_container">
          <div className="grapic" style={{ width: `${value}px` }}></div>
        </div>
      </div>
    </div>
  );
};
