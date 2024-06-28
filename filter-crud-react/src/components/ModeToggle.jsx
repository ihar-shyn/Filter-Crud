import {ToggleButton} from "primereact/togglebutton";

export default function ModeToggle({modalMode, setModalMode}) {

    return (
        <div className= {"app__mode"}>
            <div className={"app__mode-label"}>Modal mode </div>
            <ToggleButton checked={modalMode} onChange={() => {setModalMode(!modalMode)}}
                          onLabel={"ON"} offLabel={"OFF"} />
        </div>
    );
}
