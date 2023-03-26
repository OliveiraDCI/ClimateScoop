const axios = require("axios");
console.clear();
console.log("--------------------");
console.log("");

async function createFetch() {
  let response = await axios.get(
    "https://global-warming.org/api/temperature-api"
  );
  console.log("response", response.data);
  return response;
}
createFetch();

/**
 * Data Api List :
 * https://global-warming.org/api/temperature-api
 * 
 * response {
  error: null,
  result: [
    { time: '1880.04', station: '-0.24', land: '-0.18' },
    { time: '1880.13', station: '-0.45', land: '-0.24' },
    { time: '1880.21', station: '-0.29', land: '-0.08' },
    { time: '1880.29', station: '-0.51', land: '-0.16' },
    { time: '1880.38', station: '-0.23', land: '-0.10' },
    { time: '1880.46', station: '-0.38', land: '-0.21' },
    { time: '1880.54', station: '-0.32', land: '-0.18' },
    { time: '1880.63', station: '0.25', land: '-0.10' },
    { time: '1880.71', station: '-0.36', land: '-0.14' },
    { time: '1880.79', station: '-0.60', land: '-0.23' },
    { time: '1880.88', station: '-0.28', land: '-0.21' },
  
  ]
}
 * 
 * ---------------------------------------------------
 * https://global-warming.org/api/co2-api
 * 
 * response {
  co2: [
    {
      year: '2013',
      month: '1',
      day: '20',
      cycle: '395.64',
      trend: '394.42'
    },
    {
      year: '2013',
      month: '1',
      day: '21',
      cycle: '395.67',
      trend: '394.43'
    },
    {
      year: '2013',
      month: '1',
      day: '22',
      cycle: '395.70',
      trend: '394.44'
    },
    {
      year: '2013',
      month: '1',
      day: '23',
      cycle: '395.72',
      trend: '394.44'
    },
    {
      year: '2013',
      month: '1',
      day: '24',
      cycle: '395.75',
      trend: '394.45'
    },
    {
      year: '2013',
      month: '1',
      day: '25',
      cycle: '395.78',
      trend: '394.46'
    },
    {
      year: '2013',
      month: '1',
      day: '26',
      cycle: '395.80',
      trend: '394.47'
    },
    {
      year: '2013',
      month: '1',
      day: '27',
      cycle: '395.83',
      trend: '394.47'
    },
    {
      year: '2013',
      month: '1',
      day: '28',
      cycle: '395.86',
      trend: '394.48'
    },
    {
      year: '2013',
      month: '1',
      day: '29',
      cycle: '395.88',
      trend: '394.49'
    },
    
  ]
}
 * 
 * ----------------------------------------------------------
 * https://global-warming.org/api/methane-api
 * 
 * response {
  methane: [
    {
      date: '#.year',
      average: 'decimal',
      trend: 'average_unc',
      averageUnc: 'average',
      trendUnc: 'trend'
    },
    {
      date: '1983.7',
      average: '1625.92',
      trend: '1634.89',
      averageUnc: '2.10',
      trendUnc: '1.39'
    },
    {
      date: '1983.8',
      average: '1628.08',
      trend: '1635.47',
      averageUnc: '2.69',
      trendUnc: '1.33'
    },
    {
      date: '1983.9',
      average: '1638.41',
      trend: '1636.09',
      averageUnc: '2.33',
      trendUnc: '1.27'
    },
    {
      date: '1983.10',
      average: '1644.73',
      trend: '1636.77',
      averageUnc: '1.59',
      trendUnc: '1.20'
    },
    {
      date: '1983.11',
      average: '1642.59',
      trend: '1637.51',
      averageUnc: '0.78',
      trendUnc: '1.12'
    },
    {
      date: '1983.12',
      average: '1639.57',
      trend: '1638.32',
      averageUnc: '1.01',
      trendUnc: '1.04'
    },
    {
      date: '1984.1',
      average: '1638.77',
      trend: '1639.22',
      averageUnc: '1.78',
      trendUnc: '0.95'
    },
    {
      date: '1984.2',
      average: '1638.87',
      trend: '1640.13',
      averageUnc: '2.05',
      trendUnc: '0.87'
    },
  ]
}
 * 
 * ------------------------------------------------------
 * https://global-warming.org/api/nitrous-oxide-api
 * 
 * response {
  nitrous: [
    {
      date: '#.year',
      average: 'decimal',
      trend: 'average_unc',
      averageUnc: 'average',
      trendUnc: 'trend'
    },
    {
      date: '2001.1',
      average: '316.30',
      trend: '316.03',
      averageUnc: '0.17',
      trendUnc: '0.16'
    },
    {
      date: '2001.2',
      average: '316.31',
      trend: '316.09',
      averageUnc: '0.18',
      trendUnc: '0.16'
    },
    {
      date: '2001.3',
      average: '316.21',
      trend: '316.15',
      averageUnc: '0.17',
      trendUnc: '0.16'
    },
    {
      date: '2001.4',
      average: '316.12',
      trend: '316.22',
      averageUnc: '0.15',
      trendUnc: '0.16'
    },
    {
      date: '2001.5',
      average: '316.11',
      trend: '316.28',
      averageUnc: '0.15',
      trendUnc: '0.15'
    },
    {
      date: '2001.6',
      average: '316.16',
      trend: '316.34',
      averageUnc: '0.15',
      trendUnc: '0.15'
    },
    {
      date: '2001.7',
      average: '316.24',
      trend: '316.41',
      averageUnc: '0.15',
      trendUnc: '0.15'
    },
    {
      date: '2001.8',
      average: '316.30',
      trend: '316.47',
      averageUnc: '0.15',
      trendUnc: '0.15'
    },
    {
      date: '2001.9',
      average: '316.41',
      trend: '316.53',
      averageUnc: '0.15',
      trendUnc: '0.15'
    },
    {
      date: '2001.10',
      average: '316.59',
      trend: '316.58',
      averageUnc: '0.16',
      trendUnc: '0.14'
    },
    
  ]
}
 * 
 * ----------------------------------------------------------
 * https://global-warming.org/api/arctic-api
 * 
 * response {
  error: null,
  arcticData: [
    {
      Column1: 0,
      year: 1979,
      month: 9,
      'data-type': 'Goddard',
      hemisphere: 'N',
      extent: 7.05,
      area: 4.58,
      rank: 33
    },
    {
      Column1: 1,
      year: 1980,
      month: 9,
      'data-type': 'Goddard',
      hemisphere: 'N',
      extent: 7.67,
      area: 4.87,
      rank: 43
    },
    {
      Column1: 2,
      year: 1981,
      month: 9,
      'data-type': 'Goddard',
      hemisphere: 'N',
      extent: 7.14,
      area: 4.44,
      rank: 34.5
    },
    {
      Column1: 3,
      year: 1982,
      month: 9,
      'data-type': 'Goddard',
      hemisphere: 'N',
      extent: 7.3,
      area: 4.43,
      rank: 37
    },
    {
      Column1: 4,
      year: 1983,
      month: 9,
      'data-type': 'Goddard',
      hemisphere: 'N',
      extent: 7.39,
      area: 4.7,
      rank: 39
    },
    {
      Column1: 5,
      year: 1984,
      month: 9,
      'data-type': 'Goddard',
      hemisphere: 'N',
      extent: 6.8100000000000005,
      area: 4.11,
      rank: 31
    },
    {
      Column1: 6,
      year: 1985,
      month: 9,
      'data-type': 'Goddard',
      hemisphere: 'N',
      extent: 6.7,
      area: 4.23,
      rank: 29
    },
    {
      Column1: 7,
      year: 1986,
      month: 9,
      'data-type': 'Goddard',
      hemisphere: 'N',
      extent: 7.41,
      area: 4.72,
      rank: 40
    },
    {
      Column1: 8,
      year: 1987,
      month: 9,
      'data-type': 'Goddard',
      hemisphere: 'N',
      extent: 7.28,
      area: 5.64,
      rank: 36
    },
    {
      Column1: 9,
      year: 1988,
      month: 9,
      'data-type': 'Goddard',
      hemisphere: 'N',
      extent: 7.37,
      area: 5.36,
      rank: 38
    },
    {
      Column1: 10,
      year: 1989,
      month: 9,
      'data-type': 'Goddard',
      hemisphere: 'N',
      extent: 7.01,
      area: 4.86,
      rank: 32
    },
    
  ]
}
 * 
 * -----------------------------------------------------------
 * https://global-warming.org/api/ocean-warming-api
 * 
 * response {
  error: null,
  result: {
    
    '1977': '0.21',
    '1978': '0.14',
    '1979': '0.27',
    '1980': '0.29',
    '1981': '0.25',
    '1982': '0.24',
    '1983': '0.32',
    '1984': '0.21',
    '1985': '0.18',
    '1986': '0.23',
    '1987': '0.38',
    '1988': '0.33',
    '1989': '0.28',
    '1990': '0.37',
    '1991': '0.34',
    '1992': '0.25',
    '1993': '0.26',
    '1994': '0.30',
    '1995': '0.34',
    '1996': '0.31',
    '1997': '0.47',
    '1998': '0.52',
    '1999': '0.31',
    '2000': '0.33',
    '2001': '0.45',
    '2002': '0.48',
    '2003': '0.50',
    '2004': '0.49',
    '2005': '0.49',
    '2006': '0.49',
    '2007': '0.40',
    '2008': '0.39',
    '2009': '0.52',
    '2010': '0.53',
    '2011': '0.41',
    '2012': '0.48',
    '2013': '0.52',
    '2014': '0.61',
    '2015': '0.72',
    '2016': '0.75',
    '2017': '0.69',
    '2018': '0.66',
    '2019': '0.74',
    '2020': '0.72',
    '2021': '0.63',
    '2022': '0.67'
  },
  description: {
    title: 'Global Ocean Temperature Anomalies, January-December',
    units: 'Degrees Celsius',
    base_period: '1901-2000',
    missing: '-999'
  }
}
 * -----------------------------------------------------
 * Articles Api :
 * https://newsdata.io/api/1/news?apikey=pub_180089098407af05742bc64588e14bd077ab6&category=environment&language=en
 */
