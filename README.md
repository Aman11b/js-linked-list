# JavaScript Linked List Implementation

## Overview

A comprehensive, modular Linked List data structure implementation in JavaScript using factory functions.

## Features

### Core Methods
- `append(value)`: Add node to the end of the list
- `prepend(value)`: Add node to the start of the list
- `size()`: Get total number of nodes
- `head()`: Get the first node
- `tail()`: Get the last node
- `at(index)`: Get node at a specific index
- `pop()`: Remove and return the last element
- `contains(value)`: Check if value exists in the list
- `find(value)`: Find index of a value
- `toString()`: Convert list to string representation

### Extra Credit Methods
- `insertAt(value, index)`: Insert node at specific index
- `removeAt(index)`: Remove node at specific index

## Project Structure
linked-list-project/ │ ├── index.js # Main demonstration script ├── src/ │ ├── node.js # Node factory function │ └── linkedList.js # LinkedList factory function └── README.md


## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/js-linked-list.git
cd js-linked-list
```
2.Ensure you have Node.js installed

## Usage Example

```javascript
import createLinkedList from './src/linkedList.js';

// Create a new list
const list = createLinkedList();

// Add elements
list.append("first");
list.prepend("zero");
list.insertAt("middle", 2);

// Interact with the list
console.log(list.toString());
console.log(list.size());
console.log(list.contains("first"));
```
