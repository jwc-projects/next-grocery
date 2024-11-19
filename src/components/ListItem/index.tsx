"use client";
import { removeFromList } from "@/actions/database";
import { GroceryItem } from "@/types/database";
import { Trash } from "react-feather";

export default function ListItem(props: GroceryItem) {
  return (
    <li className="flex flex-row justify-between gap-4 mb-4">
      <span>
        {props.qty} {props.itemName}
      </span>{" "}
      <span>
        <button onClick={() => removeFromList(props.itemId)}>
          <Trash />
        </button>
      </span>
    </li>
  );
}
