interface GroceryItem {
  itemId: string | null; // null when creating new item
  name: string;
  qty: string;
}
type GroceryList = Array<GroceryItem>;

export { GroceryItem, GroceryList };
