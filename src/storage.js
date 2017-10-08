import {easyStore} from 'react-easy-state';
import {easyParams} from 'react-easy-params';

const storage = easyStore({
    prints: 0,
    shirtSize: '',
    hasShirtInCart: false,
    hasPrintsInCart: false,
})

easyParams(storage, {
    prints: ['url', 'history'],
    shirtSize: ['url', 'history'],
})

export default storage;