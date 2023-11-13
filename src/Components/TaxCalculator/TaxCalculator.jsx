import {
  Button,
  InputAdornment,
  MenuItem,
  Select,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import useMediaQuery from "@mui/material/useMediaQuery";
import DoneIcon from "@mui/icons-material/Done";
import React, { useState, useEffect } from "react";
import flag from "../../assets/flag.svg";

const TaxCalculator = () => {
  const [income, setIncome] = useState(1);
  const [gainValue, setGainValue] = useState(0);
  const [term, setTerm] = useState("");
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [expense, setExpense] = useState(0);
  const [taxRate, setTaxRate] = useState("");
  const [discount, setDiscount] = useState(0);
  const [netCapitalGain, setNetCapitalGain] = useState(0);
  const [taxToPay, setTaxToPay] = useState(0);
  const isPhone = useMediaQuery("(max-width:500px)");

  const handleIncomeChange = (event) => {
    setIncome(event.target.value);
  };

  const calculateGain = () => {
    let gain = salePrice - purchasePrice - expense;
    setGainValue(gain);
  };

  const calculateTax = () => {
    if (term === "long" && gainValue > 0) {
      const discountObtained = 0.5 * gainValue;
      setDiscount(discountObtained);

      const netGain = gainValue - discountObtained;
      setNetCapitalGain(netGain);
    } else {
      setDiscount(0);
      const netGain = gainValue;
      setNetCapitalGain(netGain);
    }
    if (income === 1) {
      setTaxRate("0%");
      setTaxToPay(0.0);
    } else if (income === 2) {
      setTaxRate("Nil + 19% of excess over $18,200");
      const taxToPay = (19 / 100) * netCapitalGain;
      setTaxToPay(taxToPay);
    } else if (income === 3) {
      setTaxRate("$5,092 + 32.5% of excess over $45,000");
      const taxToPay = (32.5 / 100) * netCapitalGain;
      setTaxToPay(taxToPay);
    } else if (income === 4) {
      setTaxRate("$29,467 + 37% of excess over $120,000");
      const taxToPay = (37 / 100) * netCapitalGain;
      setTaxToPay(taxToPay);
    } else if (income === 5) {
      setTaxRate("$51,667 + 45% of excess over $180,000");
      const taxToPay = (45 / 100) * netCapitalGain;
      setTaxToPay(taxToPay);
    }
  };

  useEffect(() => {
    calculateGain();
    calculateTax();
  }, [purchasePrice, salePrice, expense, income, term, gainValue]);

  return (
    <Stack className="p-6 gap-6 justify-center items-center bg-white flex-1 rounded-lg">
      <Typography variant={isPhone ? "body1" : "h5"} className="font-bold">
        Free Crypto Tax Calculator Australia
      </Typography>

      <Stack className="justify-center items-center gap-6 w-full md:w-4/5">
        {/* Country and Fin. Year */}
        <Stack className="flex-row gap-4 md:gap-y-6 md:gap-x-12 w-full justify-start items-center">
          {/* Financial Year */}
          <Stack className="flex-col items-start md:flex-row md:items-center gap-2 w-1/2">
            <Typography className="text-darkGray text-sm md:text-base">
              Financial Year
            </Typography>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={1}
              className="w-36 sm:w-48 h-10 rounded-md text-sm md:text-base bg-lightGray"
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
              }}
            >
              <MenuItem value={1}>FY 2023-24</MenuItem>
            </Select>
          </Stack>

          {/* Country */}
          <Stack className="flex-col items-start md:flex-row md:items-center gap-2 w-1/2">
            <Typography className="text-darkGray text-sm md:text-base">
              Country
            </Typography>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={1}
              className="w-36 sm:w-48 h-10 rounded-md text-sm md:text-base bg-lightGray"
            >
              <MenuItem value={1}>
                <Stack className="flex-row gap-2">
                  <img src={flag} alt="" />
                  Australia
                </Stack>
              </MenuItem>
            </Select>
          </Stack>
        </Stack>

        <Divider className="w-full h-1" />

        <Stack className="flex-col md:flex-row gap-y-6 md:gap-x-12 w-full justify-center items-start">
          {/* Purchase Price */}
          <Stack className="gap-2 w-full md:w-1/2">
            <Typography className="text-darkGray text-sm md:text-base">
              Enter purchase price of Crypto
            </Typography>
            <TextField
              type="Number"
              onChange={(e) => setPurchasePrice(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon className="text-black" />
                  </InputAdornment>
                ),
              }}
              className="flex-1 rounded-lg bg-lightGray focus-within:bg-white"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#EFF2F5",
                  },
                  "&:hover fieldset": {
                    borderColor: "#EFF2F5",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#0052FE",
                  },
                },
              }}
              variant="outlined"
            />
          </Stack>

          {/* Sale Price */}
          <Stack className="gap-2 w-full md:w-1/2">
            <Typography className="text-darkGray text-sm md:text-base">
              Enter sale price of Crypto
            </Typography>
            <TextField
              type="Number"
              onChange={(e) => setSalePrice(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon className="text-black" />
                  </InputAdornment>
                ),
              }}
              className="flex-1 rounded-lg bg-lightGray  focus-within:bg-white"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#EFF2F5",
                  },
                  "&:hover fieldset": {
                    borderColor: "#EFF2F5",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#0052FE",
                  },
                },
              }}
              variant="outlined"
            />
          </Stack>
        </Stack>

        <Stack className="flex-col md:flex-row gap-y-6 md:gap-x-12 w-full">
          {/* Expense */}
          <Stack className="gap-2 w-full md:w-1/2">
            <Typography className="text-darkGray text-sm md:text-base">
              Enter your expenses
            </Typography>
            <TextField
              type="Number"
              onChange={(e) => setExpense(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon className="text-black" />
                  </InputAdornment>
                ),
              }}
              className="rounded-lg bg-lightGray  focus-within:bg-white"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#EFF2F5",
                  },
                  "&:hover fieldset": {
                    borderColor: "#EFF2F5",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#0052FE",
                  },
                },
              }}
              variant="outlined"
            />
          </Stack>

          {/* Investment Type */}
          <Stack className="gap-2 w-full md:w-1/2">
            <Typography className="text-darkGray text-sm md:text-base">
              Investment type
            </Typography>

            <Stack className="flex-row gap-4 justify-between">
              <Stack className="w-1/2 pb-6 relative">
                <Button
                  variant="outlined"
                  className={`${
                    term === "short"
                      ? "bg-[rgba(1, 65, 207, 0.2)] border-blue border-2 text-blue"
                      : "border-gray hover:border-gray text-gray"
                  } p-2 capitalize rounded-lg pr-12  h-14 font-semibold text-base border-2 hover:border-2 `}
                  onClick={() => setTerm("short")}
                >
                  Short Term
                  {term === "short" && (
                    <DoneIcon className="absolute right-4" />
                  )}
                </Button>
                <Typography
                  className="absolute bottom-0 text-gray text-base font-medium"
                  variant="caption"
                >
                  {"< 12 months"}
                </Typography>
              </Stack>

              <Stack className="w-1/2 pb-6 relative">
                <Button
                  className={`${
                    term === "long"
                      ? "bg-[rgba(1, 65, 207, 0.2)] border-blue border-2 text-blue"
                      : "border-gray hover:border-gray text-gray"
                  } p-2 capitalize rounded-lg pr-12  h-14 font-semibold text-base border-2 hover:border-2`}
                  variant="outlined"
                  onClick={() => setTerm("long")}
                >
                  Long Term
                  {term === "long" && <DoneIcon className="absolute right-4" />}
                </Button>
                <Typography
                  className="absolute bottom-0 text-gray text-base font-medium"
                  variant="caption"
                >
                  {"> 12 months"}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack className="flex-col md:flex-row w-full justify-center gap-y-6 md:gap-x-12">
          {/* Annual Income */}
          <Stack className="gap-2 w-full md:w-1/2">
            <Typography className="text-darkGray text-sm md:text-base">
              Select Your Annual Income
            </Typography>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={income}
              onChange={handleIncomeChange}
              className=" rounded-md text-sm md:text-base bg-lightGray"
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
              }}
            >
              <MenuItem value={1}> 0 - $18,200</MenuItem>
              <MenuItem value={2}> $18,201 - $45,000</MenuItem>
              <MenuItem value={3}> $45,001 - $120,000</MenuItem>
              <MenuItem value={4}> $120,001 - $180,000</MenuItem>
              <MenuItem value={5}> $180,001+</MenuItem>
            </Select>
          </Stack>

          {/* Tax Rate */}
          <Stack className="flex-row md:flex-col gap-2 w-full md:w-1/2 justify-start md:justify-end items-start md:mt-8">
            <Typography variant="body2">Tax Rate </Typography>
            <Typography variant="caption" className="ml-2 md:ml-0">
              {taxRate}
            </Typography>
          </Stack>
        </Stack>

        <Stack
          className={`${
            term === "long" ? "flex" : "hidden"
          } flex-col md:flex-row gap-y-6 md:gap-x-12 w-full`}
        >
          {/* Capital Gains */}
          <Stack className="pt-2 gap-2 w-full">
            <Typography className="text-darkGray text-sm md:text-base">
              Capital gains amount
            </Typography>
            <TextField
              value={gainValue ? gainValue : "0.00"}
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon className="text-black" />
                  </InputAdornment>
                ),
              }}
              className="flex-1 rounded-lg bg-lightGray  focus-within:bg-white"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#EFF2F5",
                  },
                  "&:hover fieldset": {
                    borderColor: "#EFF2F5",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#0052FE",
                  },
                },
              }}
              variant="outlined"
            />
          </Stack>

          {/* Discount */}
          <Stack className="pt-2 gap-2 w-full">
            <Typography className="text-darkGray text-sm md:text-base">
              Discount for long term gains
            </Typography>
            <TextField
              value={discount ? discount : "0.00"}
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon className="text-black" />
                  </InputAdornment>
                ),
              }}
              className="rounded-lg bg-lightGray  focus-within:bg-white"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#EFF2F5",
                  },
                  "&:hover fieldset": {
                    borderColor: "#EFF2F5",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#0052FE",
                  },
                },
              }}
              variant="outlined"
            />
          </Stack>
        </Stack>

        <Stack className="flex-col md:flex-row w-full gap-y-6 md:gap-x-12">
          {/* Net Capital Gains */}
          <Stack className="p-4 rounded-lg bg-lightGreen justify-center items-center gap-2 w-full md:w-1/2">
            <Typography className="text-darkGray text-sm md:text-base">
              Net Capital gains tax amount
            </Typography>
            <Typography variant="h5" className="text-darkGreen font-bold">
              {netCapitalGain ? `$ ${netCapitalGain}` : "$0.00"}
            </Typography>
          </Stack>

          {/* Tax */}
          <Stack className="p-4 rounded-lg bg-lightBlue justify-center items-center gap-2 w-full md:w-1/2">
            <Typography className="text-darkGray text-sm md:text-base">
              The tax you need to pay*
            </Typography>
            <Typography variant="h5" className="text-medBlue font-bold">
              {taxToPay ? `$ ${taxToPay}` : "$0.00"}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TaxCalculator;
