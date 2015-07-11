(ns traveller.core-test
  (:require [clojure.test :refer :all]
            [traveller.core :refer :all]))

(deftest filter-za-receipts-out
  (testing "Filter receipts from za out."
    (is (= (filter-bills [{:city "Johannesburg"}]) []))))

(deftest apply-convertion-to-value
  (testing "Given currency convertion rate, it applies the convertion to value."
    (let [convertion-rate 0.5 value 10]
      (is (= (convert value convertion-rate) 5.0)))))

(deftest select-convertion-rate
  (testing "Select given convertion rate value"
    (let [convertion-rates {:real 0.3}]
      (is (= (select "real" convertion-rates) 0.3)))))

(deftest select-convertion-rate-and-apply
  (testing "select convertion rate base on currency name"
    (let [
          convertion-rates {:shilling 0.0003}
          bill {:currency "shilling" :value 100000}]
      (is (= (rands-value bill convertion-rates) 30)))))

(deftest add-rands-value-to-bill
  (testing "Add rands value to bill"
    (let [
          rands 30
          bill {:currency "shilling" :value 100000}]
      (is (= (add-rands-value bill rands) {:currency "shilling" :value 100000 :rands-value 30})))))

(deftest convert-and-add-rands-key-to-bill
  (testing "Convert to rands value and add key to bill"
  (let [
          convertion-rates {:shilling 0.0003}
          bill {:currency "shilling" :value 100000}
          add-rands-key (add-rands-key-value convertion-rates)]
    (is (= (add-rands-key bill) {:currency "shilling" :value 100000 :rands-value 30})))))

(deftest convert-and-add-rands-to-bill-collection
  (testing "Convert to rands value and add key to bill collection"
  (let [
          convertion-rates {:shilling 0.0003}
          bills [{:currency "shilling" :value 100000}]]
    (is (= (add-rands-to-bills convertion-rates  bills) [{:currency "shilling" :value 100000 :rands-value 30}])))))

(deftest accumulate-total-test
  (testing "Accumulate total values"
    (is (= (accumulate-total 20 {:rands-value 12}) 32))))

(deftest sum-rands-values
  (testing "Sum all rands values of bills"
    (let [
          bills [{:rands-value 10} {:rands-value 20} {:rands-value 30}]]
      (is (= (sum bills) 60)))))
