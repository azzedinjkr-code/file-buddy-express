import { PRODUCT } from "@/data/product";

const dz = (n: number) => n.toLocaleString("en-US");

const OFFERS = [
  { qty: 1, discount: 0, label: "قطعة واحدة" },
  { qty: 2, discount: 10, label: "قطعتان" },
  { qty: 3, discount: 15, label: "3 قطع" },
];

export function PricingOffers() {
  return (
    <div className="animate-fade-in space-y-2.5">
      <span className="block text-sm font-bold text-foreground">عروض الأسعار</span>
      {OFFERS.map((o) => {
        const base = PRODUCT.price * o.qty;
        const price = Math.round((base * (100 - o.discount)) / 100);
        return (
          <div
            key={o.qty}
            className={`flex items-center justify-between gap-3 rounded-2xl border p-4 ${
              o.discount > 0
                ? "border-cta/35 bg-[linear-gradient(135deg,oklch(0.53_0.11_175/0.10)_0%,oklch(0.6_0.11_55/0.08)_100%)]"
                : "border-border bg-background"
            }`}
          >
            <div className="min-w-0">
              <p className="text-sm font-extrabold text-foreground">{o.label}</p>
              {o.discount > 0 ? (
                <p className="mt-0.5 text-xs font-semibold text-muted-foreground line-through">
                  {dz(base)} {PRODUCT.currency}
                </p>
              ) : (
                <p className="mt-0.5 text-xs font-semibold text-muted-foreground">السعر الأصلي</p>
              )}
            </div>
            <div className="flex shrink-0 items-center gap-2">
              {o.discount > 0 && (
                <span className="rounded-full bg-cta px-2.5 py-1 text-[11px] font-black text-cta-foreground">
                  -{o.discount}%
                </span>
              )}
              <span className="text-base font-black text-primary">
                {dz(price)} {PRODUCT.currency}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
