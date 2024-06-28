import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import '../styles/filter-list.css';

export default function FilterList({filtersData, addFilterAction}) {

    return (
      <>
          <div className="filters">
              <DataTable value={filtersData}>
                  <Column field="id" header="Id"/>
                  <Column field="filterName" header="Filter Name"/>
                  <Column field="criteriaCount" header="Number of Criteria"/>
                  <Column field="filterPriority" header="Priority"/>
              </DataTable>

              <Button className="p-button-secondary"
                  onClick={addFilterAction} label="Add Filter"  />
          </div>
      </>
    );
}
