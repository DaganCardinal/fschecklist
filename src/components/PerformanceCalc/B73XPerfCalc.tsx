import { useState, useEffect } from "react";
import { Radio, Select, Label } from "flowbite-react";
import { FullInput } from "../Inputs";
import PlaneData from "../../data/B73Xdata.json";

interface B73XVariant {
  BOW: number;
  Length: number;
  Wingspan: number;
  MTOW: number;
}

interface B73XData {
  B737: B73XVariant;
  B738: B73XVariant;
  B739: B73XVariant;
}

PlaneData as B73XData;

export const B73XPerfCalc = () => {
  const [formData, setFormData] = useState({
    variant: "B737",
    ZFW: 0,
    fuelWeight: 0,
    weightUnit: "lbs",
  });
  const [errors, setErrors] = useState({
    ZFW: "",
    fuelWeight: "",
  });
  let variantKey: keyof typeof PlaneData = "B737";
  const [variant, setVariant] = useState("B737");
  const [takeoffWeight, setTakeoffWeight] = useState(0);
  const [takeoffCG, setTakeoffCG] = useState(0);

  useEffect(() => {
    variantKey = variant as keyof typeof PlaneData;
  }, [variant]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }

  function checkValidity() {
    if (formData.ZFW + formData.fuelWeight > PlaneData[variantKey].MTOW) {
      setErrors({
        ...errors,
        ZFW: "Weight exceeds MTOW",
      });
    } else {
      setErrors({
        ...errors,
        ZFW: "",
      });
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center text-center">
        <form action="" className="flex flex-col mx-auto">
          <div>
            <Label htmlFor="variant" value="Select Variant" />
            <Select id="variant" required onChange={handleChange}>
              <option value="B737">737-700 NG</option>
              <option value="B738">737-800 NG</option>
              <option value="B739">737-900 NG</option>
            </Select>
          </div>
          <FullInput
            type="number"
            name="ZFW"
            id="ZFW"
            value={formData.ZFW}
            onChange={handleChange}
          />
          <div className="flex flex-col">
            <Radio defaultChecked id="lbs" name="weightUnit" value="lbs" />
            <Radio id="kg" name="weightUnit" value="kg" />
            <FullInput
              type="number"
              name="fuel"
              id="fuel"
              value={formData.fuelWeight}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </>
  );
};
