using System;
using System.Numerics;

namespace restamatics.Models
{
    public class FibonacciParams
    {
        public uint? Count { get; set; }
        public string SeedOne { get; set; }
        public BigInteger SeedOneBigInt {
            get {
                return string.IsNullOrWhiteSpace(SeedOne)
                    ? (BigInteger) 1
                    : BigInteger.Parse(SeedOne);
            }
        }
        public string SeedTwo { get; set; }
        public BigInteger SeedTwoBigInt {
            get {
                return string.IsNullOrWhiteSpace(SeedTwo)
                    ? (BigInteger) 1
                    : BigInteger.Parse(SeedTwo);
            }
        }
    }
}