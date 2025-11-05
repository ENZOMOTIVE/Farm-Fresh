"use client"

import { Header } from "../layout/Header"
import { ShoppingBag, Plus, Minus, Trash2 } from "lucide-react"
import { Button } from "../common/Button"
import { useCart } from "@/hooks/useCart"
import { useTranslation } from "react-i18next"
import { useAuth } from "@/hooks/useAuth"
import { useState } from "react"
import { SearchFilters } from "@/types"

export const TestCart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart()
  const { t } = useTranslation()
  const { user } = useAuth()
  const user_email = user?.email

  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    category: "all",
    priceRange: [0, 100],
    inStockOnly: false,
  })

  const handleSearchChange = (query: string) => {
    setFilters((prev) => ({ ...prev, query }))
  }

  async function order(items: any[], price: number) {
    const orderData = { user_email, items, total_price: price }
    try {
      console.log("✅ Order placed successfully:", orderData)
    } catch (error) {
      console.error("❌ Order failed:", error)
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden pt-16 bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
        <Header onSearchChange={handleSearchChange} searchQuery={filters.query} />
      </div>

      {/* Cart content */}
      {items.length === 0 ? (
        <div className="bg-card rounded-2xl border border-border/50 backdrop-blur-sm shadow-md p-8 text-center max-w-md mx-auto my-8">
          <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">{t("bagEmpty")}</h3>
          <p className="text-muted-foreground leading-relaxed">{t("addItemsToGetStarted")}</p>
        </div>
      ) : (
        <>
          {/* Cart Header */}
          <div className="px-5 py-4 border-b border-border/50 bg-muted/30 flex items-center justify-between flex-shrink-0">
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
            <p className="text-xl font-bold text-foreground hidden sm:block">
              ${getTotalPrice().toFixed(2)}
            </p>
          </div>

          {/* Items List */}
          <div className="p-5 flex-1 overflow-y-auto space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="group relative flex flex-col sm:flex-row gap-4 bg-background/60 rounded-xl border border-border/50 p-4 transition-all duration-200 hover:shadow-md"
              >
                <div className="flex-shrink-0">
                  <img
                    src={item.product.image || "/placeholder.svg"}
                    alt={item.product.name}
                    className="w-full sm:w-24 h-24 object-cover rounded-xl border border-border/50"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground text-base sm:text-lg mb-1 truncate">
                    {t(item.product.name)}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3">${item.product.price.toFixed(2)} each</p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-center bg-muted rounded-lg border border-border/50 overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-9 h-9 flex items-center justify-center hover:bg-accent transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-medium text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-9 h-9 flex items-center justify-center hover:bg-accent transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="font-semibold text-foreground text-right sm:text-left">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-destructive/10 hover:bg-destructive/20 text-destructive flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100 sm:opacity-100 sm:static sm:w-9 sm:h-9"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-border/50 bg-muted/30 px-5 py-4 flex-shrink-0">
            <div className="bg-background/60 rounded-xl p-4 mb-4">
              <div className="flex justify-between items-center text-sm mb-2">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-foreground">Total</span>
                <span className="text-2xl font-bold text-foreground">${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>

            <Button
              className="w-full h-12 text-base font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all"
              size="lg"
              onClick={() => order(items, getTotalPrice())}
            >
              {t("buy")}
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
