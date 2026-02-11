interface Transaction {
  userId: string;
  userName: string;
  amount: number;
  status: 'active' | 'inactive';
}

const data: Transaction[] = [
  { userId: '1', userName: 'Oleg', amount: 150, status: 'active' },
  { userId: '2', userName: 'Anna', amount: 300, status: 'active' },
  { userId: '1', userName: 'Oleg', amount: 50, status: 'active' },
  { userId: '3', userName: 'Igor', amount: 100, status: 'inactive' },
];

interface UserStat {
  userName: string;
  total: number;
}

function getUserStatistics(
  transactions: Transaction[],
): Record<string, UserStat> {
  return transactions.reduce(
    (acc, { userId, userName, amount, status }) => {
      if (status !== 'active') return acc;

      if (!acc[userId]) {
        acc[userId] = { userName, total: 0 };
      }

      acc[userId].total += amount;

      return acc;
    },
    {} as Record<string, UserStat>,
  );
}

console.log('result', getUserStatistics(data));
