import {Dropdown} from 'primereact/dropdown';
import {InputNumber} from 'primereact/inputnumber';
import {InputText} from "primereact/inputtext";
import { Calendar } from 'primereact/calendar';
import {Button} from 'primereact/button';
import '../styles/criteria.css';
import {criteriaTypes, criteriaConditionTypes} from "../types/types";

export default function Criteria({
                                     Index,
                                     Type,
                                     handleTypeChange,
                                     Condition,
                                     handleConditionChange,
                                     Value,
                                     handleValueChange,
                                     handleCriteriaRemove
                                 }) {


    return (
        <div className={'criteria__container'}>
            <Dropdown value={Type}
                      onChange={(event) => {
                          handleTypeChange(Index, event.target.value)
                      }}
                      options={criteriaTypes}
                      optionLabel="name"
                      optionValue={"id"}
            />
            <Dropdown
                value={Condition}
                onChange={(event) => {
                    handleConditionChange(Index, event.target.value)
                }}
                options={criteriaConditionTypes.get(Type)}
                optionLabel="label"
                optionValue={"id"}
            />
            {Type === "AMOUNT" &&
                <InputNumber value={Value}
                             onChange={(event) => {handleValueChange(Index, event.value)}}
                             mode="decimal"
                             showButtons
                             min={0}
                             max={100}
                />}
            {Type === "TITLE" &&
                <InputText value={Value}
                           onChange={(event) => {handleValueChange(Index, event.target.value)}}/>}
            {Type === "DATE" &&
                <Calendar
                    value={Value}
                    dateFormat={"yy-mm-dd"}
                    onChange={(event) => {handleValueChange(Index,event.target.value)}}
                />
            }
            <Button
                icon="pi pi-minus"
                onClick={() => {handleCriteriaRemove(Index)}}
                className="p-button-rounded p-button-danger p-button-text criteria__add"/>
        </div>
    );
}
