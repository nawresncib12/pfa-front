import React, { useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import * as S from "./filtersMenu.styles";
import './styles.css';


const FiltersMenu = () => {
  const filterList=[
    {fitlerGroup: 'by Season', 
    elements: [
      'winter',
      'summer',
      'spring',
    ]}
  ]
  const [activatedFilterList, setActivatedFilterList] =useState(filterList)

  const toggleFilter = (fitlerGroup: any, value: any) => {
    let newFilters = [...activatedFilterList];
    newFilters.map((filter) => {
      if (filter.fitlerGroup == fitlerGroup) {
        if (filter.elements.includes(value)) {
          filter.elements = filter.elements.filter(
            (element) => element != value
          );
        } else {
          filter.elements.push(value);
        }
      }
    });

    setActivatedFilterList(newFilters);
  };

  return (
      <S.FiltersContainer>      
      <h3>Filter Recipes</h3>
      <h5>check the options u want</h5>
      {filterList.map((options) => (
      <div key={options.fitlerGroup}>
      <h5 style={{ margin:"0px"}}> {options.fitlerGroup} </h5>
      {options.elements.map((option) => (
      <div key={option} style={{ display: 'flex', alignItems: 'center',margin:'5px 15px'}}>
      <Checkbox.Root className="CheckboxRoot" defaultChecked onClick={event => toggleFilter(options.fitlerGroup, option)} id="c1">
        <Checkbox.Indicator className="CheckboxIndicator">
          { option && <CheckIcon />}
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="Label" htmlFor="c1">
        {option}
      </label>
      </div>
      ))}
    </div>
    ))}
    </S.FiltersContainer>
  );
};

export default FiltersMenu;
