export const getInputType = (key:string):string => {
    const types = {
        text: ['id', 'picture', 'name', 'registered'],
        email: ['email'],
        number: ['age'],
        checkbox: ['isActive'],
        textArea: ['about']
    };

    for(let type in types) {
        const arr:string[] = types[type as keyof object];

        if(arr.includes(key)) return type;
    }

    return 'text';
}