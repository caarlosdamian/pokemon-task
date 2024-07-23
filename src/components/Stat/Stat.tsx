import { capitalize } from '../../utils';
import './Stat.css';

interface Props {
  name: string;
  value: number;
}
export const Stat = ({ name, value }: Props) => {
  return (
    <div className="stat">
      <span>{capitalize(name)}</span>
      <div className="stat_value">
        <span className="grapic_value">{value}</span>
        <div className="grapic_container">
          <div className="grapic" style={{ width: `${value}px` }}></div>
        </div>
      </div>
    </div>
  );
};
