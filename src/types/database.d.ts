interface GroceryItem {
  itemId: number | null; // null when creating new item
  itemName: string;
  qty: string;
}
type GroceryList = Array<GroceryItem>;

export { GroceryItem, GroceryList };
