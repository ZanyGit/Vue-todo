

export function sortByToday(listToSort){
        const todaysDate = new Date(Date.now())
        const sortedList = listToSort.filter((item) => {
        let itemDate = new Date(item.date);
          return (
            itemDate.getUTCDate() === todaysDate.getUTCDate() &&
            itemDate.getMonth() === todaysDate.getMonth() &&
            itemDate.getFullYear() === todaysDate.getFullYear()
          );
        });
        return sortedList
}

export function sortByThisMonth(listToSort){
    const todaysDate = new Date(Date.now())
    const sortedList = listToSort.filter((item) => {
        let itemDate = new Date(item.date);
        return (
          itemDate.getMonth() === todaysDate.getMonth() &&
          itemDate.getFullYear() === todaysDate.getFullYear()
        );
      });
    return sortedList
}

export function sortByThisWeek(listToSort){
    const todaysDate = new Date(Date.now())
    const sortedList = listToSort.filter((item) => {
        const itemDate = new Date(item.date)
        const todayDateNr = todaysDate.getDate();
        const todayDay = todaysDate.getDay();
        console.log(todayDateNr, todayDay)
        const firstDayOfWeek = new Date(
          todaysDate.setDate(todayDateNr - (todayDay ))
        );
        console.log(firstDayOfWeek)
        const lastDayOfWeek = new Date(firstDayOfWeek);
        lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);
        return itemDate >= firstDayOfWeek && itemDate <= lastDayOfWeek;
      });
      return sortedList
}