const spieleAnstehend = [
  {
    datum: '2026-09-02',
    uhrzeit: '19:30',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren',
    gegner: 'SG Gossersweiler-Stein/Vorderweidenthal/Birkenhördt',
    ort: 'Auswärts',
    wettbewerb: 'B-Klasse'
  },
  {
    datum: '2026-09-06',
    uhrzeit: '15:00',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren',
    gegner: 'FSV Freimersheim',
    ort: 'Heim',
    wettbewerb: 'B-Klasse'
  },
  {
    datum: '2026-09-13',
    uhrzeit: '15:30',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren',
    gegner: 'TSV Landau',
    ort: 'Auswärts',
    wettbewerb: 'B-Klasse'
  },
  {
    datum: '2026-09-16',
    uhrzeit: '19:00',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: 'FV 1946 Hanhofen',
    ort: 'Heim',
    wettbewerb: 'Landesliga'
  },
  {
    datum: '2026-09-18',
    uhrzeit: '19:00',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: 'SG Waldsee/Schifferstadt',
    ort: 'Heim',
    wettbewerb: 'Landesliga'
  },
  {
    datum: '2026-09-20',
    uhrzeit: '15:00',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren',
    gegner: 'SV Dammheim',
    ort: 'Heim',
    wettbewerb: 'B-Klasse'
  },
  {
    datum: '2026-09-23',
    uhrzeit: '19:30',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: 'TuS 1903/25 Knittelsheim',
    ort: 'Auswärts',
    wettbewerb: 'Landesliga'
  },
  {
    datum: '2026-09-26',
    uhrzeit: '15:00',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: 'FC Viktoria Neupotz',
    ort: 'Heim',
    wettbewerb: 'Südwestdeutscher-Pokal'
  },
  {
    datum: '2026-09-27',
    uhrzeit: '15:00',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren',
    gegner: 'TB Jahn Zeiskam II',
    ort: 'Auswärts',
    wettbewerb: 'B-Klasse'
  },
  {
    datum: '2026-10-02',
    uhrzeit: '19:00',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: 'FC Lustadt',
    ort: 'Heim',
    wettbewerb: 'Landesliga'
  },
  {
    datum: '2026-10-04',
    uhrzeit: '15:00',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren',
    gegner: 'SC Ramberg',
    ort: 'Heim',
    wettbewerb: 'B-Klasse'
  },
  {
    datum: '2026-10-10',
    uhrzeit: '17:00',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: 'SG Heiligenstein/Harthausen/Weingarten',
    ort: 'Auswärts',
    wettbewerb: 'Landesliga'
  },
  {
    datum: '2026-10-11',
    uhrzeit: '15:00',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren',
    gegner: 'VfL Essingen',
    ort: 'Auswärts',
    wettbewerb: 'B-Klasse'
  },
  {
    datum: '2026-10-16',
    uhrzeit: '19:00',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: 'TSV Fortuna Billigheim-Ingenheim',
    ort: 'Heim',
    wettbewerb: 'Landesliga'
  },
  {
    datum: '2026-10-18',
    uhrzeit: '15:00',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren',
    gegner: 'TuS Frankweiler/Gleisw./Siebeld.',
    ort: 'Heim',
    wettbewerb: 'B-Klasse'
  },
  {
    datum: '2026-10-23',
    uhrzeit: '19:30',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: '1. FFC Niederkirchen II',
    ort: 'Auswärts',
    wettbewerb: 'Landesliga'
  },
  {
    datum: '2026-10-25',
    uhrzeit: '15:00',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren',
    gegner: 'FV Queichheim',
    ort: 'Auswärts',
    wettbewerb: 'B-Klasse'
  },
  {
    datum: '2026-11-01',
    uhrzeit: '15:00',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren',
    gegner: 'SV Landau Süd',
    ort: 'Heim',
    wettbewerb: 'B-Klasse'
  },
  {
    datum: '2026-11-07',
    uhrzeit: '17:00',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: 'FC Phönix 21 Bellheim',
    ort: 'Heim',
    wettbewerb: 'Landesliga'
  },
  {
    datum: '2026-11-14',
    uhrzeit: '15:30',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: 'FV Berghausen II',
    ort: 'Auswärts',
    wettbewerb: 'Landesliga'
  },
  {
    datum: '2026-08-29',
    uhrzeit: '18:00',
    verein: 'VfB Annweiler',
    mannschaft: 'C-Junioren',
    gegner: 'ASV Lug/Hauenstein SG',
    ort: 'Auswärts',
    wettbewerb: 'Kreisliga'
  },
  {
    datum: '2026-09-02',
    uhrzeit: '18:30',
    verein: 'VfB Annweiler',
    mannschaft: 'C-Junioren',
    gegner: 'TSV Fortuna Billigheim-Ingenheim',
    ort: 'Heim',
    wettbewerb: 'Kreispokal'
  },
  {
    datum: '2026-09-06',
    uhrzeit: '11:30',
    verein: 'VfB Annweiler',
    mannschaft: 'C-Junioren',
    gegner: 'SV Wernersberg/Vorderweidenthal SG',
    ort: 'Heim',
    wettbewerb: 'Kreisliga'
  },
  {
    datum: '2026-09-13',
    uhrzeit: '11:30',
    verein: 'VfB Annweiler',
    mannschaft: 'C-Junioren',
    gegner: 'FSV Offenbach II',
    ort: 'Heim',
    wettbewerb: 'Kreisliga'
  },
  {
    datum: '2026-09-20',
    uhrzeit: '11:00',
    verein: 'VfB Annweiler',
    mannschaft: 'C-Junioren',
    gegner: 'JFV Südwest Löwen',
    ort: 'Auswärts',
    wettbewerb: 'Kreisliga'
  },
  {
    datum: '2026-08-29',
    uhrzeit: '13:00',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'C-Junioren Flex II',
    gegner: 'JFV Lemberg/Ruppertsweiler II',
    ort: 'Auswärts',
    wettbewerb: '1. Kreisklasse'
  },
  {
    datum: '2026-09-05',
    uhrzeit: '12:30',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'C-Junioren Flex II',
    gegner: 'JFV Landau III',
    ort: 'Heim',
    wettbewerb: '1. Kreisklasse'
  },
  {
    datum: '2026-09-11',
    uhrzeit: '18:45',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'C-Junioren Flex II',
    gegner: 'Südhaardter SV II',
    ort: 'Heim',
    wettbewerb: '1. Kreisklasse'
  },
  {
    datum: '2026-09-19',
    uhrzeit: '11:00',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'C-Junioren Flex II',
    gegner: 'JFV Südwest Löwen II',
    ort: 'Auswärts',
    wettbewerb: '1. Kreisklasse'
  },
  {
    datum: '2026-09-23',
    uhrzeit: '18:30',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'C-Junioren Flex II',
    gegner: 'FC 1922 Fischbach/JSG Wasgau II',
    ort: 'Heim',
    wettbewerb: '1. Kreisklasse'
  },
  {
    datum: '2026-08-29',
    uhrzeit: '13:00',
    verein: 'VfB Annweiler',
    mannschaft: 'D-Junioren',
    gegner: 'FSV I.C.Azzurri Landau',
    ort: 'Heim',
    wettbewerb: 'Kreisliga'
  },
  {
    datum: '2026-09-01',
    uhrzeit: '18:00',
    verein: 'VfB Annweiler',
    mannschaft: 'D-Junioren',
    gegner: 'SV Klingenmünster/Eschbach SG',
    ort: 'Auswärts',
    wettbewerb: 'Kreispokal'
  },
  {
    datum: '2026-09-04',
    uhrzeit: '18:00',
    verein: 'VfB Annweiler',
    mannschaft: 'D-Junioren',
    gegner: 'VTG Queichhambach',
    ort: 'Auswärts',
    wettbewerb: 'Kreisliga'
  },
  {
    datum: '2026-09-12',
    uhrzeit: '14:00',
    verein: 'VfB Annweiler',
    mannschaft: 'D-Junioren',
    gegner: 'SV West Landau',
    ort: 'Auswärts',
    wettbewerb: 'Kreisliga'
  },
  {
    datum: '2026-09-19',
    uhrzeit: '13:00',
    verein: 'VfB Annweiler',
    mannschaft: 'D-Junioren',
    gegner: 'JFV Südwest Löwen',
    ort: 'Auswärts',
    wettbewerb: 'Kreisliga'
  }
];
