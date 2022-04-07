const formatName = (name : string) => {
    let [first, second] = name.split('-')
    first = first.charAt(0).toUpperCase() + first.slice(1)
    switch(second){
        default: second = ''; break;
        case 'f':
            second = '♂'; break;
        case 'm':
            second ='♀'; break;
            
    }
    first = first + second
    return first
}

export default formatName