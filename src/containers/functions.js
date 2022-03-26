export let decimalRoundOff = (number) => {
    return Math.floor(number) == Math.round(number) ? Math.floor(number) : number
}

export let emptyDataCheck = (data) => {
    let flag;
    if (data == undefined || data == null || data == '') {
        flag = "N/A"
    } else {
        flag = data;
    }
    return flag;
}


export let addOrRemoveProp = (prop_id) => {


    let oldData = JSON.parse(localStorage.getItem('savePropList'));

    if (oldData == null || oldData == '' || oldData == undefined) {
        addFirstElement(prop_id);
    } else {
        if (existCheck(oldData, prop_id)) {
            removefromLocal(oldData, prop_id);
        } else {
            addToLocal(oldData, prop_id);
        }
    }
}

function removefromLocal(arr, item) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == item) { }
        else {
            newArr.push(arr[i]);
        }
    }
    localStorage.removeItem("save");
    localStorage.setItem('savePropList', JSON.stringify(newArr));
}

function addFirstElement(item) {
    let newArr = [];
    newArr.push(item);
    localStorage.setItem('savePropList', JSON.stringify(newArr));
}

function addToLocal(arr, item) {
    let newArr = [];
    newArr = arr;
    newArr.push(item);
    localStorage.removeItem("save");
    localStorage.setItem('savePropList', JSON.stringify(newArr));
}


let existCheck = (arr, item) => {
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
            flag = true;
        }
    }
    return flag;
}
export let toggleHeart = (item) => {

    let arr = JSON.parse(localStorage.getItem('savePropList'));
    let flag = false;
    if (arr == '' || arr == null || arr == undefined || arr.length == 0) {

    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == item) {
                flag = true;
            }
        }
    }

    return flag;
}


export let getAllProp = () => {
    console.log(JSON.parse(localStorage.getItem('savePropList')));
}



export let capitalise = (str) => {
    let str1 = str.toLowerCase();

    const arr = str1.split(" ");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }
    const str2 = arr.join(" ");
    return str2;
}