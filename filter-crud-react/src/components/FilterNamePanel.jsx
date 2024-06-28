import {InputText} from "primereact/inputtext";

export default function FilterNamePanel({draftFilter, handleNameChange}) {

    return (
        <div className={'cr-filter__block cr-filter__name'}>
            <div className={'cr-filter__label'}>
                <label htmlFor="filterName">Filter Name</label>
            </div>
            <div className={'cr-filter__body'}>
                <InputText value={draftFilter.name} onChange={handleNameChange} id="filterName"/>
            </div>
        </div>
    );
}
