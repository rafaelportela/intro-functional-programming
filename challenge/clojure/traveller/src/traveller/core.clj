(ns traveller.core)

(defn filter-bills
  [bills]
  (filter #(not= (:city %) "Johannesburg") bills))

(defn convert
  [rate value]
  (* rate value))

(defn select
  [currency convertion-rates]
  ((keyword currency) convertion-rates))

(defn rands-value
  [bill convertion-rates]
  (Math/round (convert (:value bill) (select (:currency bill) convertion-rates))))
