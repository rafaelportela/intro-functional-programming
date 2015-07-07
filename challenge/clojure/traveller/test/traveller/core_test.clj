(ns traveller.core-test
  (:require [clojure.test :refer :all]
            [traveller.core :refer :all]))

(deftest filter-za-receipts-out
  (testing "Filter receipts from za out."
    (is (= (filter-bills [{:city "Johannesburg"}]) []))))
