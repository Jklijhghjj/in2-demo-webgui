import axios from 'axios';

const RENTING_REST_API_URL = 'http://localhost:8080/api/party_items';

class RentingService {

    getPartySupplies(){
        return axios.get(RENTING_REST_API_URL);
    }

}

export default new RentingService();