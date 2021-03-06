describe("Calculator", function(){                  //description
    describe("Addition tests", function(){          //additional descriptiona nd test
        it("should return 42", function(){          //assertion
            expect(addition(20,22)).toBe(42);       //expectation, addition is name of the function defined in calc.js
        });
        it("should return 26", function(){          //assertion
            expect(addition(7,19)).toBe(26);        //expectation
        });
        it("should have called the alert function if either number is undefined", function () {
            spyOn(window, "alert");     //spy checks, if fuction has been called
            addition("Hello", "There");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });                                                   
});