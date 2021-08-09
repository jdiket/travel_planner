import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'x-rapidapi-key': '79fca2444emshe9de7cb7554feb0p1de679jsn6e41699ea130',
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
    }
  };

export const getPlacesData = async () => {
    try {
        const { data: { data } } = await axios.get(URL, options);
        return data;
    } catch (error) {
        console.log(error)
    }
};