# Assignment 2: Understanding the Node.js Architecture

This assignment helps explain how Node.js works, the difference between frontend and backend**, and what package.json versioning means in simple terms.

## 1. Event Loop & Non-Blocking I/O

### What is Non-Blocking I/O?

When you ask Node.js to do something like read a file or talk to a database, it doesn’t just wait and do nothing else.  

This is called non-blocking — it keeps the app fast and responsive.

### What is the Event Loop?

Think of the event loop as Node.js's manager.  
It keeps checking:  
- “Do I have something to do right now?”  
- “Is anything done in the background that needs attention?”

If yes, it handles it and keeps going.

### Simple Analogy: Waiter in a Restaurant

Imagine a single waiter in a restaurant:
- The waiter takes orders and gives them to the kitchen.
- While the food is cooking, the waiter takes other orders.
- When a dish is ready, the waiter serves it.

This is how Node.js works. It doesn’t wait around. It multitasks, even with just one thread!!

## 2. Frontend vs Backend

### What’s the Difference?

- Frontend is what users see: buttons, text, images — basically, the website.
-*Backend is what users don’t see: servers, databases, user login logic — the engine behind the frontend.

### Roles of Each Developer

#### Frontend Developer:
- Designs the look and feel of the app.
- Makes sure buttons work, pages load properly, and users can interact smoothly.

#### Backend Developer:
- Builds the logic behind the scenes.
- Stores data in databases, handles users, payments, etc.

### Real Example: Clicking “Buy Now” on an E-commerce Website

- Frontend Dev makes the “Buy Now” button and handles what happens visually when it’s clicked.
- Backend Dev receives the order, checks stock, saves the purchase, and confirms the payment.

Both roles work together to make the app function perfectly.

## 3. package.json & Versioning (The Easy Way)

### What is `package.json`?

It’s a file in every Node.js project that keeps track of:
- What packages your app uses
- What versions of those packages to install

### Version Format: `major.minor.patch`

Example: `1.2.3`

- `1` → Major version (big changes, might break old code)
- `2` → Minor version (new features, but still safe)
- `3` → Patch version (small fixes)

### What Do `^` and `~` Mean?

Let’s say your project has this:

```json
"express": "^4.17.1"
```

| Symbol | Meaning |
|--------|---------|
| `^` | Allow updates to minor/patch — `4.18.0`, `4.20.1` — but not `5.0.0` |
| `~` | Allow patch updates only — `4.17.2`, `4.17.5` — but not `4.18.0` |
| No symbol | Stick to exact version — only `4.17.1` |

So:
- `^` = Safe + flexible
- `~` = Extra safe
- No symbol = Fixed version
