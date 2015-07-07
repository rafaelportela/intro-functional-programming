(ns traveller.core)

(defn filter-bills
  [bills]
  (filter #(not= (:city %) "Johannesburg") bills))
