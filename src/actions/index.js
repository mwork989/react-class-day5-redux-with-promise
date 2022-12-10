export function latestIndiaNews(){

    const url =  'https://newsapi.org/v2/top-headlines?country=in&apiKey=362d5cd20958413dbd382057cd77b44f';
    
    const response  = fetch(url,{method:'GET'}).then((response)=> response.json())

    return{
        type:'GET_TOP_HEADLINES_OF_INDIA',
        payload:response

    }
}
