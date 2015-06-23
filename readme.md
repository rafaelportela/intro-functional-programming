#Intro to Functional Programming for OO programmers

You should have node.js installed to run the following commands.

Install the dependencies and run the tests:

```
npm install

mocha step1_filter/test
mocha step2_map/test
mocha step3_reduce/test
mocha challenge/test
```

## Map, reduce and filter

There are simple examples (steps 1 to 3) related to these functions, 
comparing approaches using both imperative and functional paradigms.

## Traveller challenge

One of the first challenges of OO programmers studing the functional paradigm is
related to modeling problems and solutions without using variables and for loops.
The intent here is to write a program following an functional approach.

Can you write a program to help my dear friend?

A friend of mine, after living for quite a while in Johannesburg, South Africa,
went on a trip visiting different African countries. At the end of the trip, with
lots of receipts and bills of things bought during the trip, she would like to
know how much she has spent in total. Since she was living in Joburg, she is
just interested on the cost of the trip from the countries excluding South Africa.

She also wants to know the total cost in the South African currency, Rands.
One ZA rand is equivalent to 0.0003 Ugandan Shillings, and one Swazi Lilangeni is
one Rand (are equivalents, same proportion).

Consider the receipts on the following format:

```
{
  city: 'Mbabane',
  currency: 'Lilangeni',
  value: 50
},
{
  city: 'Johannesburg',
  currency: 'Rands',
  value: 32
},
{
  city: 'Mbabane',
  currency: 'Lilangeni',
  value: 70
},
{
  city: 'Uganda',
  currency: 'Shilling',
  value: 100000
}
```
