let index = 0;

function main(){
    let numberList = [14, 4, 10, 9, 1, 2];

    let listSort = quickSort(numberList);
}

function quickSort(arr){
    if(arr.length == 0) return[];

    let mediumIndex = Math.floor(arr.length/2);
    let pivote = arr[mediumIndex];

    let leftArr = [];
    let rightArr = [];

    for(let i=0;i<arr.length;i++){
        if(i != mediumIndex){
            if(arr[i] < pivote){
                leftArr.push(arr[i]);
            }
            else{
                rightArr.push(arr[i]);
            }
        }
    }

    leftArr = quickSort(leftArr);
    leftArr = quickSort(rightArr);
    console.log(leftArr);
    console.log(rightArr);
}

main();
