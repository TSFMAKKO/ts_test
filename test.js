let data = [
  // 4h
  [
    // group start
    // 分早上下午
    [
      // 每個人的數學 國文分數
      // 學生 aaa
      [10, 20],
      // 學生bbb
      [20, 30],
    ],
    // group end
    [
      // 每個人的數學 國文分數
      [30, 40],
    ],
  ],
  // 6h
  [
    // 早上
    [
      // 學生 ddd eee
      [40, 50],
      [50, 60],
    ],
    // 下午
    [
      // 學生fff
      [60, 70],
    ],
  ],
  // 8h
  [
    [
      [70, 80],
      [80, 90],
    ],
    [[90, 100]],
  ],
];

console.log("data.flat():", data.flat(),data.flat().length);

let ary_sum = [];
let ary_count = [];

// 三組時段 4h 6h 8h
for (let k = 0; k < data.length; k++) {
  // 早or下午 兩種 
  for (let j = 0; j < data[k].length; j++) {
    let group = data[k][j];
    console.log("group:", group);
    // let sum = 0;
    // let count = 0;

    // flat() 降維度
    let sum = group.flat().reduce((acc, curr) => {
      // count += 1;
      return acc + curr;
    }, 0);

    let = count = group.flat().length;

    // 這樣才會產生六組
    ary_sum.push(sum);
    ary_count.push(count);
  }
}

console.log(ary_sum);
console.log(ary_count);

// let ary_avg=[]
// for (let i = 0; i < ary_sum.length; i++) {
//     ary_avg.push(ary_sum[i]/ary_count[i])

// }

let ary_avg = ary_sum.map((sum, i) => {
  return sum / ary_count[i];
});

console.log("ary_avg:", ary_avg);
