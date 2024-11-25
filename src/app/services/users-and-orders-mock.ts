import { Order, User, UserStatus } from "../users/model/user.model";

export const USERS_MOCK: User[] = [
    {
      id: 1,
      name: "Richard Sanchez",
      status: UserStatus.ONLINE,
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Mortimer Smith",
      status: UserStatus.ONLINE,
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "Summer Smith",
      status: UserStatus.ONLINE,
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      id: 4,
      name: "Elizabeth Smith",
      status: UserStatus.ONLINE,
      image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      id: 5,
      name: "Jerry Smith",
      status: UserStatus.ONLINE,
      image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      id: 6,
      name: "Adriana Cluster",
      status: UserStatus.ONLINE,
      image: "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
      id: 7,
      name: "Abe Lincoln",
      status: UserStatus.UNKNOWN,
      image: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      id: 8,
      name: "Rick Thorne",
      status: UserStatus.OFFLINE,
      image: "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
      id: 9,
      name: "Alexander Cunningham",
      status: UserStatus.OFFLINE,
      image: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      id: 10,
      name: "Alan Reese",
      status: UserStatus.OFFLINE,
      image: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
      id: 11,
      name: "Albert Einstein",
      status: UserStatus.OFFLINE,
      image: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
      id: 12,
      name: "Alexander Green",
      status: UserStatus.OFFLINE,
      image: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
      id: 13,
      name: "Gavin Moresby",
      status: UserStatus.UNKNOWN,
      image: "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
      id: 14,
      name: "Morton Hedges",
      status: UserStatus.UNKNOWN,
      image: "https://randomuser.me/api/portraits/men/14.jpg"
    },
    {
      id: 15,
      name: "Rick Corbin",
      status: UserStatus.UNKNOWN,
      image: "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
      id: 16,
      name: "Adam Zimmer",
      status: UserStatus.OFFLINE,
      image: "https://randomuser.me/api/portraits/men/16.jpg"
    },
    {
      id: 17,
      name: "Annie Wilson",
      status: UserStatus.ONLINE,
      image: "https://randomuser.me/api/portraits/women/17.jpg"
    },
    {
      id: 18,
      name: "Morris Franklin",
      status: UserStatus.ONLINE,
      image: "https://randomuser.me/api/portraits/men/18.jpg"
    },
    {
      id: 19,
      name: "Richard Baldwin",
      status: UserStatus.UNKNOWN,
      image: "https://randomuser.me/api/portraits/men/19.jpg"
    },
    {
      id: 20,
      name: "Anthony Johnson",
      status: UserStatus.UNKNOWN,
      image: "https://randomuser.me/api/portraits/men/20.jpg"
    }
];

export const ORDERS_MOCK: Order[] = [
  {
    id: 1,
    userId: 1,
    total: 120.50
  },
  {
    id: 21,
    userId: 1,
    total: 75.20
  },
  {
    id: 2,
    userId: 2,
    total: 45.75
  },
  {
    id: 22,
    userId: 2,
    total: 55.80
  },
  {
    id: 3,
    userId: 3,
    total: 60.30
  },
  {
    id: 23,
    userId: 3,
    total: 130.90
  },
  {
    id: 4,
    userId: 4,
    total: 89.99
  },
  {
    id: 24,
    userId: 4,
    total: 77.50
  },
  {
    id: 5,
    userId: 5,
    total: 22.10
  },
  {
    id: 25,
    userId: 5,
    total: 90.30
  },
  {
    id: 6,
    userId: 6,
    total: 115.40
  },
  {
    id: 26,
    userId: 6,
    total: 210.00
  },
  {
    id: 7,
    userId: 7,
    total: 98.20
  },
  {
    id: 27,
    userId: 7,
    total: 80.40
  },
  {
    id: 8,
    userId: 8,
    total: 175.85
  },
  {
    id: 28,
    userId: 8,
    total: 85.15
  },
  {
    id: 9,
    userId: 9,
    total: 255.00
  },
  {
    id: 29,
    userId: 9,
    total: 300.00
  },
  {
    id: 10,
    userId: 10,
    total: 50.50
  },
  {
    id: 30,
    userId: 10,
    total: 110.70
  },
  {
    id: 11,
    userId: 11,
    total: 300.00
  },
  {
    id: 31,
    userId: 11,
    total: 400.20
  },
  {
    id: 12,
    userId: 12,
    total: 33.45
  },
  {
    id: 32,
    userId: 12,
    total: 67.80
  },
  {
    id: 13,
    userId: 13,
    total: 70.80
  },
  {
    id: 33,
    userId: 13,
    total: 89.99
  },
  {
    id: 14,
    userId: 14,
    total: 120.10
  },
  {
    id: 34,
    userId: 14,
    total: 200.50
  },
  {
    id: 15,
    userId: 15,
    total: 250.00
  },
  {
    id: 35,
    userId: 15,
    total: 45.90
  },
  {
    id: 16,
    userId: 16,
    total: 65.75
  },
  {
    id: 36,
    userId: 16,
    total: 175.00
  },
  {
    id: 17,
    userId: 17,
    total: 180.00
  },
  {
    id: 37,
    userId: 17,
    total: 220.30
  },
  {
    id: 18,
    userId: 18,
    total: 40.25
  },
  {
    id: 38,
    userId: 18,
    total: 65.10
  },
  {
    id: 19,
    userId: 19,
    total: 93.65
  },
  {
    id: 39,
    userId: 19,
    total: 120.25
  },
  {
    id: 20,
    userId: 20,
    total: 75.50
  },
  {
    id: 40,
    userId: 20,
    total: 100.10
  }
];
