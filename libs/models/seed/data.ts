export const arrUserData = [{
        "pkUserId": 1,
        "strUserName": "admin",
        "strUserType": "admin",
        "strPassword": "$2a$10$EMJyc.nocUHmIK3VnxLXeOGweGNJ8ByMHHZ7D1m5y.p9eK2ZOOP.G",
    },
    {
        "pkUserId": 2,
        "strUserName": "operator",
        "strUserType": "operator",
        "strPassword": "$2a$10$EMJyc.nocUHmIK3VnxLXeOGweGNJ8ByMHHZ7D1m5y.p9eK2ZOOP.G",
    },
    {
        "pkUserId": 3,
        "strUserName": "Abdu",
        "strUserType": "user",
        "strPassword": "$2a$10$EMJyc.nocUHmIK3VnxLXeOGweGNJ8ByMHHZ7D1m5y.p9eK2ZOOP.G",
    }
];

export const arrChannelsData = [{
        "pkChannelId": 1,
        "strChannelName": "Republic TV",
        "intAddOnMonthlyPrice": 99,
        "strCategory": "News",
        "strLanguage": "English"
    },
    {
        "pkChannelId": 2,
        "strChannelName": "ND TV",
        "intAddOnMonthlyPrice": 69,
        "strCategory": "News",
        "strLanguage": "Hindi"
    },
    {
        "pkChannelId": 3,
        "strChannelName": "Jio TV",
        "intAddOnMonthlyPrice": 89,
        "strCategory": "Sports",
        "strLanguage": "English"
    }
]

export const arrPackagesData = [{
        "pkPackageId": 1,
        "strPackageName": "All Sports",
        "intAnnumPrice": 999
    },
    {
        "pkPackageId": 2,
        "strPackageName": "All News",
        "intAnnumPrice": 699
    }
];

export const arrPAckageChannelMapData = [{
        "fkPackageId": 1,
        "fkChannelId": 3
    },
    {
        "fkPackageId": 2,
        "fkChannelId": 1
    },
    {
        "fkPackageId": 2,
        "fkChannelId": 2
    }
]