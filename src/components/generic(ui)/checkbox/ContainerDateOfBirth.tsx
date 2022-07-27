import "./ContainerDateOfBirth.css";

export interface ContainerDateOfBirthProps {
  type?: string;
  className?: string;
  inputClassName?: string;
  placeholder?: string;
  for?: any;
  children?: any;
  label?: any;
}

const ContainerDateOfBirth: React.FunctionComponent<
  ContainerDateOfBirthProps
> = () => {
  return (
    <div className="date-of-birth_container">
      <div className="day-of-birth_container">
        <select name="day" id="day-select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
      </div>
      <div className="month-of-birth_container">
      <select name="month" id="month-select">
          <option value="1">январь</option>
          <option value="2">февраль</option>
          <option value="3">март</option>
          <option value="4">апрель</option>
          <option value="5">май</option>
          <option value="6">июнь</option>
          <option value="7">июль</option>
          <option value="8">август</option>
          <option value="9">сентябрь</option>
          <option value="10">октябрь</option>
          <option value="11">ноябрь</option>
          <option value="12">декабрь</option>
 
        </select>
      </div>
      <div className="year-of-birth_container">
      <select name="year" id="year-select">
      <option value="1985">1985</option>
          <option value="1986">1986</option>
          <option value="1987">1987</option>
          <option value="1988">1988</option>
          <option value="1989">1989</option>
          <option value="1990">1990</option>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
          <option value="1994">1994</option>
          <option value="1995">1995</option>
          <option value="1996">1996</option>
          <option value="1997">1997</option>
          <option value="1998">1998</option>
          <option value="1999">1999</option>
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
        </select>
      </div>
    </div>
  );
};

export default ContainerDateOfBirth;
