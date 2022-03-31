function formatterDate(value) {
    console.log(value);
    let day = new Date(value).getDate();
    let month = new Date(value).getMonth() + 1;
    let year = new Date(value).getFullYear();
    return `${day}/${month}/${year}`
}

function cellStyle(value, row) {
    var classes = [
        'bg-blue',
        'bg-green',
        'bg-orange',
        'bg-yellow',
        'bg-red'
    ]

    if (value > 10000) {
        return {
            css: {
                "background-color": 'yellow',
                color: "white"
            }
        }
    }
}