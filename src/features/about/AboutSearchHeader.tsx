import React, { useState } from "react";
import { FilterForm, FormAction, FormItem } from "../../shared/ui/FilterForm";
import Select, { IOption, ValueType } from "../../shared/ui/Select";
import Input from "../../shared/ui/Input";
import { Button } from "../../shared/ui/Button";
import DayPicker from "../../shared/ui/DayPicker";

export const AboutSearchHeader = () => {
  const [selectedOption, setSelectedOption] = useState<ValueType>(null);
  const [date, setDate] = useState<Date | null>(new Date());

  const options: IOption[] = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Orange", value: "orange" },
  ];

  return (
    <>
      <FilterForm>
        <FormItem>
          <div className="grid grid-cols-5 gap-x-5 gap-y-4">
            <Select
              label="Choose a fruit"
              value={selectedOption}
              onChange={(value) => setSelectedOption(value)}
              options={options}
              required
            />
            <Input label="Age" required />
            <DayPicker
              label="Birth Date"
              date={date}
              onChange={(value) => setDate(value)}
            />
          </div>
        </FormItem>
        <FormAction>
          <Button
            type="button"
            title="Search"
            label="Search"
            variant="contained"
          />
          <Button
            type="button"
            title="Reset"
            label="Reset"
            variant="outlined"
          />
          <Button type="button" title="Reset" />
        </FormAction>
      </FilterForm>
    </>
  );
};
