import { TestBed } from "@angular/core/testing";

import { CalculatorInputValidator } from "./validators.service";

describe("ValidatorsService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: CalculatorInputValidator = TestBed.get(
      CalculatorInputValidator
    );
    expect(service).toBeTruthy();
  });
});
