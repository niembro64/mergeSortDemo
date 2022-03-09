const combine = (l, r) => {
    var a = [];
    while (true) {
        if (l.length == 0) {
            a.push(...r);
            return a;
        } else if (r.length == 0) {
            a.push(...l);
            return a;
        } else if (l[0] <= r[0]) {
            a.push(l.shift());
        } else {
            a.push(r.shift());
        }
    }
};

const mergeSort = (a) => {
    console.log(a);
    // base case 0 or 1 items
    if (a.length <= 1) return a;

    // split into l and r
    let l = a.slice(0, Math.floor(a.length / 2));
    let r = a.slice(Math.floor(a.length / 2));

    l = mergeSort(l);
    r = mergeSort(r);

    a = combine(l,r);
    console.log(`Combined L:${l} and R:${r}`);
    // console.log(l);
    // console.log(r);

    return a;
};

left = [1, 2, 5, 10];
right = [3, 4, 6, 20];
long = [1, 3, 2, 4,100, 6, 8, 0,-1];

// console.log(combine(left, right));
console.log(mergeSort(long));