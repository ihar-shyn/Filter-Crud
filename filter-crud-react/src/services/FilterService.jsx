import axios from "axios";

class FilterService {

    constructor(baseUrl) {
        this.rest_api_url = baseUrl + '/api/filters';
    }

    getAllFilters() {
        return axios.get(this.rest_api_url);
    }

    saveFilter(jsonBody) {
        return axios.post(this.rest_api_url, jsonBody);
    }
}

export default FilterService;
