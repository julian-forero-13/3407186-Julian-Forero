export const generateStats = (products) => {

  const totalProducts = products.length;

  let totalValue = 0;
  let totalItems = 0;
  let lowStockProducts = 0;
  let outOfStockProducts = 0;

  const categoryCounts = {};

  for (const { price, quantity, category } of products) {

    totalValue += price * quantity;
    totalItems += quantity;

    if (quantity === 0) outOfStockProducts++;
    if (quantity > 0 && quantity <= 10) lowStockProducts++;

    categoryCounts[category] =
      (categoryCounts[category] || 0) + 1;
  }

  return {
    totalProducts,
    totalValue,
    totalItems,
    lowStockProducts,
    outOfStockProducts,
    categoryCounts,
    avgPrice: totalProducts ? totalValue / totalItems : 0,
    avgQuantity: totalProducts ? totalItems / totalProducts : 0,
  };
};

export default {
  generateStats,
};