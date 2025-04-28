import React, { useState } from "react";
import { FilterForm, FormItem } from "../../shared/ui/FilterForm";
import Select, { IOption, ValueType } from "../../shared/ui/Select";
import Input from "../../shared/ui/Input";

export const AboutSearchHeader = () => {
  const [selectedOption, setSelectedOption] = useState<ValueType>(null);

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
          </div>
        </FormItem>
      </FilterForm>
    </>
  );
};
