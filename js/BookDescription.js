$(document).ready(function(){

	Grid.IsCheckBoxRequired = false;

    Grid.GridData.rows = [
        [
            {
                "col": "Book",
                "value": "Sar Bachan Radhasoami (Poetry) Part 1"
            }, {
                "col": "Description",
                "value": "The poetic compositions of Soamiji Maharaj, the original and authentic exposition of the principles of the Faith, the genesis and evolution of creation, the status and position of other religions vis-à-vis Sant Mat, the scope and method of devotional practices as enjoined in the Radhasoami Faith and their efficacy, and the necessity for the advent of the Supreme Being as Sant Sat Guru in this world for effecting emancipation of the soul, and the need for opening up a royal road of Surat Shabd Yoga for taking the Jiva, to the Inaccessible Region. Describes the sublimity and efficacy of RADHASOAMI Nam, secrets of the August Abode of the Supreme Father Radhasoami Dayal."
            }, {
                "col": "Language",
                "value": "English"
            }
        ],
        [
            {
                "col": "Book",
                "value": "Sar Bachan Radhasoami (Poetry) Part 2"
            }, {
                "col": "Description",
                "value": "The poetic compositions of Soamiji Maharaj, the original and authentic exposition of the principles of the Faith, the genesis and evolution of creation, the status and position of other religions vis-à-vis Sant Mat, the scope and method of devotional practices as enjoined in the Radhasoami Faith and their efficacy and the necessity for the advent of the Supreme Being as Sant Sat Guru in this world for effecting emancipation of the soul, and the need for opening up a royal road of Surat Shabd Yoga for taking the Jiva, to the Inaccessible Region. rovides a vivid description of the Jiva’s homeward journey and all the details of the regions and stages on the way."
            }, {
                "col": "Language",
                "value": "English"
            }
        ],
        [
            {
                "col": "Book",
                "value": ""
            },
            {
                "col": "Description",
                "value": ""
            },
            {
                "col": "Language",
                "value": ""
            }
        ],
        [
            {
                "col": "Book",
                "value": ""
            },
            {
                "col": "Description",
                "value": ""
            },
            {
                "col": "Language",
                "value": ""
            }
        ],
        [
            {
                "col": "Book",
                "value": ""
            },
            {
                "col": "Description",
                "value": ""
            },
            {
                "col": "Language",
                "value": ""
            }
        ],
        [
            {
                "col": "Book",
                "value": ""
            },
            {
                "col": "Description",
                "value": ""
            },
            {
                "col": "Language",
                "value": ""
            }
        ],
        [
            {
                "col": "Book",
                "value": ""
            },
            {
                "col": "Description",
                "value": ""
            },
            {
                "col": "Language",
                "value": ""
            }
        ],
        [
            {
                "col": "Book",
                "value": ""
            },
            {
                "col": "Description",
                "value": ""
            },
            {
                "col": "Language",
                "value": ""
            }
        ],
        [
            {
                "col": "Book",
                "value": ""
            },
            {
                "col": "Description",
                "value": ""
            },
            {
                "col": "Language",
                "value": ""
            }
        ],
        [
            {
                "col": "Book",
                "value": ""
            },
            {
                "col": "Description",
                "value": ""
            },
            {
                "col": "Language",
                "value": ""
            }
        ]
    ];
	/*Grid.GridData.rows = [
   [
      {
         "col":"col1",
         "value":"row1col1"
      },
      {
         "col":"col2",
         "value":"row1col1"
      },
      {
         "col":"col3",
         "value":"row1col3"
      },
      {
         "col":"col4",
         "value":"row1col4"
      },
      {
         "col":"col5",
         "value":"row1col5"
      },
      {
         "col":"col6",
         "value":"row1col6"
      },
      {
         "col":"col7",
         "value":"row1col7"
      }
   ],
   [
      {
         "col":"col1",
         "value":"row2col1"
      },
      {
         "col":"col2",
         "value":"row2col1"
      },
      {
         "col":"col3",
         "value":"row2col3"
      },
      {
         "col":"col4",
         "value":"row2col4"
      },
      {
         "col":"col5",
         "value":"row2col5"
      },
      {
         "col":"col6",
         "value":"row2col6"
      },
      {
         "col":"col7",
         "value":"row2col7"
      }
   ],
   [
      {
         "col":"col1",
         "value":"row3col1"
      },
      {
         "col":"col2",
         "value":"row3col1"
      },
      {
         "col":"col3",
         "value":"row3col3"
      },
      {
         "col":"col4",
         "value":"row3col4"
      },
      {
         "col":"col5",
         "value":"row3col5"
      },
      {
         "col":"col6",
         "value":"row3col6"
      },
      {
         "col":"col7",
         "value":"row3col7"
      }
   ],
   [
      {
         "col":"col1",
         "value":"row4col1"
      },
      {
         "col":"col2",
         "value":"row4col1"
      },
      {
         "col":"col3",
         "value":"row4col3"
      },
      {
         "col":"col4",
         "value":"row4col4"
      },
      {
         "col":"col5",
         "value":"row4col5"
      },
      {
         "col":"col6",
         "value":"row4col6"
      },
      {
         "col":"col7",
         "value":"row4col7"
      }
   ],
   [
      {
         "col":"col1",
         "value":"row5col1"
      },
      {
         "col":"col2",
         "value":"row5col1"
      },
      {
         "col":"col3",
         "value":"row5col3"
      },
      {
         "col":"col4",
         "value":"row5col4"
      },
      {
         "col":"col5",
         "value":"row5col5"
      },
      {
         "col":"col6",
         "value":"row5col6"
      },
      {
         "col":"col7",
         "value":"row5col7"
      }
   ],
   [
      {
         "col":"col1",
         "value":"row6col1"
      },
      {
         "col":"col2",
         "value":"row6col1"
      },
      {
         "col":"col3",
         "value":"row6col3"
      },
      {
         "col":"col4",
         "value":"row6col4"
      },
      {
         "col":"col5",
         "value":"row6col5"
      },
      {
         "col":"col6",
         "value":"row6col6"
      },
      {
         "col":"col7",
         "value":"row6col7"
      }
   ],
   [
      {
         "col":"col1",
         "value":"row7col1"
      },
      {
         "col":"col2",
         "value":"row7col1"
      },
      {
         "col":"col3",
         "value":"row7col3"
      },
      {
         "col":"col4",
         "value":"row7col4"
      },
      {
         "col":"col5",
         "value":"row7col5"
      },
      {
         "col":"col6",
         "value":"row7col6"
      },
      {
         "col":"col7",
         "value":"row7col7"
      }
   ],
   [
      {
         "col":"col1",
         "value":"row8col1"
      },
      {
         "col":"col2",
         "value":"row8col1"
      },
      {
         "col":"col3",
         "value":"row8col3"
      },
      {
         "col":"col4",
         "value":"row8col4"
      },
      {
         "col":"col5",
         "value":"row8col5"
      },
      {
         "col":"col6",
         "value":"row8col6"
      },
      {
         "col":"col7",
         "value":"row8col7"
      }
   ],
   [
      {
         "col":"col1",
         "value":"row9col1"
      },
      {
         "col":"col2",
         "value":"row9ol1"
      },
      {
         "col":"col3",
         "value":"row9col3"
      },
      {
         "col":"col4",
         "value":"row9col4"
      },
      {
         "col":"col5",
         "value":"row9col5"
      },
      {
         "col":"col6",
         "value":"row9col6"
      },
      {
         "col":"col7",
         "value":"row9col7"
      }
   ],
   [
      {
         "col":"col1",
         "value":"row10col1"
      },
      {
         "col":"col2",
         "value":"row10col1"
      },
      {
         "col":"col3",
         "value":"row10col3"
      },
      {
         "col":"col4",
         "value":"row10col4"
      },
      {
         "col":"col5",
         "value":"row10col5"
      },
      {
         "col":"col6",
         "value":"row10col6"
      },
      {
         "col":"col7",
         "value":"row10col7"
      }
   ],
   [
      {
         "col":"col1",
         "value":"row11col1"
      },
      {
         "col":"col2",
         "value":"row11col1"
      },
      {
         "col":"col3",
         "value":"ro11col3"
      },
      {
         "col":"col4",
         "value":"row11col4"
      },
      {
         "col":"col5",
         "value":"row11col5"
      },
      {
         "col":"col6",
         "value":"ro11col6"
      },
      {
         "col":"col7",
         "value":"row11col7"
      }
   ],
   [
      {
         "col":"col1",
         "value":"row12col1"
      },
      {
         "col":"col2",
         "value":"row12col1"
      },
      {
         "col":"col3",
         "value":"row12col3"
      },
      {
         "col":"col4",
         "value":"row12col4"
      },
      {
         "col":"col5",
         "value":"row12col5"
      },
      {
         "col":"col6",
         "value":"row12col6"
      },
      {
         "col":"col7",
         "value":"row12col7"
      }
   ],
   [
      {
         "col":"col1",
         "value":"row7col1"
      },
      {
         "col":"col2",
         "value":"row7col1"
      },
      {
         "col":"col3",
         "value":"row7col3"
      },
      {
         "col":"col4",
         "value":"row7col4"
      },
      {
         "col":"col5",
         "value":"row7col5"
      },
      {
         "col":"col6",
         "value":"row7col6"
      },
      {
         "col":"col7",
         "value":"row7col7"
      }
   ],
   [
      {
         "col":"col1",
         "value":"row7col1"
      },
      {
         "col":"col2",
         "value":"row7col1"
      },
      {
         "col":"col3",
         "value":"row7col3"
      },
      {
         "col":"col4",
         "value":"row7col4"
      },
      {
         "col":"col5",
         "value":"row7col5"
      },
      {
         "col":"col6",
         "value":"row7col6"
      },
      {
         "col":"col7",
         "value":"row7col7"
      }
   ],
   [
      {
         "col":"col1",
         "value":"row7col1"
      },
      {
         "col":"col2",
         "value":"row7col1"
      },
      {
         "col":"col3",
         "value":"row7col3"
      },
      {
         "col":"col4",
         "value":"row7col4"
      },
      {
         "col":"col5",
         "value":"row7col5"
      },
      {
         "col":"col6",
         "value":"row7col6"
      },
      {
         "col":"col7",
         "value":"row7col7"
      }
   ],
   [
      {
         "col":"col1",
         "value":"row7col1"
      },
      {
         "col":"col2",
         "value":"row7col1"
      },
      {
         "col":"col3",
         "value":"row7col3"
      },
      {
         "col":"col4",
         "value":"row7col4"
      },
      {
         "col":"col5",
         "value":"row7col5"
      },
      {
         "col":"col6",
         "value":"row7col6"
      },
      {
         "col":"col7",
         "value":"row7col7"
      }
   ],
   [
      {
         "col":"col1",
         "value":"row7col1"
      },
      {
         "col":"col2",
         "value":"row7col1"
      },
      {
         "col":"col3",
         "value":"row7col3"
      },
      {
         "col":"col4",
         "value":"row7col4"
      },
      {
         "col":"col5",
         "value":"row7col5"
      },
      {
         "col":"col6",
         "value":"row7col6"
      },
      {
         "col":"col7",
         "value":"row7col7"
      }
   ],
   [
      {
         "col":"col1",
         "value":"row7col1"
      },
      {
         "col":"col2",
         "value":"row7col1"
      },
      {
         "col":"col3",
         "value":"row7col3"
      },
      {
         "col":"col4",
         "value":"row7col4"
      },
      {
         "col":"col5",
         "value":"row7col5"
      },
      {
         "col":"col6",
         "value":"row7col6"
      },
      {
         "col":"col7",
         "value":"row7col7"
      }
   ]
];*/
	Grid.BindGrid('divGrid');
});