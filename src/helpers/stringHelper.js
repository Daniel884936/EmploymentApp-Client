
export function separateByUperCase(value){
    value = value.trim();
    let valueAsArray = Array.from(value)    
    let strValueSeparateByUpperCase = []
    let startAuxIndexUperCase = 0;

    valueAsArray.forEach((strValue, index)=>{                
        if(isUpperCase(strValue)){
            //To push item that start with upper case 
            if(index>0){
                strValueSeparateByUpperCase.push(value.substring(startAuxIndexUperCase, index))                                
            }
            startAuxIndexUperCase = index
        }

        //To push the last index that start with upper case 
        if(index === (value.length - 1)){            
            strValueSeparateByUpperCase.push(value.substring(startAuxIndexUperCase, value.length ))                                
        }                        
    })    
    return strValueSeparateByUpperCase.join(' ')        
}

function isUpperCase(value){
    return value === value.toUpperCase();
}