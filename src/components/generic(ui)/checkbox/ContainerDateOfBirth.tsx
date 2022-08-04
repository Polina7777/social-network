import { useState } from "react";
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
  value?:string;
  setValueHandler?: (value: string) => void;
  setDayHandler?:(value: string) => void;
}

const data = {
  TITLE:'Дата рождения',
  DAYS: 31,
  MONTH: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
  YEAR:{
    MAX: 2022,
    MIN: 1960
  }
}

const ContainerDateOfBirth: React.FunctionComponent<
  ContainerDateOfBirthProps
> = (setValueHandler) => {
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const checkValidYears = (value: any) => {
    if (value > '2002') {
      return
    }
    setYear(value)
  }

  const getDayOptions = (): SelectOption[] => {
    return new Array(data.DAYS).fill(0).map((item, index) => ({
      value: index + 1,
      text: index + 1
    }))
  }

  const getMonthOptions = (): SelectOption[] => {
    return data.MONTH.map((item, index) => ({
      value: index + 1,
      text: item
    }))
  }

  const getYearOptions = (): SelectOption[] => {

    const dateOptionsArray = []
    for (let i = data.YEAR.MAX; i >= data.YEAR.MIN; i--) {
      dateOptionsArray.push({
         value: i,
         text: i })
    }
    return dateOptionsArray
  }

  return (
    <div className="date-of-birth__container">
      <p className="date-of-birth__title">{data.TITLE}</p>
      <div className="day-of-birth__container">
        <SelectInput name="day" id="day-select" options={getDayOptions()} />
        <SelectInput name="month" id="month-select" options={getMonthOptions()} />
        <SelectInput name="year" id="year-select" options={getYearOptions()} />
        </div>
    </div>
  );
};

export default ContainerDateOfBirth;
