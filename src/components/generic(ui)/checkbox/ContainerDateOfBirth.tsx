import { ReactNode, SetStateAction, useState } from "react";
import "./ContainerDateOfBirth.css";
import SelectInput, { SelectOption } from "./Select-input";

export interface ContainerDateOfBirthProps {
  type?: string;
  className?: string;
  inputClassName?: string;
  placeholder?: string;
  for?: any;
  children?: any;
  label?: any;
}

const data = {
  month: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
}

const ContainerDateOfBirth: React.FunctionComponent<
  ContainerDateOfBirthProps
> = () => {
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const checkValidYears = (value: any) => {
    if (value > '2002') {
      return
    }
    setYear(value)
  }

  const getDayOptions = (): SelectOption[] => {
    return new Array(31).fill(0).map((item, index) => ({
      value: index + 1,
      text: index + 1
    }))
  }

  const getMonthOptions = (): ReactNode[] => data.month.map((item, index) => <option key={index} value={index + 1}>{item}</option>)
  const getYearOptions = (): ReactNode[] => {
    const max = new Date().getFullYear()
    const min = max - 20
    const dateOptionsArray = []
    for (let i = max; i >= min; i--) {
      dateOptionsArray.push(<option key={i} value={i}>{i}</option>)
    }

    return dateOptionsArray
  }
  return (
    <div className="date-of-birth_container">
      <p className="day-of-birth_title">Дата рождения</p>
      <div></div>
        <SelectInput name="day" id="day-select" options={getDayOptions()} />
      <div className="month-of-birth_container">
        <select name="month" id="month-select" value={month} onChange={(event) => setMonth(event.target.value)}>
          {getMonthOptions()}
        </select>
      </div>
      <div className="year-of-birth_container">
        <select name="year" id="year-select" value={year} onChange={(event) => checkValidYears(event.target.value)}>
          {getYearOptions()}
        </select>
      </div>
    </div>
  );
};

export default ContainerDateOfBirth;
