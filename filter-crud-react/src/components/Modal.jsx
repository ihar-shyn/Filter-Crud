import FilterCreate from "./FilterCreate";
import {Button} from "primereact/button";
import '../styles/modal.css';

export default function Modal({filterService, handleCancelClick, handleSaveClick}) {

    return (
        <div className={"modal"}>
            <div className={"overlay"}/>
            <div className={"modal-content"}>
                <div className={'modal-content__header'}>
                    <div>Filter</div>
                    <div className={'modal-content__close'}>
                        <Button icon="pi pi-times"
                                onClick={handleCancelClick}
                        />
                    </div>
                </div>
                <FilterCreate filterService={filterService}
                              handleSaveClick={handleSaveClick}
                              handleCancelClick={handleCancelClick}/>
            </div>
        </div>
    );
}
