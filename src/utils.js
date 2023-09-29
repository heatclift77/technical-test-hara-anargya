import citys from './assets/js/city';
import provinces from './assets/js/province';

export function thousands(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function getCityByProvince(id) {
    return citys.filter(item =>item.provinsi_id == id)
}

export function getProvinceByCity(city_id) {
    const current_city = citys.filter(item => item.id == city_id)
    const prov = provinces.filter(item => item.id == current_city[0].provinsi_id)

    return prov
}

export function sortCityById(arg, city) {
    const asc = (a, b) => a.id - b.id
    const desc = (a, b) => b.id - a.id

    const action = (a, b) => {
        if(arg.toLowerCase() === 'asc') {
            return asc(a, b)
        }

        if(arg.toLowerCase() === 'desc') {
            return desc(a, b)
        }

        else {
            return asc(a, b)
        }
    }

    return city.sort(action)
}

export function sortCityByName(arg, city) {
    const asc = (a, b) => a.name.localeCompare(b.name)
    const desc = (a, b) => b.name.localeCompare(a.name)

    const action = (a, b) => {
        if(arg.toLowerCase() === 'asc') {
            return asc(a, b)
        }

        if(arg.toLowerCase() === 'desc') {
            return desc(a, b)
        }

        else {
            return asc(a, b)
        }
    }

    return city.sort(action)
}

export function sortProvinceById(arg, province) {
    const asc = (a, b) => a.id - b.id
    const desc = (a, b) => b.id - a.id

    const action = (a, b) => {
        if(arg.toLowerCase() === 'asc') {
            return asc(a, b)
        }

        if(arg.toLowerCase() === 'desc') {
            return desc(a, b)
        }

        else {
            return asc(a, b)
        }
    }

    return province.sort(action)
}

export function sortProvinceByName(arg, province) {
    const asc = (a, b) => a.name.localeCompare(b.name)
    const desc = (a, b) => b.name.localeCompare(a.name)

    const action = (a, b) => {
        if(arg.toLowerCase() === 'asc') {
            return asc(a, b)
        }

        if(arg.toLowerCase() === 'desc') {
            return desc(a, b)
        }

        else {
            return asc(a, b)
        }
    }

    return province.sort(action)
}