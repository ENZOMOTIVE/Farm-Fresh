# Dr Chang Healthy Farm Backend: Bakery Assistant & Order Management API

Welcome to the **Dr Chang Healthy Farm** backend! This server powers a bakery web application with two main features:

- **AI Bakery Assistant** – Answers user questions about bakery products using OpenAI GPT-4.  
- **Order Management** – Receives, stores, and fetches customer orders using Supabase.

---

## Table of Contents

1. [Features](#features)  
2. [Requirements](#requirements)  
3. [Setup Instructions](#setup-instructions)  
4. [Environment Variables](#environment-variables)  
5. [How to Run the Server](#how-to-run-the-server)  
6. [API Endpoints](#api-endpoints)  
7. [How it Works](#how-it-works)  
8. [Workflow Diagram](#workflow-diagram)  


---

## Features

### 1. AI Bakery Assistant
- Powered by **OpenAI GPT-4** to answer questions about bakery products.  
- Replies in the **same language** as the user.  
- Only provides information about existing bakery products — **never invents new ones**.

### 2. Order Management
- Stores customer orders in **Supabase**.  
- Fetches past orders for dashboard display.  
- Validates input before saving (email, items array, total price).

---

## Requirements

Before running this project, ensure you have:

- **Node.js** (v18+ recommended)  
- **npm** or **yarn** installed  
- **Supabase account** for database access  
- **OpenAI API key**  

---

## Setup Instructions

1. **Clone the repository**
```bash
git clone <repository-url>
cd <repository-folder>


2. **Install Dependencies**

``` 
npm install
 ```

3. **Setup the Enviorenment**

``` 
touch .env

OPENAI_API_KEY=your_openai_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_service_role_key
```

⚠️ Important: Keep this file secret. Do not share it publicly.


### Run Command 

npm run dev
```

## API Endpoints

1. **AI Response**

 
```
https://farm-fresh-kbrt.onrender.com/ai-response
```

Input field Example:
```
{
  "message": "Do you have vegan cupcakes?"
}
```
Response Field Example:
```
{
  "success": true,
  "aiResponse": "Yes, we have vegan chocolate and vanilla cupcakes."
}
```

2.**Submit Orders**


``` 
https://farm-fresh-kbrt.onrender.com/order
```


Input field Example:
```
{
  "user_email": "customer@example.com",
  "items": [
    { "name": "New York Cheesecake", "quantity": 1 },
    { "name": "Chocolate Croissant", "quantity": 2 }
  ],
  "total_price": 22.5
}
```
Response Field Example:
```
{
  "success": true,
  "message": "Order saved successfully",
  "order": [
    {
      "user_email": "customer@example.com",
      "items": [...],
      "total_price": 22.5,
      "created_at": "2025-11-10T03:00:00Z"
    }
  ]
}
```

3. **Fetch All Orders**



```
https://farm-fresh-kbrt.onrender.com/orders/all
```
Output Field Example:

```
{
  "success": true,
  "orders": [
    {
      "user_email": "customer@example.com",
      "items": [...],
      "total_price": 22.5,
      "created_at": "2025-11-10T03:00:00Z"
    }
  ]
}
```

## How It Works



Product Context

buildProductContext() creates a readable list of all bakery products from SAMPLE_PRODUCTS.

This ensures the AI assistant knows exactly which products exist.

AI Response

getAIResponse(userMessage) sends the user’s message to OpenAI’s API along with the product list.

The AI returns a polite, accurate answer about available products.

Order Management

Orders are validated (check that email exists, items is an array, total_price is a number).

Saved to Supabase under the orders table.

Can be fetched anytime for dashboard display.



## Workflow Diagram

```
Frontend (User) 
      |
      | Sends message or order
      v
Backend Server (Node.js + Express)
      | 
      |-- For AI questions --> Sends to OpenAI API --> Returns AI response
      |
      |-- For Orders --> Stores/retrieves from Supabase --> Returns order data
      |
      v
Response back to Frontend (User sees reply or order confirmation)
```

