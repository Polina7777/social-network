import React, { useState } from "react";
import { ContainerDateOfBirthProps } from "./ContainerDateOfBirth-interface";
import "./ContainerDateOfBirth.css";
import SelectInput from "../select-input/Select-input";
import { SelectOption } from "../select-input/Select-input-interface";

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
> = ({dateSelect}) => {
  const [value,setValue] = useState('')
  const [day,setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const[selected,setSelected] = useState('')

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
        <SelectInput selectHandlerChange={dateSelect} name="day" id="day-select" options={getDayOptions()} />
        <SelectInput selectHandlerChange={dateSelect} name="month" id="month-select" options={getMonthOptions()} />
        <SelectInput selectHandlerChange={dateSelect} name="year" id="year-select" options={getYearOptions()} />
        </div>
    </div>
    
  );
};

export default ContainerDateOfBirth;
