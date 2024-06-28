import {useEffect, useState} from "react";
import './App.css';
import FilterService from "./services/FilterService";
import FilterList from "./components/FilterList";
import Modal from "./components/Modal";
import {serverUrl} from "./config";

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import FilterCreate from "./components/FilterCreate";
import ModeToggle from "./components/ModeToggle";

function App() {
    const [mode, setMode] = useState('View');
    const [modalMode, setModalMode] = useState(false);
    const [filters, setFilters] = useState([]);
    const filterService = new FilterService(serverUrl);

    const handleAddFilterButton = () => {setMode('Create')};

    const handleCancelClick = () => {setMode('View')};

    const handleSaveClick = (draftFilter, onErrorCallback) => {
        filterService.saveFilter(draftFilter).then((response) => {
            setFilters((oldFilters) => {
                const updatedFilters = [];
                oldFilters.forEach((oldFilter) => {
                    updatedFilters.push({...oldFilter});
                });
                const addedFilter = {
                    id: response.data.id,
                    filterName: response.data.name,
                    criteriaCount: response.data.criteriaList.length,
                    filterPriority: response.data.priority
                };
                updatedFilters.push(addedFilter);

                return updatedFilters;
            });
            setMode('View');
        }).catch((error) => {
            onErrorCallback('While saving something goes wrong ....');
            console.log(error);
        });
    }

    const retrieveFilters = () => {
        filterService.getAllFilters().then((response) => {
            const filtersList = [];
            response.data.forEach(filter => {
                filtersList.push(
                    {
                        id : filter.id,
                        filterName: filter.name,
                        criteriaCount: filter.criteriaList.length,
                        filterPriority: filter.priority
                    });
            });
            setFilters(filtersList);
        })
    };

    useEffect(retrieveFilters, []);

    return (
        <div className="App">
            { mode === "View" && <ModeToggle modalMode={modalMode} setModalMode={setModalMode}/>}
            { mode === "View" && <FilterList filtersData={filters} addFilterAction={handleAddFilterButton}/>}
            { mode === "Create" && !modalMode &&
                <FilterCreate filterService={filterService} handleCancelClick={handleCancelClick} handleSaveClick={handleSaveClick}/>
            }
            { mode === "Create" && modalMode &&
                <Modal filterService={filterService} handleCancelClick={handleCancelClick} handleSaveClick={handleSaveClick}/>
            }
        </div>
    );
}

export default App;
