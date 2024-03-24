
function abjToArrKeys(data) {
   return Object.keys(data).map((i) => {
        return { label: i, value: i };
    })    
}

function abjToArrValue(data) {
    return Object.values(data).map((i) => {
         return { label: i, value: i };
     })    
 }

function reversed(data){
    return  data.reverse()
}

function bodyStyles(data) {
    return data.map((i) => {
         return { label: i.name, value: i.name };
     })    
 }

export {abjToArrKeys,abjToArrValue,reversed,bodyStyles}