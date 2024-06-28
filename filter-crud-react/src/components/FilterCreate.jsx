import '../styles/filter-create.css';
import {Button} from "primereact/button";
import {useState} from "react";
import {getDefaultRowByType, getDefaultRow} from "../types/types"
import FilterNamePanel from "./FilterNamePanel";
import FilterPriorityPanel from "./FilterPriorityPanel";
import FilterCriteriaPanel from "./FilterCriteriaPanel";
import { Message } from 'primereact/message';

export default function FilterCreate({handleCancelClick, handleSaveClick}) {

    const defaultDraftFilter = {
        name: "My Filter",
        priority: "Low",
        criteriaList: [
            {"condition": "START_WITH", "val": "Meow", "type": "TITLE"},
            {"condition": "MORE", "val": 4, "type": "AMOUNT"}
        ]
    };

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const [error, setError] = useState(null);

    const [draftFilter, setDraftFilter] = useState(defaultDraftFilter);

    const copyFilter = (oldFilter) => {
        const updatedCriteriaList = [];
        oldFilter.criteriaList.forEach((criteria) => {
            updatedCriteriaList.push({...criteria})
        });

        return {...oldFilter, criteriaList: updatedCriteriaList};
    }

    const handleNameChange = (event) => {
        setDraftFilter(oldDraftFilter => {
            const updatedFilter = copyFilter(oldDraftFilter)
            updatedFilter.name = event.target.value;
            return updatedFilter;
        });
    }

    const handlePriorityChange = (updateValue) => {
        setDraftFilter(oldDraftFilter => {
            const updatedFilter = copyFilter(oldDraftFilter)
            updatedFilter.priority = updateValue;
            return updatedFilter;
        });
    }

    const handleTypeChange = (index, updatedType) => {
        const prevCriteria = draftFilter.criteriaList[index];
        if (prevCriteria.type !== updatedType) {
            setDraftFilter((prevValue) => {
                const updateFilter = copyFilter(prevValue);
                updateFilter.criteriaList[index] = getDefaultRowByType(updatedType);
                return updateFilter;
            });
        }
    }

    const handleConditionChange = (index, updatedCondition) => {
        const prevCriteria = draftFilter.criteriaList[index];
        if (prevCriteria.condition !== updatedCondition) {
            setDraftFilter((prevValue) => {
                const updateFilter = copyFilter(prevValue);
                updateFilter.criteriaList[index].condition = updatedCondition;
                return updateFilter;
            })
        }
    }

    const handleValueChange = (index, updatedValue) => {
        const prevCriteria = draftFilter.criteriaList[index];
        if (prevCriteria.val !== updatedValue) {
            setDraftFilter((prevValue) => {
                const updateFilter = copyFilter(prevValue);
                updateFilter.criteriaList[index].val = updatedValue;
                return updateFilter;
            })
        }
    }

    const handleCriteriaRemove = (index) => {
        if (draftFilter.criteriaList.length <= 1) {
            alert("Filter should has at least one criteria");
            return
        }

        setDraftFilter((prevValue) => {
            const updateFilter = copyFilter(prevValue);
            updateFilter.criteriaList.splice(index, 1);
            return updateFilter;
        });
    }

    const handleAddRow = () => {
        setDraftFilter((prevValue) => {
            const updateFilter = copyFilter(prevValue);
            updateFilter.criteriaList.push(getDefaultRow());
            return updateFilter;
        });
    }

    const showError = (message) => {
        setError(message);
        setButtonDisabled(false);
    }

    const onSaveClick = () => {
        setButtonDisabled(true);
        if (validateDraftFilter(draftFilter)) {
            handleSaveClick(draftFilter, showError);
        } else {
            setButtonDisabled(false);
        }
    }

    const validateDraftFilter = (draftFilter) => {
        if (draftFilter.name && draftFilter.name.trim().length > 0) {
            return true;
        }
        setError("Name shouldn't be blank");
        return false;
    };

    return (
        <div className={'cr-filter'}>
            <div className={'cr-filter__container-body'}>
                {error && <Message severity="error" text={error} />}
                <FilterNamePanel draftFilter={draftFilter} handleNameChange={handleNameChange}/>

                <FilterCriteriaPanel
                    handleAddRow={handleAddRow}
                    handleConditionChange={handleConditionChange}
                    handleCriteriaRemove={handleCriteriaRemove}
                    handleTypeChange={handleTypeChange}
                    handleValueChange={handleValueChange}
                    draftFilter={draftFilter}/>
                <FilterPriorityPanel draftFilter={draftFilter} handlePriorityChange={handlePriorityChange}/>
            </div>
            <div className={'cr-filter__container-footer'}>
                <Button className={'cr-filter__save'} label="Save" onClick={onSaveClick} disabled={buttonDisabled}/>
                <Button className={'cr-filter__cancel'} label="Cancel" onClick={handleCancelClick} disabled={buttonDisabled}/>
            </div>
        </div>
    );
}
