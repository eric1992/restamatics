using System;
using System.Numerics;
using System.Collections.Generic;
using restamatics.Models;
using restamatics.EnumerableFactory;

namespace restamatics.EnumerableFactory
{
    public static class IntegerEnumerableFactory
    {
        public static IEnumerable<BigInteger> EnumerateIntegers(MinMax param)
        {
            var min = param.MinBigInt;
            var max = param.MaxBigInt;
            for(var i = min; i <= max; i++){
                yield return i;
            }
        }   

        public static IEnumerable<BigInteger> EnumerateEvens(MinMax param)
        {
            var min = param.MinBigInt;
            var max = param.MaxBigInt;
            for(var i = min + (min % 2); i <= max; i += 2)
                yield return i;
        }
        
        public static IEnumerable<BigInteger> EnumerateOdds(MinMax param)
        {
            var min = param.MinBigInt;
            var max = param.MaxBigInt;
            for(var i = min + (min % 2 == 0 ? 1 : 0); i <= max; i += 2)
                yield return i;
        }

        public static IEnumerable<BigInteger> EnumerateFibonacci(FibonacciParams param)
        {
            var index = 1;
            if(param.Count < 1)
                yield break;
            yield return param.SeedOneBigInt;
            index++;
            if(param.Count == 1)
                yield break;
            yield return param.SeedTwoBigInt;
            index++;
            if(param.Count == 2)
                yield break;
            var twoBefore = param.SeedOneBigInt;
            var oneBefore = param.SeedTwoBigInt;
            var current = twoBefore + oneBefore;
            while(index <= param.Count){
                yield return current;
                var oldCurrent = current;
                twoBefore = oneBefore;
                oneBefore = current;
                current = twoBefore + oneBefore;
                index++;
            }
        }

        public static IEnumerable<BigInteger> EnumerateFactorial(FactorialParams param){
            var start = GetFactorial(param.StartIndex ?? 1);
            var index = 0;
            while(index < (param.Count ?? 10)){
                yield return start;
                start *= index;
                index++;
            }

        }

        public static BigInteger GetFactorial(uint x){
            var answer = (BigInteger)1;
            for(var i = 2; i <= x; i++)
                answer *= i;
            return answer;
        }
    }
}