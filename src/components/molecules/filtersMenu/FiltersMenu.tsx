import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as S from "./filtersMenu.styles";
import "./styles.css";

const FiltersMenu = ({ filterList, filters }: any) => {
  const [activatedFilterList, setActivatedFilterList] = filters;
  const toggleFilter = (fitlerGroup: any, value: any) => {
    const newFilters = JSON.parse(JSON.stringify(activatedFilterList));
    newFilters.map((filter: any) => {
      if (filter.fitlerGroup == fitlerGroup) {
        if (filter.elements.includes(value)) {
          filter.elements = filter.elements.filter((element: any) => element != value);
        } else {
          filter.elements.push(value);
        }
      }
    });

    setActivatedFilterList(newFilters);
    console.log(activatedFilterList);
  };

  const sortBy = (option: any) => {
    const newFilters = JSON.parse(JSON.stringify(activatedFilterList));
    newFilters[2].elements = [option];
    setActivatedFilterList(newFilters);
  };
  return (
    <S.FiltersContainer>
      <h3>Filter Recipes</h3>
      <h5>check the options u want</h5>
      {filterList.map((options: any) => (
        <div key={options.fitlerGroup}>
          <h5 style={{ margin: "0px" }}> {options.fitlerGroup} </h5>
          {options.elements.map(
            (option: any) =>
              options.fitlerGroup != "Sort By" && (
                <div
                  key={option}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "5px 15px"
                  }}>
                  <Checkbox.Root
                    className="CheckboxRoot"
                    defaultChecked
                    onClick={(event) => toggleFilter(options.fitlerGroup, option)}
                    id="c1">
                    <Checkbox.Indicator className="CheckboxIndicator">
                      {option && <CheckIcon />}
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <label className="Label" htmlFor="c1">
                    {option}
                  </label>
                </div>
              )
          )}
        </div>
      ))}
      <div style={{ display: "flex", alignItems: "center", margin: "5px 15px" }}>
        <RadioGroup.Root className="RadioGroupRoot" defaultValue="time" aria-label="View density">
          {filterList[2].elements.map((option: any) => (
            <div key={option} style={{ display: "flex", alignItems: "center" }}>
              <RadioGroup.Item
                className="RadioGroupItem"
                value={option}
                id={option}
                onClick={(event) => sortBy(option)}>
                <RadioGroup.Indicator className="RadioGroupIndicator" />
              </RadioGroup.Item>
              <label className="Label" htmlFor="r1">
                {option}
              </label>
            </div>
          ))}
        </RadioGroup.Root>
      </div>
    </S.FiltersContainer>
  );
};

export default FiltersMenu;
