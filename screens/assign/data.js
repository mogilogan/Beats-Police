const beat = [
  {label: 'Beat_1', value: 'Beat_1'},
  {label: 'Beat_2', value: 'Beat_2'},
  {label: 'Beat_3', value: 'Beat_3'},
  {label: 'Beat_4', value: 'Beat_4'},
  {label: 'Beat_5', value: 'Beat_5'},
  {label: 'Beat_6', value: 'Beat_6'},
];

const officers = [
  {label: 'PC_2645', value: 'PC_2645'},
  {label: 'PC_2727', value: 'PC_2727'},
  {label: 'PC_2887', value: 'PC_2887'},
  {label: 'PC_2898', value: 'PC_2898'},
  {label: 'PC_3013', value: 'PC_3013'},
  {label: 'PC_3092', value: 'PC_3092'},
  {label: 'PC_3111', value: 'PC_3111'},
  {label: 'PC_3166', value: 'PC_3166'},
  {label: 'PC_3168', value: 'PC_3168'},
  {label: 'PC_3250', value: 'PC_3250'},
  {label: 'PC_3399', value: 'PC_3399'},
  {label: 'PC_3470', value: 'PC_3470'},
  {label: 'PC_3619', value: 'PC_3619'},
  {label: 'PC_3721', value: 'PC_3721'},
  {label: 'PC_N18', value: 'PC_N18'},
  {label: 'PC_N8', value: 'PC_N8'},
]

const beat_subdivision = {
  Beat_1: [
    {
      label: 'Vandrapet',
      value: 'b11',
      location: [11.923681, 79.819461],
    },
    {
      label: 'Thamizhthai Nagar',
      value: 'b12',
      location: [11.9220896, 79.8170045],
    },
    {
      label: 'Nethaji Nagar III',
      value: 'b13',
      location: [11.919433, 79.816871],
    },
    {
      label: 'Avvai Nagar',
      value: 'b14',
      location: [11.9216161, 79.815194],
    },
    {
      label: 'Udayarthorppe',
      value: 'b15',
      location: [11.888594, 79.805639],
    },
    {
      label: 'Bharathi mill thittu',
      value: 'b16',
      location: [11.9180665, 79.8109639],
    },
  ],

  Beat_2: [
    {
      label: 'Mudaliarpet',
      value: 'b21',
      location: [11.92121, 79.812466],
    },
    {
      label: 'Anitha Nagar',
      value: 'b22',
      location: [11.921531, 79.815904],
    },
    {
      label: 'Bharathidasan Nagar',
      value: 'b23',
      location: [12.7186491, 77.8184266],
    },
    {
      label: 'O.K.Palaym',
      value: 'b24',
      location: [11.7152792, 77.8430193],
    },
    {
      label: 'Iyyappasamy Nagar',
      value: 'b25',
      location: [11.71377, 77.843003],
    },
    {
      label: 'T.M.Nagar',
      value: 'b26',
      location: [11.924517, 79.811752],
    },
    {
      label: 'Viduthalai',
      value: 'b27',
      location: [12.3044252, 78.9181233],
    },
    {
      label: 'Thilai Nagar',
      value: 'b28',
      location: [11.9175827, 79.7726467],
    },
    {
      label: 'Indira Nagar',
      value: 'b29',
      location: [12.972939, 77.6279344],
    },
  ],

  Beat_3: [
    {
      label: 'John Paul Nagar',
      value: 'b31',
      location: [11.925375, 79.805246],
    },
    {
      label: 'Jothi Nagar',
      value: 'b32',
      location: [11.926254, 79.786385],
    },
    {
      label: 'Jeyamoorthy Raja Nagar',
      value: 'b33',
      location: [11.917338, 79.808446],
    },
    {
      label: 'M.G.R Nagar',
      value: 'b34',
      location: [11.933268, 79.789021],
    },

    {
      label: 'Thirupurkumaran Nagar',
      value: 'b35',
      location: [11.916317, 79.805047],
    },
  ],
  Beat_4: [
    {
      label: 'Thengaithittu',
      value: 'b41',
      location: [11.911991, 79.818118],
    },
    {
      label: 'Vasanthan Nagar',
      value: 'b42',
      location: [11.912686, 79.812319],
    },
    {
      label: 'Moogambigai Nagar',
      value: 'b43',
      location: [11.908976, 79.811107],
    },
    {
      label: 'Sethilal Nagar',
      value: 'b44',
      location: [11.9048124, 79.7981143],
    },
    {
      label: 'Dhanalakshmi Nagar',
      value: 'b45',
      location: [11.91362, 79.816054],
    },
  ],
  Beat_5: [
    {
      label: 'Nainarmandapam',
      value: 'b51',
      location: [11.9101579, 79.8105629],
    },
    {
      label: 'Sudhana Nagar',
      value: 'b53',
      location: [11.9093351, 79.8035282],
    },
    {
      label: 'Aravindar Nagar',
      value: 'b54',
      location: [11.9061674, 79.7932963],
    },
    {
      label: 'Velrampet',
      value: 'b56',
      location: [11.9091145, 79.7993501],
    },
    {
      label: 'Murungampakkam',
      value: 'b57',
      location: [11.903915, 79.8029111],
    },
    {
      label: 'Maraimalai Nagar',
      value: 'b58',
      location: [11.9133256, 79.7987934],
    },
    {
      label: 'Thirumagal Nagar',
      value: 'b510',
      location: [11.9140612, 79.8052032],
    },
  ],

  Beat_6: [
    {
      label: 'Kompakkam',
      value: 'b61',
      location: [11.9131794, 79.7739535],
    },
    {
      label: 'Teachers Colony',
      value: 'b62',
      location: [11.8996455, 79.7890879],
    },
    {
      label: 'Pappanchavady',
      value: 'b63',
      location: [11.9041314, 79.7902922],
    },
  ],
};

export {beat, beat_subdivision,officers};