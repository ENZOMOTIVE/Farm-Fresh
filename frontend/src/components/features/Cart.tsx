"use client"

import { ShoppingBag, Plus, Minus, Trash2 } from "lucide-react"
import { Button } from "../common/Button"
import { useCart } from "@/hooks/useCart"
import { useTranslation } from "react-i18next"
import { useAuth } from "@/hooks/useAuth"


type CartProps = {
  variant?: "mini" | "detailed"
}

export const Cart = ({ variant = "detailed" }: CartProps) => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart()
  const { t } = useTranslation()
  const { user } = useAuth()
  const user_email = user?.email

  async function order(items: any[], price: number) {
    const orderData = { user_email, items, total_price: price }
    try {
      const res = await fetch("http://localhost:5000/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      })
      if (!res.ok) throw new Error("Failed to place order")
      const data = await res.json()
      console.log("✅ Order placed successfully:", data)
    } catch (error) {
      console.error("❌ Order failed:", error)
    }
  }

  if (items.length === 0) {
    return (
      <div className="bg-card rounded-2xl border border-border/50 backdrop-blur-sm shadow-lg shadow-black/5 p-8 text-center max-w-md mx-auto">
        <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{t("bagEmpty")}</h3>
        <p className="text-muted-foreground leading-relaxed">{t("addItemsToGetStarted")}</p>
      </div>
    )
  }

  if (variant === "mini") {
    // Mini Cart version
    return (
      <div className="bg-card rounded-2xl border border-border/50 backdrop-blur-sm shadow-lg shadow-black/5 overflow-hidden w-80 max-h-[70vh] flex flex-col">
        <div className="px-4 py-3 border-b border-border/50 bg-muted/30 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-foreground">{t("YourCart")}</h3>
          <p className="text-sm text-muted-foreground">{getTotalItems()} items</p>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          {items.map((item) => (
            <div key={item.product.id} className="flex items-center gap-3">
              <img
                src={item.product.image || "/placeholder.svg"}
                alt={item.product.name}
                className="w-12 h-12 object-cover rounded-lg"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{t(item.product.name)}</p>
                <p className="text-xs text-muted-foreground">
                  ${item.product.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <p className="text-sm font-semibold text-foreground">
                ${(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <div className="px-4 py-3 border-t border-border/50 bg-muted/30 flex flex-col gap-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Subtotal</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          <Button
            className="w-full h-10 text-base font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow transition-all"
            onClick={() => order(items, getTotalPrice())}
          >
            {t("proceedToCheckout")}
          </Button>
        </div>
      </div>
    )
  }

  // Detailed Cart version
  return (
  <div className="bg-card rounded-2xl border border-border/50 backdrop-blur-sm shadow-lg shadow-black/5 overflow-hidden max-w-3xl mx-auto flex flex-col h-[80vh]">
  {/* Header */}
  <div className="px-6 py-5 border-b border-border/50 bg-muted/30 flex items-center justify-between flex-shrink-0">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
        <ShoppingBag className="w-5 h-5 text-primary-foreground" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">{t("YourCart")}</h3>
        <p className="text-sm text-muted-foreground">
          {getTotalItems()} {getTotalItems() === 1 ? "item" : "items"}
        </p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-2xl font-bold text-foreground">${getTotalPrice().toFixed(2)}</p>
    </div>
  </div>

  {/* Items container: scrollable */}
  <div className="p-6 flex-1 overflow-y-auto space-y-4">
    {items.map((item) => (
      <div
        key={item.product.id}
        className="group relative bg-background/50 rounded-xl border border-border/50 p-4 hover:shadow-md hover:shadow-black/5 transition-all duration-200"
      >
        <div className="flex items-start gap-4">
          <div className="relative flex-shrink-0">
            <img
              src={item.product.image || "/placeholder.svg"}
              alt={item.product.name}
              className="w-20 h-20 object-cover rounded-xl border border-border/50"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground leading-tight mb-1">{t(item.product.name)}</h4>
            <p className="text-muted-foreground text-sm mb-3">${item.product.price.toFixed(2)} each</p>

            <div className="flex items-center gap-3">
              <div className="flex items-center bg-muted rounded-lg border border-border/50">
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="w-9 h-9 flex items-center justify-center hover:bg-accent transition-colors rounded-l-lg"
                  disabled={item.quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>

                <span className="w-12 text-center font-medium text-sm">{item.quantity}</span>

                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center hover:bg-accent transition-colors rounded-r-lg"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="text-right flex-1">
                <p className="font-semibold text-foreground">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.product.id)}
            className="w-9 h-9 rounded-lg bg-destructive/10 hover:bg-destructive/20 text-destructive flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* Footer: fixed at bottom */}
  <div className="border-t border-border/50 pt-4 px-6 flex-shrink-0 bg-muted/30">
    <div className="bg-muted/30 rounded-xl p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-muted-foreground">Subtotal</span>
        <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold text-foreground">Total</span>
        <span className="text-2xl font-bold text-foreground">${getTotalPrice().toFixed(2)}</span>
      </div>
    </div>

    <Button
      className="w-full h-12 text-base font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 group"
      size="lg"
      onClick={() => order(items, getTotalPrice())}
    >
      {t("proceedToCheckout")}
    </Button>
  </div>
</div>

  )
}
