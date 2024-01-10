
// Subtrair 10% de valor de mercado a todas as companhias
// FIltrar somente companhias fundadas depois de 1980
// somar o valor de mercado restante






const companies = [
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 }
];

const sub10Percent = (company) => {
    company.makertValue = company.marketValue * 0.1;
    return company
}

const filterCompany = (company) => company.foundedOn < 1980

const calcMarketValue = ((acc, company) => acc + company.marketValue)


const restabteComapnies = companies.map(sub10Percent).filter(filterCompany).reduce(calcMarketValue, 0)

console.log(restabteComapnies)