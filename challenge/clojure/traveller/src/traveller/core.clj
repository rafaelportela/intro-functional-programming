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

(defn add-rands-value
  [bill rands]
  (assoc bill :rands-value rands))

(defn add-rands-key-value
  [convertion-rates]
  (fn [bill] (add-rands-value bill (rands-value bill convertion-rates))))

(defn add-rands-to-bills
  [convertion-rates bills]
  (map (add-rands-key-value convertion-rates) bills))
