import React, { useState, useEffect, useRef } from 'react';
import { Input as AntInput, InputRef, DatePicker as AntDatePicker, TreeSelect as AntTreeSelect } from 'antd';

import { schema } from "./validation";

import Reservation from "../MiniFormik/MiniFormik";
import {useFormik} from "formik";

const Samurai = () => {
  const [searchValue, setSearchValue] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      date: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  const inputRef = useRef<InputRef>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current!.focus({
        cursor: 'end'
      });
    }
  }, []);

  const validForm = async (event: any) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value
    }
    const isValid = await schema.isValid(formData);
    console.log(isValid);
  }

  const changeSearchValue = (ev: any) => {
    setSearchValue(ev.target.value)
  }

  return (
    <div>
      <h1>Yup Lib</h1>
      <div>
        <form onSubmit={validForm}>
          <input
            type="text"
            placeholder="name"
            // value=""
            className="el3"
            onBlur={validForm}
          />
          <AntInput.TextArea
            name="name1"
            // value=""
            className="el2"
            ref={inputRef}
          />
          <AntDatePicker.RangePicker

          />
          <input type="submit"/>
        </form>
      </div>
      <br/>
      <div>
        <div>Форма поиска</div>
        <form>
          <input
            type="text"
            value={searchValue}
            onChange={changeSearchValue}
          />
          <input
            type="button"
            value="Искать"
          />
          <AntTreeSelect
            showSearch
            placeholder={'select'}
            // suffixIcon={false}
          />
        </form>
      </div>

      <div>
        TEST MINI  FORMIK:
        <form onSubmit={formik.handleSubmit}>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </form>
      </div>
    </div>
  );
};

export default Samurai;