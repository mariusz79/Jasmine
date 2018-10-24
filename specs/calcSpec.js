describe("Calculator", function(){                  //description
    describe("Addition tests", function(){           //additional test
        it("should return 42", function(){          //assertion
            expect(addition(20,22)).toBe(42);       //expectation, addition is name of the function defined in calc.js
        })
    })                                                   
})