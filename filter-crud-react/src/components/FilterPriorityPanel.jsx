import {RadioButton} from "primereact/radiobutton";

export default function FilterPriorityPanel({draftFilter, handlePriorityChange}) {

    return (
        <div className={'cr-filter__block cr-filter__selection'}>
            <div className={'cr-filter__label cr-filter__selection_label '}>Priority</div>
            <div className={'cr-filter__body cr-filter__selection__list '}>
                <div className="p-field-radiobutton col">
                    <RadioButton
                        inputId="selecton1"
                        name="priority"
                        value="Low"
                        onChange={(e) => handlePriorityChange(e.value)}
                        checked={draftFilter.priority === 'Low'}/>
                    <label htmlFor="city1">Low</label>
                </div>
                <div className="p-field-radiobutton  col">
                    <RadioButton
                        inputId="selecton2"
                        name="priority"
                        value="Medium"
                        onChange={(e) => handlePriorityChange(e.value)}
                        checked={draftFilter.priority === 'Medium'}/>
                    <label htmlFor="city2">Medium</label>
                </div>
                <div className="p-field-radiobutton  col">
                    <RadioButton
                        inputId="selecton3"
                        name="priority"
                        value="High"
                        onChange={(e) => handlePriorityChange(e.value)}
                        checked={draftFilter.priority === 'High'}/>
                    <label htmlFor="city3">High</label>
                </div>
            </div>
        </div>
    );
}
