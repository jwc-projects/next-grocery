import { getGroceryList } from "@/actions/database";
import ListItem from "../ListItem";

export default async function List() {
  // Get list from DB
  const list = await getGroceryList();
  return (
    <ul>
      {list.map((listItem) => (
        <ListItem {...listItem} key={listItem.itemId} />
      ))}
    </ul>
  );
}
