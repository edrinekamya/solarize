export const solarizeCompany = {
  companyName: 'Solarize',
  tagline: 'Empowering Sustainable Energy Solutions',
  missionStatement: 'To harness solar energy for a greener future',
  achievements: [
    'Recipient of the Green Energy Award (2023)',
    'Installed solar panels in 500+ homes'
    // Add more achievements
  ],
  socialMedia: {
    linkedin: 'https://www.linkedin.com/company/solarize',
    twitter: 'https://twitter.com/solarize_energy',
    facebook: 'https://www.facebook.com/solarizeofficial'
  },
  address: {
    street: '123 Sunshine Avenue',
    city: 'Solar City',
    country: 'Solar Land',
    postalCode: '12345'
  }
}

// List of potential notifications
export const notifications = [
  {
    type: 'important',
    content: (arg1?: string, arg2?: string) => `A new customer, ${arg1}, has requested a quote in session ${arg2}. Please follow up.`,
    isDynamic: true,
  },
  {
    type: 'push',
    content: (arg1?: string) => `Your recent sale has earned you ${arg1} bonus points!`,
    isDynamic: true
  },
  {
    type: 'important',
    content: () => 'A customer has reported an issue with their solar installation. Please address it urgently.',
    isDynamic: false
  },
  {
    type: 'push',
    content: () => 'A new solar panel model is now available. Check it out!',
    isDynamic: false
  },
  {
    type: 'important',
    content: () => 'A scheduled installation for a customer is due tomorrow. Please confirm the arrangements.',
    isDynamic: false
  },
  {
    type: 'push',
    content: () => 'You have a new message in your inbox.',
    isDynamic: false
  },
];


export const solarReasons = [
  {
    title: 'Financial Savings',
    description:
      'Solar energy systems offer substantial financial benefits by reducing electricity bills, safeguarding against rising energy costs, and enhancing property value.',
    merits: [
      'Reduced or Eliminated Electric Bills',
      'Protection Against Rising Energy Costs',
      'Increased Property Value'
    ]
  },
  {
    title: 'Environmental Impact',
    description:
      'Solar energy significantly reduces carbon emissions and local air pollution, contributing to a healthier environment and combating climate change.',
    merits: [
      'Reduced Carbon Emissions',
      'Local Air Pollution Reduction',
      'Offsetting Carbon Generation',
      'Annual Carbon Emission Reduction'
    ]
  },
  {
    title: 'Energy Independence',
    description:
      'Solar energy systems provide homeowners with greater energy independence, reducing reliance on the grid and offering resilience during power outages.',
    merits: ['Less Reliance on Grid', 'Resilience During Outages']
  },
  {
    title: 'Limitless Source',
    description:
      "Harnessing the sun's energy provides a virtually limitless, abundant, and accessible power source with minimal land requirements.",
    merits: ['Abundant and Accessible', 'Minimal Land Requirement']
  }
]

