const data = Array.from({ length: 100 }, (_, i) => i + 1);

function binarySearch(data, target) {
    let left = 0;
    let right = data.length - 1;

    while (left <= right) {
        const mid = Math.floor((right + left) / 2);

        if (data[mid] == target) {
            return data[mid];
        } else if (target < data[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

console.log(binarySearch(data, 50));
