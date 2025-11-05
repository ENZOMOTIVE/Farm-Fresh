"use client"

import { ShoppingBag } from "lucide-react"
import { Button } from "../common/Button"
import { useCart } from "@/hooks/useCart"
import { useTranslation } from "react-i18next"

import { useNavigate } from "react-router-dom"



export const MiniCart = () => {
  const { items,  getTotalPrice, getTotalItems } = useCart()
  const { t } = useTranslation()


  const navigate = useNavigate()



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
            onClick={() => navigate('/cart')}
          >
            {t("proceedToCheckout")}
          </Button>
        </div>
      </div>
    )
  }

 