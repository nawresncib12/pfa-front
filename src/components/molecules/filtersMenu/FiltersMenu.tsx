import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { capitalizeFirstLetter, splitCamelCase } from "../../../utils";
import * as S from "./filtersMenu.styles";
import "./styles.css";

export type FilterFields = "mealType" | "dishType" | "dietLabels" | "cuisineType";

export type FilterGroups = {
  [key in FilterFields]: {
    value: string;
    checked: boolean;
  }[];
};

type FiltersMenuProps = {
  filterGroups: FilterGroups;
  toggleFilter: (filterGroup: FilterFields, value: string) => void;
  sortByOptions: string[];
  sortByOption: string;
  sortBy: (option: string) => void;
};

const FiltersMenu = ({
  filterGroups,
  toggleFilter,
  sortBy,
  sortByOptions,
  sortByOption
}: FiltersMenuProps) => {
  return (
    <S.FiltersContainer>
      <h3>Filters</h3>
      <div style={{ display: "flex", alignItems: "center", margin: "5px 15px" }}>
        {sortByOptions.length > 0 && (
          <RadioGroup.Root className="RadioGroupRoot" value={sortByOption} aria-label="Sort By">
            {sortByOptions.map((option) => (
              <div key={option} style={{ display: "flex", alignItems: "center" }}>
                <RadioGroup.Item
                  className="RadioGroupItem"
                  value={option}
                  id={option}
                  onClick={(event) => sortBy(option)}
                >
                  {option === sortByOption && (
                    <RadioGroup.Indicator color="black" className="RadioGroupIndicator" />
                  )}
                </RadioGroup.Item>
                <label className="Label" htmlFor={option}>
                  {option}
                </label>
              </div>
            ))}
          </RadioGroup.Root>
        )}
      </div>
      {Object.entries(filterGroups).map(([filterGroup, elements]) => (
        <div key={filterGroup}>
          <h5 style={{ margin: "0px" }}>{capitalizeFirstLetter(splitCamelCase(filterGroup))}</h5>
          {elements.map((option) => (
            <div
              key={option.value}
              style={{
                display: "flex",
                alignItems: "center",
                margin: "5px 15px"
              }}
            >
              <Checkbox.Root
                className="CheckboxRoot"
                checked={option.checked}
                onClick={(event) => toggleFilter(filterGroup as FilterFields, option.value)}
                id={option.value}
              >
                <Checkbox.Indicator className="CheckboxIndicator">
                  {option && <CheckIcon />}
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className="Label" htmlFor={option.value}>
                {option.value}
              </label>
            </div>
          ))}
        </div>
      ))}
    </S.FiltersContainer>
  );
};

export default FiltersMenu;
