import Criteria from "./Criteria";
import {Button} from "primereact/button";

export default function FilterCriteriaPanel({draftFilter, handleTypeChange, handleConditionChange, handleValueChange, handleCriteriaRemove, handleAddRow}) {

    return (
        <div className={'cr-filter__block cr-filter__criteria '}>
            <div className={'cr-filter__label cr-filter__criteria__label'}>Criteria</div>
            <div className={'cr-filter__body cr-filter__criteria__list '}>
                {draftFilter.criteriaList.map((criteria, index) => {
                    return (<Criteria key={index}
                                      Index={index}
                                      Type={criteria.type}
                                      handleTypeChange={handleTypeChange}
                                      Condition={criteria.condition}
                                      handleConditionChange={handleConditionChange}
                                      Value={criteria.val}
                                      handleValueChange={handleValueChange}
                                      handleCriteriaRemove={handleCriteriaRemove}
                    />)
                })}

                <div className={'cr-filter__new-row'}>
                    <Button label="Add Row"
                            icon="pi pi-plus"
                            iconPos={"left"}
                            onClick={handleAddRow}
                    />
                </div>
            </div>
        </div>
    );
}
