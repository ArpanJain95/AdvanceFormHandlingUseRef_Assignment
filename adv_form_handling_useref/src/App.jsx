import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const onLoadRef = useRef()
  const dateRef = useRef()
  const monthRef = useRef()
  const yearRef = useRef()
  const maleRef = useRef(null)
  const femaleRef = useRef(null)
  const contactRef = useRef()

  const [fullNameValid, setFullNameValid] = useState(false)
  const [dateValid, setDateValid] = useState(false)
  const [monthValid, setMonthValid] = useState(false)
  const [yearValid, setYearValid] = useState(false)
  const [genderChecked, setGenderChecked] = useState(false)
  const [contactValid, setContactValid] = useState(false)
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    onLoadRef.current.focus()
  }, [])

  const nameValid = (event) => {
    setFullNameValid(event.target.value.length > 0);
  }

  const ifValid = (event, len, setStuff, focusTo) => {
    const isNumber = /^\d+$/.test(event)
    setStuff(isNumber && event.length === len)
    if(event.length === len){
      focusTo.current.focus()
    }
  }

  const handleCheckbox = (event, otherRef) => {
    if(event.target.checked) {
      setGenderChecked(true)
      otherRef.current.disabled = true;
    } else {
      setGenderChecked(false)
      otherRef.current.disabled = false;
    }
  }

  useEffect(() => {
    setFormValid(fullNameValid && dateValid && monthValid && yearValid && genderChecked && contactValid)
  }, [fullNameValid, dateValid, monthValid, yearValid, genderChecked, contactValid]);

  const handleSubmit = () => {
    console.log("Form Submited Successfully");
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label style={{display: 'block'}}>
            Full name:
            <input type="text" name="fullName" placeholder="Full Name" ref={onLoadRef} onChange={nameValid} />
          </label>
          <label style={{display: 'block'}}>
            Birth date:
            <input type="text" name="date" placeholder="DD" ref={dateRef} onChange={(e) => ifValid(e.target.value, 2, setDateValid, monthRef)} />
            <input type="text" name="date" placeholder="MM" ref={monthRef} onChange={(e) => ifValid(e.target.value, 2, setMonthValid, yearRef)} />
            <input type="text" name="date" placeholder="YYYY" ref={yearRef} onChange={(e) => ifValid(e.target.value, 4, setYearValid, contactRef)} />
          </label>
          <label>
            Contact:
            <input type="text" name="contact" placeholder="Mobile Number" ref={contactRef} onChange={(e) => ifValid(e.target.value, 10, setContactValid, )} />
          </label>
          <label style={{display: 'block'}}>
            Gender:
            <label>
              <input type="checkbox" ref={maleRef} name="checkBoxMale" disabled={false} onChange={(e) => handleCheckbox(e, femaleRef)} />
              <span>Male</span>
            </label>
            <label>
              <input type="checkbox" ref={femaleRef} name="checkBoxFemale" disabled={false} onChange={(e) => handleCheckbox(e, maleRef)} />
              <span>Female</span>
            </label>
          </label>
          <button type="submit" disabled={!formValid}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