export const slideShow: SlideShow = {
  0: {
    title: 'Introduction',
    type: 'introduction'
  },
  1: {
    title: 'Why Solar?',
    type: 'basics'
  },
  2: {
    title: 'Select Your Use Case',
    type: 'choice',
    customizations: {
      0: {
        name: 'Commercial',
        description: 'Designed for businesses and commercial properties.',
        pricingFrequency: 'one-time',
        image: '/src/assets/commercial.png'
      },
      1: {
        name: 'Residential',
        description: 'Tailored for homeowners and residential properties.',
        pricingFrequency: 'one-time',
        image: '/src/assets/residential.png'
      }
    }
  },
  3: {
    title: 'Specifications',
    type: 'form'
  },
  4: {
    title: 'Recommended Solar Panels',
    type: 'choice',
    customizations: {
      0: {
        name: 'Polycrystalline',
        description: 'Standard solar panels providing good efficiency at an affordable cost.',
        pricing: 2000,
        pricingFrequency: 'one-time',
        image: '/src/assets/poly.png',
        output: 250
      },
      1: {
        name: 'Monocrystalline',
        description:
          'High-efficiency panels with sleek design, suitable for limited space installations.',
        pricing: 1500,
        pricingFrequency: 'one-time',
        image: '/src/assets/mono.png',
        output: 300
      },
      2: {
        name: 'Thin Film',
        description: 'Flexible and lightweight panels suitable for curved or irregular surfaces.',
        pricing: 500,
        pricingFrequency: 'one-time',
        image: '/src/assets/thin.png',
        output: 100
      }
    }
  },
  5: {
    title: 'Add-ons',
    type: 'customization',
    customizations: {
      0: {
        name: 'Inverter Upgrade',
        description: 'Upgrade to a more efficient inverter for better energy conversion.',
        pricing: 500,
        pricingFrequency: 'one-time',
        savings: 0.2
      },
      1: {
        name: 'Battery Storage',
        description: 'Add battery storage for backup power during outages or off-grid use.',
        pricing: 2000,
        pricingFrequency: 'one-time',
        savings: 0.3
      },
      2: {
        name: 'Solar Tracker',
        description: 'Automated solar panel tracking system for maximizing energy generation.',
        pricing: 3000,
        pricingFrequency: 'one-time',
        savings: 0.05
      },
      4: {
        name: 'Smart Home Integration',
        description: 'Connect solar system to smart home devices for energy optimization.',
        pricing: 800,
        pricingFrequency: 'one-time',
        savings: 0.3
      },
      5: {
        name: 'Off-grid Package',
        description: 'Complete off-grid solar solution with battery storage and backup generator.',
        pricing: 5000,
        pricingFrequency: 'one-time',
        savings: 0.5
      },
      6: {
        name: 'Micro-Inverters',
        description: 'Install micro-inverters for individual panel optimization and monitoring.',
        pricing: 1200,
        pricingFrequency: 'one-time',
        savings: 0.3
      }
    }
  },
  6: {
    title: 'Additional Services',
    type: 'customization',
    customizations: {
      0: {
        name: 'Inverter Upgrade',
        description: 'Upgrade to a more efficient inverter for better energy conversion.',
        pricing: 500,
        pricingFrequency: 'one-time',
        savings: 0
      },
      1: {
        name: 'Battery Storage',
        description: 'Add battery storage for backup power during outages or off-grid use.',
        pricing: 2000,
        pricingFrequency: 'one-time',
        savings: 0
      },
      2: {
        name: 'Solar Tracker',
        description: 'Automated solar panel tracking system for maximizing energy generation.',
        pricing: 3000,
        pricingFrequency: 'one-time',
        savings: 0
      },
      4: {
        name: 'Smart Home Integration',
        description: 'Connect solar system to smart home devices for energy optimization.',
        pricing: 800,
        pricingFrequency: 'one-time',
        savings: 0
      },
      5: {
        name: 'Off-grid Package',
        description: 'Complete off-grid solar solution with battery storage and backup generator.',
        pricing: 5000,
        pricingFrequency: 'one-time',
        savings: 0
      },
      6: {
        name: 'Micro-Inverters',
        description: 'Install micro-inverters for individual panel optimization and monitoring.',
        pricing: 1200,
        pricingFrequency: 'one-time',
        savings: 0
      }
    }
  },
  7: {
    title: '3D Model',
    type: 'visualization'
  },

  8: {
    title: 'So what do you think?',
    type: 'confirmation'
  },

  9: {
    title: 'Choose a payment Plan',
    type: 'payment-plan'
  },
  10: {
    title: 'Choose a payment method',
    type: 'payment-method'
  },
  11: {
    title: 'Payment',
    type: 'payment'
  },
  12: {
    title: 'Thank You',
    type: 'conclusion'
  }
}

export const countryList = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas (the)',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia (Plurinational State of)',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory (the)',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cayman Islands (the)',
  'Central African Republic (the)',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands (the)',
  'Colombia',
  'Comoros (the)',
  'Congo (the Democratic Republic of the)',
  'Congo (the)',
  'Cook Islands (the)',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Curaçao',
  'Cyprus',
  'Czechia',
  "Côte d'Ivoire",
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic (the)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Falkland Islands (the) [Malvinas]',
  'Faroe Islands (the)',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories (the)',
  'Gabon',
  'Gambia (the)',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and McDonald Islands',
  'Holy See (the)',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran (Islamic Republic of)',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  "Korea (the Democratic People's Republic of)",
  'Korea (the Republic of)',
  'Kuwait',
  'Kyrgyzstan',
  "Lao People's Democratic Republic (the)",
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands (the)',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia (Federated States of)',
  'Moldova (the Republic of)',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands (the)',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger (the)',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands (the)',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine, State of',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines (the)',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Republic of North Macedonia',
  'Romania',
  'Russian Federation (the)',
  'Rwanda',
  'Réunion',
  'Saint Barthélemy',
  'Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin (French part)',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten (Dutch part)',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan (the)',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands (the)',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates (the)',
  'United Kingdom of Great Britain and Northern Ireland (the)',
  'United States Minor Outlying Islands (the)',
  'United States of America (the)',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela (Bolivarian Republic of)',
  'Viet Nam',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
  'Åland Islands'
]
