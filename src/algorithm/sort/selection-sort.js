const arr = Array.from({ length: 100 }, (_, i) => i + 1);
arr.sort(() => Math.random() - 0.5); // Xáo trộn mảng

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                const swap = arr[j];
                arr[j] = arr[i];
                arr[i] = swap;
            }
        }
    }
}

selectionSort(arr);
console.log(arr);
