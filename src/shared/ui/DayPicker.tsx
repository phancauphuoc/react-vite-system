import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type DayPickerProp = {
  id?: string;
  label: string;
  date?: Date | null | undefined;
  onChange?: (date: Date | null) => void;
  required?: boolean;
};

const DayPicker = ({ id, label, required, date, onChange }: DayPickerProp) => {
  return (
    <div className="flex flex-col gap-1 w-full custom-datepicker z-10">
      {label && (
        <label htmlFor={id} className="label-xs">
          {label} {required && <sup className="text-red-500">*</sup>}
        </label>
      )}
      <DatePicker
        className="w-[200px] h-[41.6px] rounded-md border-1 border-gray-300 border-solid"
        showIcon
        selected={date}
        onChange={onChange}
        dateFormatCalendar="yyyy/MM/dd"
        dateFormat="yyyy/MM/dd"
        showYearDropdown
        yearDropdownItemNumber={15}
        scrollableYearDropdown
      />
    </div>
  );
};

export default DayPicker;
