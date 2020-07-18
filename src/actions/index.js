export const GET_HERO = 'GET_HERO';

export function getHero(character){
    const urlMarvel = `https://gateway.marvel.com:443/v1/public/characters?ts=1&name=${character}&apikey=991962cadd87c122479853678485c080&hash=b614aeb1a676b9c3eeed3f2b1a593f62`
    return function (dispatch){
        return fetch(urlMarvel)
        .then (data => data.json())
        .then (resp => {
            dispatch({
                type: GET_HERO,
                payload: resp.data
            })
          })
        .catch((error) => console.log(error));
    }
}