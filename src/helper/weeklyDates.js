// Function to get last 7 days from today
export default function getLast7Days() {
    const today = new Date();
    const last7Days = [];
  
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
  
      // Check if the month has changed and adjust the date accordingly
      if (date.getDate() > today.getDate()) {
        date.setMonth(today.getMonth() - 1);
      }
  
      last7Days.push(date.toISOString().split('T')[0]);
    }
  
    return last7Days.reverse(); // Reverse the order to get the dates in ascending order.
  }
  
  const last7Days = getLast7Days();