const FlatListFormatData = (dataLists, numColumns) => {
  const totalRows = Math.floor(dataLists.length / numColumns);
  let totalLastRows = dataLists.length - totalRows * numColumns;

  while (totalLastRows !== 0 && totalLastRows !== numColumns) {
    dataLists.push({ key: "blank", empty: "true" });
    totalLastRows++;
  }
  return dataLists;
};

export default FlatListFormatData;
