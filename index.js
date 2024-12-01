// index.js
import createLinkedList from './src/linkedList.js';

// Function to demonstrate all LinkedList methods
function demonstrateLinkedList() {
  console.log("===== Linked List Demonstration =====");
  
  // Create a new linked list
  const list = createLinkedList();

  // Demonstrate append
  console.log("\n1. Append Method:");
  list.append("apple");
  list.append("banana");
  list.append("cherry");
  console.log("List after appending:", list.toString());

  // Demonstrate prepend
  console.log("\n2. Prepend Method:");
  list.prepend("zucchini");
  console.log("List after prepending:", list.toString());

  // Demonstrate size
  console.log("\n3. Size Method:");
  console.log("Current list size:", list.size());

  // Demonstrate head and tail
  console.log("\n4. Head and Tail Methods:");
  console.log("Head value:", list.head().value);
  console.log("Tail value:", list.tail().value);

  // Demonstrate at
  console.log("\n5. At Method:");
  console.log("Node at index 2:", list.at(2).value);
  console.log("Node at index 4:", list.at(4).value);

  // Demonstrate contains
  console.log("\n6. Contains Method:");
  console.log("Contains 'banana':", list.contains("banana"));
  console.log("Contains 'grape':", list.contains("grape"));

  // Demonstrate find
  console.log("\n7. Find Method:");
  console.log("Index of 'banana':", list.find("banana"));
  console.log("Index of 'grape':", list.find("grape"));

  // Demonstrate insertAt
  console.log("\n8. InsertAt Method:");
  list.insertAt("date", 3);
  console.log("List after inserting 'date' at index 3:", list.toString());

  // Demonstrate removeAt
  console.log("\n9. RemoveAt Method:");
  const removedValue = list.removeAt(2);
  console.log("Removed value:", removedValue);
  console.log("List after removing index 2:", list.toString());

  // Demonstrate pop
  console.log("\n10. Pop Method:");
  const poppedValue = list.pop();
  console.log("Popped value:", poppedValue);
  console.log("List after popping:", list.toString());

  // Final list state
  console.log("\n11. Final List State:");
  console.log("Final list:", list.toString());
  console.log("Final list size:", list.size());
}

// Run the demonstration
demonstrateLinkedList();