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
   let myNestedArray = [     // level 1
    ['unshift', false, 1, 2, 3, 'complex', 'nested',      // level 2
       ['loop', 'shift', 6, 7, 1000, 'method', 'deep',     // level 3
          ['concat', false, true, 'spread', 'array', 'deeper',     // level 4
             ['mutate', 1327.98, 'splice', 'slice', 'push', 'deepest']     // level 5
          ]
       ]
    ]
  ]


  