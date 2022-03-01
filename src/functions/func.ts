export const byDate = (a: { cars_vehicles_date_added: string | number | Date; }, b: { cars_vehicles_date_added: string | number | Date; }) => {
    let dateFirst = new Date(a.cars_vehicles_date_added).getTime();
    let dateSecond = new Date(b.cars_vehicles_date_added).getTime();
    return dateSecond - dateFirst;
  };