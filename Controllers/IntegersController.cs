using System;
using System.Numerics;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using restamatics.Models;
using restamatics.EnumerableFactory;

namespace restamatics.Controllers
{
    [Route("api/[controller]")]
    public class RealsController : Controller
    {
        private string MinGreaterThanMaxError(MinMax param) => $"Min must be greater than max, provided min:{param.Min}, max:{param.Max}";

        [HttpGet("")]
        public IActionResult Reals()
        {
            return Ok (new Reals());
        }

        [HttpGet("[action]")]
        public IActionResult Integers([FromQuery]MinMax param)
        {
            if(param.MinBigInt > param.MaxBigInt)
                return BadRequest(MinGreaterThanMaxError(param));
            return Ok(new Integers 
            {
                Values = IntegerEnumerableFactory.EnumerateIntegers(param)
            });
        }

        [HttpGet("Integers/[action]")]
        public IActionResult Evens([FromQuery]MinMax param)
        {
            if(param.MinBigInt > param.MaxBigInt)
                return BadRequest(MinGreaterThanMaxError(param));
            return Ok(new Evens
            {
                Values = IntegerEnumerableFactory.EnumerateEvens(param)
            });
        }

        [HttpGet("Integers/[action]")]
        public IActionResult Odds([FromQuery]MinMax param)
        {
            if(param.MinBigInt > param.MaxBigInt)
                return BadRequest(MinGreaterThanMaxError(param));
            return Ok(new Odds 
            {
                Values = IntegerEnumerableFactory.EnumerateOdds(param)
            });
        }

        [HttpGet("Integers/[action]")]
        public IActionResult Fibonacci([FromQuery]FibonacciParams param)
        {
            param.Count = param.Count ?? 10;
            if(param.Count > 1476)
                return BadRequest($"Cannot serve a count more than 1477, {param.Count} was provided.");
            return Ok(new Fibonacci 
            {
                Values = IntegerEnumerableFactory.EnumerateFibonacci(param),
            });
        }

        [HttpGet("Integers/[action]")]
        public IActionResult Factorial([FromQuery] FactorialParams param)
        {
            return Ok(new Factorial
            {
                Values = IntegerEnumerableFactory.EnumerateFactorial(param)
            });
        }
    }
}
