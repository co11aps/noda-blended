function parseCategory(category) {
  const items = ["books", "electronics", "clothing", "other"];
  if (items.includes(category)) return category;
}
function parseFloatNumber(number) {
  if (typeof number !== "string") return;
  const parseNumber = Number.parseFloat(number);
  if (Number.isNaN(parseNumber)) return;
  return parseNumber;
}
function parseFilter(query) {
  return {
    category: parseCategory(query.category),
    minPrice: parseFloatNumber(query.minPrice),
    maxPrice: parseFloatNumber(query.maxPrice),
  };
}
export default parseFilter;
