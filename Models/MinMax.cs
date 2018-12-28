using System;
using System.Numerics;

namespace restamatics.Models
{
    public class MinMax
    {
        public string Min { get; set; }   
        public BigInteger MinBigInt { 
            get { 
                return string.IsNullOrWhiteSpace(Min) 
                    ? (BigInteger) 1
                    : BigInteger.Parse(Min); 
            }
        }
        public string Max { get; set; }
        public BigInteger MaxBigInt { 
            get { 
                return string.IsNullOrWhiteSpace(Max) 
                    ? (BigInteger) 5
                    : BigInteger.Parse(Max); 
            } 
        }
    }   
}