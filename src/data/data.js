const companies = [{
    '序号': 1,
    "Name": 'Super Mart of the West',
    "地址": '702 SW 8th Street',
    "城市": 'Bentonville',
    "国家": 'Arkansas',
    "邮编": 72716,
    "电话": '(800) 555-2797',
    "传真": '(800) 555-2171',
    "网址": 'http://www.nowebsitesupermart.com'
}, {
    ID: 2,
    Name: 'Electronics Depot',
    Address: '2455 Paces Ferry Road NW',
    City: 'Atlanta',
    State: 'Georgia',
    ZipCode: 30339,
    Phone: '(800) 595-3232',
    Fax: '(800) 595-3231',
    Website: 'http://www.nowebsitedepot.com'
}, {
    ID: 3,
    Name: 'K&S Music',
    Address: '1000 Nicllet Mall',
    City: 'Minneapolis',
    State: 'Minnesota',
    ZipCode: 55403,
    Phone: '(612) 304-6073',
    Fax: '(612) 304-6074',
    Website: 'http://www.nowebsitemusic.com'
}, {
    ID: 4,
    Name: "Tom's Club",
    Address: '999 Lake Drive',
    City: 'Issaquah',
    State: 'Washington',
    ZipCode: 98027,
    Phone: '(800) 955-2292',
    Fax: '(800) 955-2293',
    Website: 'http://www.nowebsitetomsclub.com'
}];


export const employee = {
    'ID': 1,
    'FirstName': 'John',
    'LastName': 'Heart',
    'Position': 'CEO',
    'BirthDate': '1964/03/16',
    'HireDate': '1995/01/15',
    'Notes': 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
    'Address': '351 S Hill St.',
    'City': 'Los Angeles',
    'State': 'CA',
    'ZipCode': '90013',
    'Home': '555-684-1334',
    'Mobile': '555-684-1335',
    'Email': 'jheart@dx-email.com',
    'Skype': 'jheart_DX_skype',
};

export const positions = [
    'HR Manager',
    'IT Manager',
    'Controller',
    'CEO',
    'Sales Manager',
    'Support Manager',
    'Shipping Manager'
];

export const states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];


export default {
    getCompanies() {
        return companies;
    }
};