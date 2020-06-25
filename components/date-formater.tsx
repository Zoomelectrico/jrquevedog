import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

type Props = {
  dateString: string;
};

const DateFormater = ({ dateString }: Props) => {
  const date = dayjs(dateString);
  return <time dateTime={dateString}>{date.format('MMMM D, YYYY')}</time>;
};

export default DateFormater;
