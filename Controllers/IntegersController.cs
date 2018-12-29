using System;
using System.Numerics;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using restamatics.Models;

namespace restamatics.Controllers
{
    [Route("api/[controller]")]
    public class RealsController : Controller
    {
        private string MinGreaterThanMaxError(MinMax param) => $"Min must be greater than max, provided min:{param.Min}, max:{param.Max}";

        [HttpGet("[action]")]
        public IActionResult Integers([FromQuery]MinMax param){
            if(param.MinBigInt > param.MaxBigInt)
                return BadRequest(MinGreaterThanMaxError(param));
            return Ok(EnumerateIntegers(param));
        }

        private static IEnumerable<BigInteger> EnumerateIntegers(MinMax param){
            var min = param.MinBigInt;
            var max = param.MaxBigInt;
            for(var i = min; i <= max; i++){
                yield return i;
            }
        }

        [HttpGet("Integers/[action]")]
        public IActionResult Evens([FromQuery]MinMax param){
            if(param.MinBigInt > param.MaxBigInt)
                return BadRequest(MinGreaterThanMaxError(param));
            return Ok(EnumerateEvens(param));
        }

        private static IEnumerable<BigInteger> EnumerateEvens(MinMax param){
            var min = param.MinBigInt;
            var max = param.MaxBigInt;
            for(var i = min + (min % 2); i <= max; i += 2)
                yield return i;
        }

        [HttpGet("Integers/[action]")]
        public IActionResult Odds([FromQuery]MinMax param){
            if(param.MinBigInt > param.MaxBigInt)
                return BadRequest(MinGreaterThanMaxError(param));
            return Ok(EnumerateOdds(param));
        }

        private static IEnumerable<BigInteger> EnumerateOdds(MinMax param){
            var min = param.MinBigInt;
            var max = param.MaxBigInt;
            for(var i = min + (min % 2 == 0 ? 1 : 0); i <= max; i += 2)
                yield return i;
        }

        [HttpGet("Integers/[action]")]
        public IActionResult Fibonacci([FromQuery]FibonacciParams param){
            if(param.Count == null)
                return BadRequest("Count cannot be null.");
            if(param.Count > 1476)
                return BadRequest($"Cannot serve a count more than 1477, {param.Count} was provided.");
            var values = EnumerateFibonacci(param).ToList();
            return Ok(values);
        }

        private static IEnumerable<BigInteger> EnumerateFibonacci(FibonacciParams param){
            var index = 1;
            if(param.Count < 1)
                yield break;
            yield return param.SeedOneBigInt;
            index += 1;
            if(param.Count == 1)
                yield break;
            yield return param.SeedTwoBigInt;
            index += 1;
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
                index += 1;
                
            }
        }
    }
}
