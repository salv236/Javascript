//EXAMPLE

let nestedArray = [ // top, or first level - the outer most array
    ['deep'], // an array within an array, 2 levels of depth [0]
    [
      ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep [1][0], [1][1]
    ],
    
    [[['deepest'], ['deepest'] // 2 arrays nested 4 levels deep [2][0][0], [2][0][1]
      ],
      [[['deepest-est?'] // an array nested 5 levels deep [2][1][0][0]
        ]
      ]
    ]
  ];

  //exercise

  let myNestedArray = [
    // change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    // change code above this line
  ];