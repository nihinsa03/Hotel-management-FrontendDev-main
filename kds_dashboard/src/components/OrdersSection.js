import React, { useEffect, useState } from "react";
import "./OrdersSection.css";

const OrdersSection = () => {
  const [pendingItems, setPendingItems] = useState([]);
  const [orders, setOrders] = useState([]);

  const fetchData = () => {
    setPendingItems([
      { item: "Crispy Chicken Burger [R]", count: 2 },
      { item: "Spicy Chicken Wings", count: 3 },
    ]);

    setOrders([
      {
        id: 1,
        type: "dine-in",
        table: "Table 05",
        time: "5 min ago",
        orderNumber: "2019ODR",
        waiter: "Saman Kumara (09)",
        size: "large",
        color: "blue",
        actions: ["Start", "Print"],
        items: ["Burger", "Fries", "Pepsi"],
      },
      {
        id: 2,
        type: "dine-in",
        table: "Table 05",
        time: "5 min ago",
        orderNumber: "2019ODR",
        waiter: null,
        size: "size-a",
        color: "pink",
        actions: ["Print"],
        items: ["Sandwich"],
      },
      {
        id: 3,
        type: "take-away",
        table: "Lobby 01",
        time: "5 min ago",
        orderNumber: "2019ODR",
        waiter: null,
        size: "medium",
        color: "orange",
        actions: ["Finished", "Hold"],
        items: ["Chicken Wings", "Cola"],
      },
    ]);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="orders-container">
      <aside className="pending-items">
        <h2 className="name">Pending Item Summary</h2>
        <div className="pending-item-header">
          <p className="header-item">Item</p>
          <p className="header-count">Count</p>
        </div>
        <hr className="header-line" />
        {pendingItems.map((item, index) => (
          <div className="pending-item" key={index}>
            <p>{item.item}</p>
            <p>{item.count}</p>
          </div>
        ))}
      </aside>

      <section className="order-boxes">
        {orders.map((order) => (
          <div
            className={`order-card ${order.type}`}
            key={order.id}
          >
            <div className={`order-header ${order.color}`}>
              <div className="order-title">
                <strong>{order.table}</strong>{" "}
                <span className="order-time">{order.time}</span>
              </div>
              <p className="order-details">
                Order number - {order.orderNumber}
                {order.waiter && (
                  <>
                    <br />
                    Waiter name - {order.waiter}
                  </>
                )}
              </p>
              <hr className="order-divider" />
              <p className="order-type">
                <strong>{order.type.replace("-", " ")}</strong>
              </p>
            </div>

            <div className="order-content">
              {order.items?.map((item, index) => (
                <p key={index} className="order-item">
                  🍽️ {item}
                </p>
              ))}
            </div>

            <div className="order-footer">
              {order.actions.map((action, index) => (
                <button
                  key={index}
                  className={
                    action.toLowerCase().includes("start")
                      ? "start-btn"
                      : action.toLowerCase().includes("print")
                      ? "print-btn"
                      : action.toLowerCase().includes("finished")
                      ? "finished-btn"
                      : "hold-btn"
                  }
                >
                  {action === "Print" ? "🖨️" : action}
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OrdersSection;
