const spieleErgebnisse = [
  {
    datum: '2026-11-04',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: 'FV 1946 Hänhofen',
    ort: 'Heim',
    wettbewerb: 'Landesliga',
    ergebnis: '0:6',
    link: ''
  },
  {
    datum: '2026-10-23',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: '1. FFC Niederkirchen II',
    ort: 'Auswärts',
    wettbewerb: 'Landesliga',
    ergebnis: '5:0',
    link: ''
  },
  {
    datum: '2026-10-16',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: 'TSV Fortuna Billigheim-Ingenheim',
    ort: 'Heim',
    wettbewerb: 'Landesliga',
    ergebnis: '2:2',
    link: ''
  },
  {
    datum: '2026-10-07',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: 'FC Lustadt',
    ort: 'Heim',
    wettbewerb: 'Landesliga',
    ergebnis: '2:1',
    link: ''
  },
  {
    datum: '2026-09-26',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: 'FC Viktoria Neupotz',
    ort: 'Heim',
    wettbewerb: 'Südwestdeutscher-Pokal',
    ergebnis: 'Absetzung',
    link: ''
  },
  {
    datum: '2026-09-23',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: 'TuS 1923/28 Kontalsheim',
    ort: 'Auswärts',
    wettbewerb: 'Landesliga',
    ergebnis: '9:0',
    link: ''
  },
  {
    datum: '2026-09-18',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: 'SG Waidsee/Schifferstadt',
    ort: 'Heim',
    wettbewerb: 'Landesliga',
    ergebnis: '3:0',
    link: ''
  },
  {
    datum: '2026-08-26',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: 'FC Viktoria Neupotz',
    ort: 'Heim',
    wettbewerb: 'Landesliga',
    ergebnis: '0:5',
    link: ''
  },
  {
    datum: '2026-08-15',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: 'SG Dammheim/Südwestgirls',
    ort: 'Auswärts',
    wettbewerb: 'Landesliga',
    ergebnis: '0:5',
    link: ''
  },
  {
    datum: '2026-08-09',
    verein: 'VfB Annweiler',
    mannschaft: 'Frauen',
    gegner: 'VfR Wormmatia 08 Worms II',
    ort: 'Heim',
    wettbewerb: 'Landesfreundschaftsspiele',
    ergebnis: 'Absetzung',
    link: ''
  },
  {
    datum: '2026-11-01',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren I',
    gegner: 'SV Landau SG',
    ort: 'Heim',
    wettbewerb: 'B-Klasse',
    ergebnis: '0:2',
    link: ''
  },
  {
    datum: '2026-10-27',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren I',
    gegner: 'FV Queichheim',
    ort: 'Auswärts',
    wettbewerb: 'B-Klasse',
    ergebnis: '3:2',
    link: ''
  },
  {
    datum: '2026-10-18',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren I',
    gegner: 'TuS Freinsheim/Gleiseltal',
    ort: 'Heim',
    wettbewerb: 'B-Klasse',
    ergebnis: '0:2',
    link: ''
  },
  {
    datum: '2026-10-11',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren I',
    gegner: 'VfL Essingen',
    ort: 'Auswärts',
    wettbewerb: 'B-Klasse',
    ergebnis: '2:0',
    link: ''
  },
  {
    datum: '2026-10-04',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren I',
    gegner: '1 SC Hamberge',
    ort: 'Heim',
    wettbewerb: 'B-Klasse',
    ergebnis: '2:0',
    link: ''
  },
  {
    datum: '2026-09-29',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren I',
    gegner: 'TB Jahn Zeiskam II',
    ort: 'Auswärts',
    wettbewerb: 'B-Klasse',
    ergebnis: '1:1',
    link: ''
  },
  {
    datum: '2026-09-20',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren I',
    gegner: 'SV Dannheim',
    ort: 'Heim',
    wettbewerb: 'B-Klasse',
    ergebnis: '4:2',
    link: ''
  },
  {
    datum: '2026-09-06',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren I',
    gegner: 'FSV Freiersheim',
    ort: 'Heim',
    wettbewerb: 'B-Klasse',
    ergebnis: '5:1',
    link: ''
  },
  {
    datum: '2026-09-02',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren I',
    gegner: 'SG Greusweiler/Winzeln/Horborsdt/Dirkelshodt',
    ort: 'Auswärts',
    wettbewerb: 'B-Klasse',
    ergebnis: '3:1',
    link: ''
  },
  {
    datum: '2026-08-23',
    verein: 'SG Annweiler/Wernersberg',
    mannschaft: 'Herren I',
    gegner: 'TSG Jockgrim II',
    ort: 'Heim',
    wettbewerb: 'B-Klasse',
    ergebnis: '3:2',
    link: ''
  },
  {
    datum: '2026-09-19',
    verein: 'SG Trifelsland',
    mannschaft: 'Herren Ü40',
    gegner: 'SV West Landau Ü40',
    ort: 'Auswärts',
    wettbewerb: 'Ligaspiel',
    ergebnis: '10:5',
    link: ''
  },
  {
    datum: '2026-09-02',
    verein: 'SG Trifelsland',
    mannschaft: 'Herren Ü40',
    gegner: 'VfR 1926 Sonderheim',
    ort: 'Heim',
    wettbewerb: 'Ligaspiel',
    ergebnis: '2:0',
    link: ''
  },
  {
    datum: '2026-10-28',
    verein: 'SG Trifelsland',
    mannschaft: 'Herren Ü32',
    gegner: 'TuS Frankweiler/Gleiselwälder',
    ort: 'Auswärts',
    wettbewerb: 'Kreisfreundschaftsspiele',
    ergebnis: '6:3',
    link: ''
  },
  {
    datum: '2026-09-30',
    verein: 'SG Trifelsland',
    mannschaft: 'Herren Ü32',
    gegner: 'VfL Kirchbach/Steinweilerfinkingen',
    ort: 'Auswärts',
    wettbewerb: 'Kreispokal',
    ergebnis: '2:3',
    link: ''
  },
  {
    datum: '2026-09-16',
    verein: 'SG Trifelsland',
    mannschaft: 'Herren Ü32',
    gegner: 'FV Dammheim 1981 e.V.',
    ort: 'Auswärts',
    wettbewerb: 'Kreisfreundschaftsspiele',
    ergebnis: '3:1',
    link: ''
  },
  {
    datum: '2026-09-01',
    verein: 'SG Trifelsland',
    mannschaft: 'Herren Ü32',
    gegner: 'TuS Albesersweiler 1982 e.V. Ü32',
    ort: 'Heim',
    wettbewerb: 'Kreispokal',
    ergebnis: '0:2',
    link: ''
  },
  {
    datum: '2026-11-04',
    verein: 'VfB Annweiler',
    mannschaft: 'C-Junioren',
    gegner: 'SV Schweighausen/JSG Bierwardt',
    ort: 'Auswärts',
    wettbewerb: '1.Kreisliga',
    ergebnis: '3:2',
    link: ''
  },
  {
    datum: '2026-10-28',
    verein: 'VfB Annweiler',
    mannschaft: 'C-Junioren',
    gegner: 'FC Bergweißenburg/Neupodt SG',
    ort: 'Auswärts',
    wettbewerb: 'Kreispokal',
    ergebnis: '4:0',
    link: ''
  },
  {
    datum: '2026-10-20',
    verein: 'VfB Annweiler',
    mannschaft: 'C-Junioren',
    gegner: 'TuS Kontelsheim',
    ort: 'Auswärts',
    wettbewerb: 'Kreisfreundschaftsspiele',
    ergebnis: '8:2',
    link: ''
  },
  {
    datum: '2026-10-17',
    verein: 'VfB Annweiler',
    mannschaft: 'C-Junioren',
    gegner: 'SV Vill. Herxheim II',
    ort: 'Heim',
    wettbewerb: 'Kreisfreundschaftsspiele',
    ergebnis: '0:7',
    link: ''
  },
  {
    datum: '2026-09-28',
    verein: 'VfB Annweiler',
    mannschaft: 'C-Junioren',
    gegner: 'JFV Südwest Löwen',
    ort: 'Auswärts',
    wettbewerb: 'Kreisliga',
    ergebnis: '8:2',
    link: ''
  },
  {
    datum: '2026-09-13',
    verein: 'VfB Annweiler',
    mannschaft: 'C-Junioren',
    gegner: 'FSV Offenbach II',
    ort: 'Heim',
    wettbewerb: 'Kreisliga',
    ergebnis: '5:3',
    link: ''
  },
  {
    datum: '2026-09-06',
    verein: 'VfB Annweiler',
    mannschaft: 'C-Junioren',
    gegner: 'SV Wernersberg/Vermierenweinthal',
    ort: 'Heim',
    wettbewerb: 'Kreisliga',
    ergebnis: '1:0',
    link: ''
  },
  {
    datum: '2026-09-03',
    verein: 'VfB Annweiler',
    mannschaft: 'C-Junioren',
    gegner: 'TSV Fort. Billigheim-Ingenheim',
    ort: 'Heim',
    wettbewerb: 'Kreispokal',
    ergebnis: '12:0',
    link: ''
  },
  {
    datum: '2026-08-26',
    verein: 'VfB Annweiler',
    mannschaft: 'C-Junioren',
    gegner: 'ASV Lug/Hauenstein SG',
    ort: 'Auswärts',
    wettbewerb: 'Kreisliga',
    ergebnis: '3:3',
    link: ''
  },
  {
    datum: '2026-08-23',
    verein: 'VfB Annweiler',
    mannschaft: 'C-Junioren',
    gegner: 'FC 1922 Fischbach/JSG Wasgau',
    ort: 'Heim',
    wettbewerb: 'Kreisliga',
    ergebnis: '0:4',
    link: ''
  },
  {
    datum: '2026-11-04',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'C-Junioren Flex II',
    gegner: 'SV Schweighausen/JSG Bierwardt',
    ort: 'Auswärts',
    wettbewerb: '1.Kreisliga',
    ergebnis: '3:2',
    link: ''
  },
  {
    datum: '2026-10-28',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'C-Junioren Flex II',
    gegner: 'FC Bergweißenburg/Neupodt SG',
    ort: 'Auswärts',
    wettbewerb: 'Kreispokal',
    ergebnis: '4:0',
    link: ''
  },
  {
    datum: '2026-10-20',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'C-Junioren Flex II',
    gegner: 'TuS Kontelsheim',
    ort: 'Auswärts',
    wettbewerb: 'Kreisfreundschaftsspiele',
    ergebnis: '8:2',
    link: ''
  },
  {
    datum: '2026-10-17',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'C-Junioren Flex II',
    gegner: 'SV Vill. Herxheim II',
    ort: 'Heim',
    wettbewerb: 'Kreisfreundschaftsspiele',
    ergebnis: '0:7',
    link: ''
  },
  {
    datum: '2026-09-13',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'C-Junioren Flex II',
    gegner: 'FSV Offenbach II',
    ort: 'Heim',
    wettbewerb: 'Kreisliga',
    ergebnis: '5:3',
    link: ''
  },
  {
    datum: '2026-09-06',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'C-Junioren Flex II',
    gegner: 'SV Wernersberg/Vermierenweinthal',
    ort: 'Heim',
    wettbewerb: 'Kreisliga',
    ergebnis: '1:0',
    link: ''
  },
  {
    datum: '2026-09-03',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'C-Junioren Flex II',
    gegner: 'TSV Fort. Billigheim-Ingenheim',
    ort: 'Heim',
    wettbewerb: 'Kreispokal',
    ergebnis: '12:0',
    link: ''
  },
  {
    datum: '2026-08-29',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'C-Junioren Flex II',
    gegner: 'ASV Lug/Hauenstein SG',
    ort: 'Auswärts',
    wettbewerb: 'Kreisliga',
    ergebnis: '3:3',
    link: ''
  },
  {
    datum: '2026-08-23',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'C-Junioren Flex II',
    gegner: 'FC 1922 Fischbach/JSG Wasgau',
    ort: 'Heim',
    wettbewerb: 'Kreisliga',
    ergebnis: '0:4',
    link: ''
  },
  {
    datum: '2026-11-01',
    verein: 'VfB Annweiler',
    mannschaft: 'D-Junioren',
    gegner: 'TSV Landau',
    ort: 'Auswärts',
    wettbewerb: 'Kreisliga',
    ergebnis: '2:1',
    link: ''
  },
  {
    datum: '2026-10-25',
    verein: 'VfB Annweiler',
    mannschaft: 'D-Junioren',
    gegner: 'SV Dannheim',
    ort: 'Heim',
    wettbewerb: 'Kreisliga',
    ergebnis: '2:1',
    link: ''
  },
  {
    datum: '2026-10-07',
    verein: 'VfB Annweiler',
    mannschaft: 'D-Junioren',
    gegner: 'Südhaardter SV',
    ort: 'Auswärts',
    wettbewerb: 'Kreisfreundschaftsspiele',
    ergebnis: 'Absetzung',
    link: ''
  },
  {
    datum: '2026-10-07',
    verein: 'VfB Annweiler',
    mannschaft: 'D-Junioren',
    gegner: 'Südhaardter SV',
    ort: 'Auswärts',
    wettbewerb: 'Kreisfreundschaftsspiele',
    ergebnis: 'Absetzung',
    link: ''
  },
  {
    datum: '2026-09-28',
    verein: 'VfB Annweiler',
    mannschaft: 'D-Junioren',
    gegner: 'Südhaardter SV',
    ort: 'Auswärts',
    wettbewerb: 'Kreisfreundschaftsspiele',
    ergebnis: '2:2',
    link: ''
  },
  {
    datum: '2026-09-28',
    verein: 'VfB Annweiler',
    mannschaft: 'D-Junioren',
    gegner: 'SV Morheim',
    ort: 'Auswärts',
    wettbewerb: 'Kreispokal',
    ergebnis: '1:4',
    link: ''
  },
  {
    datum: '2026-09-19',
    verein: 'VfB Annweiler',
    mannschaft: 'D-Junioren',
    gegner: 'JFV Südwest Löwen',
    ort: 'Auswärts',
    wettbewerb: 'Kreisliga',
    ergebnis: '0:9',
    link: ''
  },
  {
    datum: '2026-09-12',
    verein: 'VfB Annweiler',
    mannschaft: 'D-Junioren',
    gegner: 'SV West Landau',
    ort: 'Auswärts',
    wettbewerb: 'Kreisliga',
    ergebnis: '7:1',
    link: ''
  },
  {
    datum: '2026-09-04',
    verein: 'VfB Annweiler',
    mannschaft: 'D-Junioren',
    gegner: 'VTG Queichhambach',
    ort: 'Auswärts',
    wettbewerb: 'Kreisliga',
    ergebnis: '0:4',
    link: ''
  },
  {
    datum: '2026-09-01',
    verein: 'VfB Annweiler',
    mannschaft: 'D-Junioren',
    gegner: 'SV Klingenmünster/Eichbach SG',
    ort: 'Auswärts',
    wettbewerb: 'Kreispokal',
    ergebnis: '0:2',
    link: ''
  }
];
,  {
    datum: '2026-10-28',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'D-Junioren Flex II',
    gegner: 'TSG Jockgrim III',
    ort: 'Heim',
    wettbewerb: '2.Kreisklasse',
    ergebnis: '2:1',
    link: ''
  },  {
    datum: '2026-10-24',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'D-Junioren Flex II',
    gegner: 'TSV Landau II (Flex)',
    ort: 'Heim',
    wettbewerb: '2.Kreisklasse',
    ergebnis: '4:1',
    link: ''
  },  {
    datum: '2026-09-19',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'D-Junioren Flex II',
    gegner: 'TSV Landau II (Flex)',
    ort: 'Auswärts',
    wettbewerb: '1.Kreisklasse',
    ergebnis: '3:6',
    link: ''
  },  {
    datum: '2026-09-13',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'D-Junioren Flex II',
    gegner: 'SV West Landau II',
    ort: 'Auswärts',
    wettbewerb: '1.Kreisklasse',
    ergebnis: '10:1',
    link: ''
  },  {
    datum: '2026-09-02',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'D-Junioren Flex II',
    gegner: 'TB Jahn Zeiskam/JSG Hanebach II',
    ort: 'Auswärts',
    wettbewerb: '1.Kreisklasse',
    ergebnis: '13:1',
    link: ''
  },  {
    datum: '2026-08-29',
    verein: 'VfB Annweiler II (Flex)',
    mannschaft: 'D-Junioren Flex II',
    gegner: 'FV Queichhambach II',
    ort: 'Heim',
    wettbewerb: '1.Kreisklasse',
    ergebnis: '1:0',
    link: ''
  },  {
    datum: '2026-08-29',
    verein: 'VfB Annweiler II',
    mannschaft: 'D-Junioren Flex II',
    gegner: 'SV Klingenmünster/Eichbach SG',
    ort: 'Auswärts',
    wettbewerb: '2.Kreisklasse',
    ergebnis: '1:2',
    link: ''
  },  {
    datum: '2026-05-17',
    verein: 'VfB Annweiler II',
    mannschaft: 'D-Junioren Flex II',
    gegner: 'SV West Landau III',
    ort: 'Auswärts',
    wettbewerb: '2.Kreisklasse',
    ergebnis: '1:2',
    link: ''
  },  {
    datum: '2026-05-09',
    verein: 'VfB Annweiler II',
    mannschaft: 'D-Junioren Flex II',
    gegner: 'SC Hauenstein/Lug SG II',
    ort: 'Auswärts',
    wettbewerb: '2.Kreisklasse',
    ergebnis: '5:2',
    link: ''
  },  {
    datum: '2026-10-31',
    verein: 'VfB Annweiler',
    mannschaft: 'E-Junioren',
    gegner: 'SV Dannheim',
    ort: 'Auswärts',
    wettbewerb: '2.Kreisklasse',
    ergebnis: 'Nachteil GAST',
    link: ''
  },  {
    datum: '2026-10-24',
    verein: 'VfB Annweiler',
    mannschaft: 'E-Junioren',
    gegner: 'TSV Fort. Billigheim-Ingenheim II',
    ort: 'Heim',
    wettbewerb: '2.Kreisklasse',
    ergebnis: '1:3',
    link: ''
  },  {
    datum: '2026-09-20',
    verein: 'VfB Annweiler',
    mannschaft: 'E-Junioren',
    gegner: 'VTG Queichhambach/Wernersberg',
    ort: 'Auswärts',
    wettbewerb: 'Kreisliga',
    ergebnis: '13:0',
    link: ''
  },  {
    datum: '2026-09-13',
    verein: 'VfB Annweiler',
    mannschaft: 'E-Junioren',
    gegner: 'SV West Landau',
    ort: 'Heim',
    wettbewerb: 'Kreisliga',
    ergebnis: '0:2',
    link: ''
  },  {
    datum: '2026-09-05',
    verein: 'VfB Annweiler',
    mannschaft: 'E-Junioren',
    gegner: 'VTG Queichhambach/Wernersberg SG',
    ort: 'Heim',
    wettbewerb: 'Kreispokal',
    ergebnis: '1:14',
    link: ''
  },  {
    datum: '2026-09-05',
    verein: 'VfB Annweiler',
    mannschaft: 'E-Junioren',
    gegner: 'ASV Lug/Hauenstein SG',
    ort: 'Heim',
    wettbewerb: 'Kreisliga',
    ergebnis: '1:2',
    link: ''
  },  {
    datum: '2026-08-29',
    verein: 'VfB Annweiler',
    mannschaft: 'E-Junioren',
    gegner: 'Südhaardter SV',
    ort: 'Auswärts',
    wettbewerb: 'Kreisliga',
    ergebnis: '16:0',
    link: ''
  },  {
    datum: '2026-08-23',
    verein: 'VfB Annweiler',
    mannschaft: 'E-Junioren',
    gegner: 'JFV Südwest Löwen',
    ort: 'Auswärts',
    wettbewerb: 'Kreisliga',
    ergebnis: '0:2',
    link: ''
  },  {
    datum: '2026-09-23',
    verein: 'VfB Annweiler',
    mannschaft: 'E-Junioren',
    gegner: 'TSV Landau II',
    ort: 'Heim',
    wettbewerb: '2.Kreisklasse',
    ergebnis: '2:6',
    link: ''
  },  {
    datum: '2026-05-16',
    verein: 'VfB Annweiler',
    mannschaft: 'E-Junioren',
    gegner: 'SV West Landau III',
    ort: 'Auswärts',
    wettbewerb: '2.Kreisklasse',
    ergebnis: '12:0',
    link: ''
  }
];