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

export const solarReasons = [
  {
    title: 'Financial Savings',
    description: 'One of the primary reasons people choose solar is for the economic benefits.',
    merits: [
      'Reduced or Eliminated Electric Bills',
      'Protection Against Rising Energy Costs',
      'Increased Property Value'
    ]
  },
  {
    title: 'Environmental Impact',
    description: 'Solar energy positively impacts the environment.',
    merits: [
      'Reduced Carbon Emissions',
      'Local Air Pollution Reduction',
      'Offsetting Carbon Generation',
      'Annual Carbon Emission Reduction'
    ]
  },
  {
    title: 'Energy Independence',
    description: 'Solar provides energy independence.',
    merits: ['Less Reliance on Grid', 'Resilience During Outages']
  },
  {
    title: 'Limitless Source',
    description: 'Solar energy comes from the sun, which is nearly limitless.',
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
        pricing: 10000,
        pricingFrequency: 'one-time',
        image: '/src/assets/commercial.png'
      },
      1: {
        name: 'Residential',
        description: 'Tailored for homeowners and residential properties.',
        pricing: 8000,
        pricingFrequency: 'one-time',
        image: '/src/assets/residential.png'
      }
    }
  },
  3: {
    title: 'Choose Panel Types',
    type: 'choice',
    customizations: {
      0: {
        name: 'Polycrystalline',
        description: 'Standard solar panels providing good efficiency at an affordable cost.',
        pricing: 2000,
        pricingFrequency: 'one-time',
        image: '/src/assets/poly.png'
      },
      1: {
        name: 'Monocrystalline',
        description:
          'High-efficiency panels with sleek design, suitable for limited space installations.',
        pricing: 1500,
        pricingFrequency: 'one-time',
        image: '/src/assets/mono.png'
      },
      2: {
        name: 'Thin Film',
        description: 'Flexible and lightweight panels suitable for curved or irregular surfaces.',
        pricing: 500,
        pricingFrequency: 'one-time',
        image: '/src/assets/thin.png'
      }
      // Add more panel types as needed
    }
  },
  4: {
    title: 'Customizations',
    type: 'customization',
    customizations: {
      0: {
        name: 'Inverter Upgrade',
        description: 'Upgrade to a more efficient inverter for better energy conversion.',
        pricing: 500,
        pricingFrequency: 'one-time'
      },
      1: {
        name: 'Battery Storage',
        description: 'Add battery storage for backup power during outages or off-grid use.',
        pricing: 2000,
        pricingFrequency: 'one-time'
      },
      2: {
        name: 'Solar Tracker',
        description: 'Automated solar panel tracking system for maximizing energy generation.',
        pricing: 3000,
        pricingFrequency: 'one-time'
      },
      3: {
        name: 'Additional Panels',
        description: 'Increase the number of solar panels for higher energy production.',
        pricing: 1000,
        pricingFrequency: 'one-time'
      },
      4: {
        name: 'Smart Home Integration',
        description: 'Connect solar system to smart home devices for energy optimization.',
        pricing: 800,
        pricingFrequency: 'one-time'
      },
      5: {
        name: 'Off-grid Package',
        description: 'Complete off-grid solar solution with battery storage and backup generator.',
        pricing: 5000,
        pricingFrequency: 'one-time'
      },
      6: {
        name: 'Microinverters',
        description: 'Install microinverters for individual panel optimization and monitoring.',
        pricing: 1200,
        pricingFrequency: 'one-time'
      },
      7: {
        name: 'Panel Cleaning Service',
        description: 'Regular cleaning service to maintain optimal performance of solar panels.',
        pricing: 50,
        pricingFrequency: 'monthly'
      }
    }
  },
  5: {
    title: 'Other Services',
    type: 'customization',
    customizations: {
      0: {
        name: 'Maintenance Plan',
        description:
          'Regular maintenance to ensure optimal performance and longevity of your solar system.',
        pricing: 100,
        pricingFrequency: 'monthly'
      },
      1: {
        name: 'Monitoring System',
        description: 'Real-time monitoring of your solar system performance for peace of mind.',
        pricing: 50,
        pricingFrequency: 'monthly'
      },
      2: {
        name: 'Energy Audit',
        description: 'Comprehensive analysis of your energy usage to optimize solar system design.',
        pricing: 200,
        pricingFrequency: 'one-time'
      },
      3: {
        name: 'Installation',
        description: 'Professional installation services by certified technicians.',
        pricing: 1500,
        pricingFrequency: 'one-time'
      },
      4: {
        name: 'Extended Warranty',
        description: 'Extend the warranty coverage of your solar system for added protection.',
        pricing: 300,
        pricingFrequency: 'annually'
      },
      5: {
        name: 'Grid Connection',
        description: 'Assistance with grid connection process and paperwork.',
        pricing: 500,
        pricingFrequency: 'one-time'
      },
      6: {
        name: 'Remote Monitoring Subscription',
        description:
          'Access to advanced monitoring features and data analytics via remote subscription.',
        pricing: 20,
        pricingFrequency: 'monthly'
      },
      7: {
        name: 'Energy Efficiency Consultation',
        description: 'Expert consultation to improve energy efficiency and reduce consumption.',
        pricing: 150,
        pricingFrequency: 'one-time'
      }
    }
  },
  6: {
    title: '3D House Model',
    type: 'visualization'
  },
  7: {
    title: 'So what do you think?',
    type: 'confirmation'
  },
  8: {
    title: 'Choose a payment Plan',
    type: 'payment-plan'
  },
  9: {
    title: 'Choose a payment method',
    type: 'payment-method'
  },
  10: {
    title: 'Payment',
    type: 'payment'
  },
  11: {
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
